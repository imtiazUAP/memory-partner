import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../../entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    UsersModule, 
    PassportModule,
    JwtModule.register({
      secret: 'XYZSECRET',
      signOptions: { expiresIn: '24h' },
    }),

  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}