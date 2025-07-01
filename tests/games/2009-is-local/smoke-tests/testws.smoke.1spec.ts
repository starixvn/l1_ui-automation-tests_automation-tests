import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  let sessionId = "";
  let username = "";

  // Define credentials interface
  interface Credentials {
    sessionId: string;
    username: string;
  }

  // Helper function to wait for credentials
  const waitForCredentials = (): Promise<Credentials> => {
    return new Promise((resolve) => {
      const checkCredentials = () => {
        if (sessionId && username) {
          resolve({ sessionId, username });
        } else {
          setTimeout(checkCredentials, 100);
        }
      };
      checkCredentials();
    });
  };

  // Listen to console messages from the page
  page.on("console", (msg) => {
    console.log(msg.text());
  });

  // Listen to WebSocket frames
  page.on("websocket", (ws) => {
    // For non-fishprawncrab connections, just extract credentials
    ws.on("framesent", (frame) => {
      const payload = frame.payload.toString();
      try {
        const jsonStr = JSON.parse(payload.replace("42/user/minisedie,", ""));
        sessionId = jsonStr[1].ss;
        username = jsonStr[1].username;

        console.log("[WebSocket] Received credentials:");
        console.log("[WebSocket] sessionId:", sessionId);
        console.log("[WebSocket] username:", username);
      } catch (e) {
        // Ignore non-JSON messages
      }
    });
  });

  console.log("Starting test...");
  await page.goto("https://l2-glbs.lumigame.com/signin");
  await page.getByLabel("Mini Saba.Club").check();

  // Click Get Token and wait for credentials
  await page.getByRole("button", { name: "Get Token" }).click();
  await page.getByRole("button", { name: "Set Default Balance" }).click();

  // Wait for credentials to be received
  const credentials = await waitForCredentials();
  console.log("Final credentials received:");
  console.log("sessionId:", credentials.sessionId);
  console.log("username:", credentials.username);

  await page.evaluate(`
    // Create WebSocket connection
    const ws = new WebSocket('wss://l2-proxy.lumigame.com/fishprawncrab/socket.io/?EIO=4&transport=websocket');

    // Flag to track if we're authenticated
    let isAuthenticated = false;

    ws.onopen = () => {
      console.log('[FishPrawnCrab] Connection opened');

      // Format the authentication message according to socket.io protocol
      const authData = {
        isAuthenticated: true,
        ss: '${credentials.sessionId}',
        username: '${credentials.username}',
        language: 'vi-VN',
        system: 3,
        time: new Date().toISOString()
      };
      ws.send('40/user/fishprawncrab')
      // Socket.io message format: 42/namespace,["event",data]
      const authMessage = '42/user/fishprawncrab,["signin",' + JSON.stringify(authData) + ']';
      ws.send(authMessage);
      console.log('[FishPrawnCrab] Auth sent:', authMessage);
      ws.send('42/user/fishprawncrab,["inGame"]');

    };

    ws.onmessage = (event) => {
      console.log('[FishPrawnCrab] Message received:', event.data);
      
      // Check if this is an authentication success message
      if (event.data.includes('"event":"signin"') && event.data.includes('"status":1')) {
        isAuthenticated = true;
        console.log('[FishPrawnCrab] Authentication successful');
        
        // Send bet message after successful authentication
        const betMessage = '42/user/fishprawncrab,["bet",{"amount":10,"username":"${credentials.username}","m":"2","betChoice":"stag"}]';
        ws.send(betMessage);
        ws.send(betMessage);
        ws.send(betMessage);
        console.log('[FishPrawnCrab] Bet message sent:', betMessage);
      }
    };

    ws.onclose = () => {
      console.log('[FishPrawnCrab] Connection closed');
    };

    ws.onerror = (error) => {
      console.error('[FishPrawnCrab] Error:', error);
    };
  `);

  // Wait for messages to be processed
  await page.waitForTimeout(5000);
  console.log("Test completed.");
});
