import { SessionOptions } from "express-session";

declare global{
  namespace NodeJS {
    interface ProcessEnv {
      port: number
      session: SessionOptions
    } 
  }
}

export {}