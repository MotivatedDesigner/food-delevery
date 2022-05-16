
import { Controller, Post, Req, Body, Get, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { SignInLocalDto } from './dtos/sign-up-local.dto'
import { IsLoggedInGuard } from './guards/is-logged-in.guard'
import { LocalGuard } from './guards/local.guard'

@Controller('auth')
export class AuthController {

  @Post('signin')
  @UseGuards(LocalGuard)
  async signInLocal(@Body() signInLocalDto: SignInLocalDto) {}

  @Get('test')
  @UseGuards(IsLoggedInGuard)
  async signup(@Req() req: Request) {
    return req.user
  }
}
