// Define credentials interface
export interface Credentials {
  sessionId: string;
  username: string;
  connectionUrl: string;
}

// Define message interfaces
export interface BufferData {
  type: "Buffer";
  data: number[];
}

export interface InitialMessage {
  type: number;
  data: {
    buffer: BufferData;
    type: number;
  };
  nsp: string;
}

export interface SignInData {
  isAuthenticated: true;
  ss: string;
  username: string;
  language: string;
  system: 1;
  time: string;
}

export interface AuthMessage {
  type: number;
  data: ["signin", SignInData];
  options: {
    compress: boolean;
  };
  nsp: string;
}

export interface InGameMessage {
  type: number;
  data: ["inGame"];
  options: {
    compress: boolean;
  };
  nsp: string;
}

export interface BetMessage {
  type: number;
  data: ["bet", any];
  options: {
    compress: boolean;
  };
  nsp: string;
}

export interface GameConfig {
  urlPath: string;
  url: string;
  namespace: string;
  origin: string;
  betChoice: string;
  betAmount: number;
  responseName: string;
  clientSeed?: string;
  coinValue?: number;
  totalBet?: number;
  betLevel?: number;
  autoCashOut?: number;
}
