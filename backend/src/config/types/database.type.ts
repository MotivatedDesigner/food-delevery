export interface DatabaseConfig {
  type: string
  host: string
  port: number
  username: string
  password: string
  database: string
  entities: string[]
  synchronize: boolean
  logging?: boolean
} 