
async function fetchData() { // Use "async function" instead of arrow function
  try {
    const response = await fetch(`http://10.70.70.120:8080/api/result`, {
      method: 'GET',
      headers: {
        Accept: '*/*'
      }
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData; // Return the JSON data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


async function generateReport(reportData) {
  const url = `http://10.70.70.120:8080/api/report`; 
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json' // Expect JSON response for error handling
    },
    body: JSON.stringify(reportData)
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
      throw new Error(`Report generation failed: ${errorData.message}`);
    }

    return response.json(); // Get the generated report data (if any)
  } catch (error) {
    console.error("Error generating report:", error);
    throw error; // Re-throw for external handling
  }
}

// Example usage in your IIFE:
(async () => {
  try {
    const data = await fetchData();
    const udid = data.map(element => element.uuid);   
    const reportData = {
      reportSpec: { 
        "path": [
          "DailySmokeTests"
        ],
        "executorInfo": {
          "name": "CICD",
          "type": "GitLab",
          "buildName": "https://git3.nexdev.net/l1/ui-automation-tests/automation-tests/-/pipelines",
          "buildUrl": "https://git3.nexdev.net/l1/ui-automation-tests/automation-tests/-/pipelines",
          "reportName": "DailySmokeTests",
          "reportUrl": "reportUrl"
        }
      },
      results: udid,
      deleteResults: true
    };
    if (udid.length >0) {
      const report = await generateReport(reportData);
      console.log("Report generated:", report); 
    }
    else {
      console.log("No Allure Result Found"); 

    }
  } catch (error) {
    console.error("Error in the main flow:", error);
  }
})();