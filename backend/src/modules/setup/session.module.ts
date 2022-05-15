import { Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import * as passport from 'passport'
import * as session from 'express-session'
import sessionConfig from 'src/config/session.config'
import { ConfigModule, ConfigType } from '@nestjs/config'
import { SessionOptions } from 'express-session'

@Module({
  imports: [ConfigModule.forFeature(sessionConfig)]
})
export class SessionModule implements NestModule {
  
  constructor(
    @Inject(sessionConfig.KEY)
    private readonly config: ConfigType<typeof sessionConfig>,
  ) {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      session(this.getSessionConfig()),
      passport.initialize(),
      passport.session(),
    ).forRoutes('*')
  }

  private getSessionConfig(): SessionOptions {
    const _sessionConfig = this.config.session
    _sessionConfig.cookie = this.config.cookie

    if(process.env.NODE_ENV === 'production') {
      _sessionConfig.secret = process.env.SESSION_SECRET
      _sessionConfig.cookie.secure = process.env.COOKIE_SECURE
    }

    return _sessionConfig
  }

}
