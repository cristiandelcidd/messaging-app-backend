declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: number;
      PWD: string;
      DB_CONNECTION?: string;
    }
  }
}

export {};
