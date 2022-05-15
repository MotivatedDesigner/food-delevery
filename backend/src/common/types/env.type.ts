import { SessionOptions } from "express-session";

declare global{
  namespace NodeJS {
    interface ProcessEnv {
      session: SessionOptions
    } 
  }
}

export {}