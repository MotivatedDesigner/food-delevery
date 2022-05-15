
import { Controller, Post, Req, Session, Get, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { IsLoggedInGuard } from './guards/is-logged-in.guard'
import { LocalGuard } from './guards/local.guard'

@Controller('auth')
export class AuthController {

  @Post('signin')
  @UseGuards(LocalGuard)
  async signin(@Req() req: Request) {
    return req.user
  }

  @Get('test')
  @UseGuards(IsLoggedInGuard)
  async test(@Req() req: Request) {
    return req.user
  }
}
