import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { CookieConfig, SessionConfig } from "./config/types";
import * as session from "express-session";
import * as passport from "passport";

export function sessionSetup(app: INestApplication) {

  const configService = app.get<ConfigService>(ConfigService)
  
  /* Session Setup */
  let sessionConfig = configService.get<SessionConfig>('session')
  let cookieConfig = configService.get<CookieConfig>('cookie')
  
  if(process.env.NODE_ENV === 'production') {
    sessionConfig = {
      ...sessionConfig,
      secret: process.env.SESSION_SECRET || sessionConfig.secret
    }
    cookieConfig = {
      ...cookieConfig,
      secure: process.env.COOKIE_SECURE || cookieConfig.secure
    }
  }
  app.use(session({
    ...sessionConfig,
    cookie: cookieConfig,
  }))
  app.use(passport.initialize())
  app.use(passport.session())
}