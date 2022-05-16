import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from 'src/config/database.config';
import { DatabaseConfig } from 'src/config/types/database.type';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      inject: [databaseConfig.KEY],
      useFactory:  (databaseConfig: DatabaseConfig) => {   
        const _databaseConfig = databaseConfig  
        
        if(process.env.NODE_ENV === 'production') {
          console.log(_databaseConfig)
          _databaseConfig.username = process.env.POSTGRES_USERNAME
          _databaseConfig.password = process.env.POSTGRES_PASSWORD
          _databaseConfig.host = process.env.POSTGRES_HOST
          _databaseConfig.port = + process.env.POSTGRES_PORT
          _databaseConfig.synchronize = process.env.POSTGRES_SYNCHRONIZE === 'true'
          _databaseConfig.logging = process.env.POSTGRES_LOGGING === 'true'
        } 

        return _databaseConfig as TypeOrmModuleOptions
      },
    }),
  ],
})
export class DatabaseModule {}