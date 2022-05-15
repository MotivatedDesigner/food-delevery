import { registerAs } from "@nestjs/config"

export default registerAs('session', () => ({ 
  secret: 'my-secret',
  resave: false,
  saveUninitialized: false,
  name: 'session'
}))