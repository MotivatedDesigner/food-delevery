import { registerAs } from "@nestjs/config"
console.log(process.env.PORT);

export default registerAs('cookie', () => ({ 
  httpOnly: true,
  secure: false,
  maxAge: null
}))