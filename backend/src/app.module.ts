import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module'
import sessionConfig from './config/session.config'
import { SessionModule } from './modules/setup/session.module'
@Module({
  imports: [
    AuthModule, 
    SessionModule,
    ConfigModule.forRoot({ cache: true })
  ]
})
export class AppModule {}
