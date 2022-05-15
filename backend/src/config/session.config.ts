import { registerAs } from "@nestjs/config"
import { CookieOptions, SessionOptions } from "express-session"

export default registerAs('session', () => ({ 
  session: {
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false,
    name: 'session'
  } as SessionOptions,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: null,
    sameSite: 'lax'
  } as CookieOptions
}))