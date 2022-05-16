import { registerAs } from "@nestjs/config"

export default registerAs('database', () => ({ 
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "food-delivery",
  entities: ['src/modules/**/**/*.entity{.ts,.js}'],
  synchronize: true,
  // logging: true,
  
  /* to be tested connection pool */
  // extra: {
  //   max: "20",
  //   connectionLimit: "20",
  // }
}))