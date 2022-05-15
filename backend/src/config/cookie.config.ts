import { registerAs } from "@nestjs/config"

export default registerAs('cookie', () => ({ 
  httpOnly: true,
  secure: false,
  maxAge: null,
  sameSite: 'lax'
}))