declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      PWD: string;
      DB_CONNECTION?: string;
      APPID: string;
      KEY: string;
      SECRET: string;
      CLUSTER: string;
    }
  }
}

export {};
