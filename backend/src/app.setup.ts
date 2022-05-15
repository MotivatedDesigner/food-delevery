import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as session from "express-session";
import * as passport from "passport";
import { SessionConfig } from "./config/session.config";

export function sessionSetup(app: INestApplication) {

  const configService = app.get<ConfigService>(ConfigService)

  /* Session Setup */
  const sessionConfig = configService.get<SessionConfig>('session')
  app.use(session(sessionConfig))
  app.use(passport.initialize())
  app.use(passport.session())
}