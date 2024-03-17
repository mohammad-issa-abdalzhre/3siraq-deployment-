import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import { HomeModule } from './home/home.module';
import { PrismaService } from './home/prisma.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    HomeModule,
    AuthModule,
    JwtModule.register({
      secret: 'super-secret-cat',
      signOptions: { expiresIn: '1h' }, // Example configuration for token expiration
    }),
  ],
  controllers: [AppController, HomeController, AuthController],
  providers: [AppService, HomeService, PrismaService, AuthService],
})
export class AppModule {}
