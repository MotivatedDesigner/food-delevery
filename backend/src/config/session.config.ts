import { registerAs } from "@nestjs/config";

export default registerAs('session', () => ({ 
  secret: process.env.session?.secret || 'my-secret',
  resave: false,
  saveUninitialized: false,
}))

export interface SessionConfig {
  secret: string;
  resave: boolean;
  saveUninitialized: boolean;
}