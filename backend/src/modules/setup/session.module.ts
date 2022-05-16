import { Inject, MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { SessionOptions } from 'express-session'
import { ConfigModule, ConfigType } from '@nestjs/config'
import * as passport from 'passport'
import * as session from 'express-session'
import * as RedisStore from 'connect-redis'
import { REDIS, RedisModule } from './redis.module'
import sessionConfig from 'src/config/session.config'
import { RedisClient } from 'redis'

@Module({
  imports: [
    ConfigModule.forFeature(sessionConfig),
    RedisModule
  ]
})
export class SessionModule implements NestModule {
  
  constructor(
    @Inject(sessionConfig.KEY)
    private readonly config: ConfigType<typeof sessionConfig>,
    @Inject(REDIS)
    private readonly redis: RedisClient
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
      _sessionConfig.cookie.secure = process.env.COOKIE_SECURE === 'true'
    }
    
    _sessionConfig.store = new (RedisStore(session))({ client: this.redis, logErrors: true })

    return _sessionConfig
  }

}
