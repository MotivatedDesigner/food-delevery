
import { Controller, Post, Req, Session, Get, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { AuthenticatedGuard } from './guards/authenticated.guard'
import { LocalGuard } from './guards/local.guard'

@Controller('auth')
export class AuthController {

  @Post('signin')
  @UseGuards(LocalGuard)
  async signin(@Req() req: Request) {
    return req.user
  }

  @Get('test')
  @UseGuards(AuthenticatedGuard)
  async test(@Req() req: Request) {
    return req.user
  }
}
