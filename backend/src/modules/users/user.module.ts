import { Module } from '@nestjs/common'
import { UserService } from './user.service'

@Module({
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
