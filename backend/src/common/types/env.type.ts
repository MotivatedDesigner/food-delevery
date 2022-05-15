import { SessionOptions } from "express-session";

declare global{
  namespace NodeJS {
    interface ProcessEnv {
      /* App */
      NODE_ENV: 'development' | 'production' | 'test'
      SERVER_PORT: number

      /* Session */
      SESSION_SECRET: string

      /* Cookie */
      COOKIE_SECURE: boolean | any
    } 
  }
}

export {}