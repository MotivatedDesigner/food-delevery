import { Injectable } from '@nestjs/common'
import { UserService } from '../users/user.service'
import { SignInLocalDto } from './dtos/sign-in-local.dto'

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {
    // private readonly userRepository: UserRepository
  }

  async validateUser(signInLocalDto: SignInLocalDto): Promise<any> {
    const { username, password } = signInLocalDto
    const user = await this.userRepository.findOne({ username })
    /* for better UX but may be security @risk */
    if (!user) {
      return null
      // throw new NotFoundException(`User with USERNAME "${username}" not found`)
    }
    const isValid = await this.validatePassword(password, user.password, user.salt)
    if (!isValid) {
      return null
      // throw new UnauthorizedException('Wrong Password')
    }
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  private async validatePassword(password: string, hashedPassword: string, salt: string) {
    return await bcrypt.hash(password, salt) === hashedPassword
  }
}
