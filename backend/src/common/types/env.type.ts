import { SessionOptions } from "express-session";

declare global{
  namespace NodeJS {
    interface ProcessEnv {
      /* App */
      NODE_ENV: 'development' | 'production' | 'test'
      SERVER_PORT: string

      /* Session */
      SESSION_SECRET: string

      /* Cookie */
      COOKIE_SECURE: string

      /* Database */
      POSTGRES_NAME: string
      POSTGRES_HOST: string
      POSTGRES_PORT: string
      POSTGRES_USERNAME: string
      POSTGRES_PASSWORD: string
      POSTGRES_SYNCHRONIZE: string
      POSTGRES_LOGGING: string
    } 
  }
}

export {}