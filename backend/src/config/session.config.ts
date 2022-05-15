import { registerAs } from "@nestjs/config"
console.log(process.env.PORT);

export default registerAs('session', () => ({ 
  secret: 'my-secret',
  resave: false,
  saveUninitialized: false,
  name: 'session'
}))