import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserModule } from '../users/user.module'
import { PassportModule } from '@nestjs/passport'
import { LocalStrategy } from './strategies/local.strategy'
import { AuthController } from './auth.controller'
import { SessionSerializer } from './session.serializer'

@Module({
  controllers: [AuthController],
  imports: [UserModule, PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}