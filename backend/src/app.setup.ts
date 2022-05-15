import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { CookieConfig, SessionConfig } from "./config/types";
import * as session from "express-session";
import * as passport from "passport";

export function sessionSetup(app: INestApplication) {

  const configService = app.get<ConfigService>(ConfigService)
  
  /* Session Setup */
  const sessionConfig = configService.get<SessionConfig>('session')
  const cookieConfig = configService.get<CookieConfig>('cookie')
  app.use(session({
    ...sessionConfig,
    secret: process.env.SESSION_SECRET || sessionConfig.secret,
    cookie: {
      ...cookieConfig,
      secure: process.env.COOKIE_SECURE || cookieConfig.secure
    }
  }))
  app.use(passport.initialize())
  app.use(passport.session())
}