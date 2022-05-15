export interface CookieConfig {
  httpOnly: boolean
  secure: boolean | any
  maxAge: null | number
  sameSite: 'strict' | 'lax' | 'none' | undefined
}