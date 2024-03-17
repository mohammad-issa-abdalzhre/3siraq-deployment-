import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto';

const users = [
  {
    "id": 1,
    "email": "v121@gmail.com",
    "password": "123"
  }
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  signinLocal(dto: AuthDto) {
    console.log("user" ,dto)
    const user = users.find((user) => user.email === dto.email);
    console.log("user" ,user)
    if (!user) throw new UnauthorizedException('Credentials incorrect');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Invalid credentials');

    return this.signUser(user.id, user.email, 'user');
  }

  private signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type: type,
    });
  }
}
