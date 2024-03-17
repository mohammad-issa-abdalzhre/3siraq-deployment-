import { Body, Controller, Get, HttpStatus, Post, Render, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Response } from 'express';

@Controller('home')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @Render('login') // Render the 'login.hbs' view
  getLogin() {
    return ; // No additional data to pass to the view
  }

  @Post('login')
  async login(@Body() dto: AuthDto) {
    const token = await this.authService.signinLocal(dto);
    return { access_token: token };
  }

  @Post('local/signin')
  async signinLocal(@Body() dto: AuthDto, @Res() res: Response) {
    try {
      const token = await this.authService.signinLocal(dto);
      // Send the token back to the client as part of the response
      res.status(HttpStatus.OK).json({ token });
    } catch (error) {
      res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }
  }
}
