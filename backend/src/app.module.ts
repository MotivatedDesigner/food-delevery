import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import sessionConfig from './config/session.config'
@Module({
  imports: [
    AuthModule, 
    ConfigModule.forRoot({
      load: [sessionConfig],
      cache: true,
    })
  ]
})
export class AppModule {}
