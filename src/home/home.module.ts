import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { HomeService } from './home.service';



@Module({providers: [PrismaService,HomeService],})

export class HomeModule {}


