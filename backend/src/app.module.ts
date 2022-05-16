import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module'
import { SessionModule } from './modules/setup/session.module'
import { DatabaseModule } from './modules/setup/database.module'

@Module({
  imports: [
    AuthModule, 
    SessionModule,
    DatabaseModule,
    ConfigModule.forRoot({ cache: true }),
  ]
})
export class AppModule {}
