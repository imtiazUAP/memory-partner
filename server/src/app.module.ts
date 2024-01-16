import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemoriesModule } from './memories/memories.module';
import { Memories } from '../entities/memories.entity';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { JwtService } from '@nestjs/jwt';
import { Users } from '../entities/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        name: 'default',
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [Memories, Users],
        synchronize: false,
      }),
    }),
    MemoriesModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService, {
    provide: APP_INTERCEPTOR,
    useClass: AuthInterceptor,
  }],
})
export class AppModule {}