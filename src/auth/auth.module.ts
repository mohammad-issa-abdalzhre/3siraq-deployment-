// auth/auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';


@Module({
  imports: [
    JwtModule.register({
      secret: 'super-secret-cat', // Set your actual secret here
      signOptions: { expiresIn: '1h' }, // Example expiration time
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService], // Export AuthService for other modules
})
export class AuthModule {}
