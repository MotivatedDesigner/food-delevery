import { Module } from '@nestjs/common';
import * as Redis from 'redis';

export const REDIS = Symbol('AUTH:REDIS');

@Module({
  providers: [
    {
      provide: REDIS,
      // useValue: Redis.createClient(), /* Also works */
      useValue: Redis.createClient({ port: 6379, host: 'localhost' }),
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}