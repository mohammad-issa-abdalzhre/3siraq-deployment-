import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, User, client, prind, prodect } from '@prisma/client';

@Injectable()
export class HomeService {
  async removeUser(id:number) {
  
    const taskToDelete = await this.prisma.user.findUnique({ where: { id } });
  
    if (!taskToDelete) {
      console.log("xx")
      return { message: `Task with ID ${id} does not exist.` };
    }
    await this.prisma.user.delete({ where: { id } });
    console.log(`Task with ID ${id} has been deleted.`)
    return { message: `Task with ID ${id} has been deleted.` };
  }
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
  async createprind(data: Prisma.prindCreateInput): Promise<prind> {
    return this.prisma.prind.create({
      data,
    });
  }
  async fetchall() {
      const users = await this.prisma.user.findMany();
      const all =users.map((user) => ({ id: user.id, name: user.name ,description:user.description,pathimage:user.pathimage}))
      return await this.prisma.user.findMany();
    }

  async fetchallprind() {
      const users = await this.prisma.user.findMany();
      const all =users.map((user) => ({ id: user.id, name: user.name ,description:user.description,pathimage:user.pathimage}))
      return await this.prisma.prind.findMany();
    }



  async createclient(data: Prisma.clientCreateInput): Promise<client> {
       return this.prisma.client.create({
        data,
      });
    }
  async fetchallclient() {
      return await this.prisma.client.findMany();
    }
    

    async fetchallproject() {
      return await this.prisma.prodect.findMany(
      );
    }

    async createproject(data: Prisma.prodectCreateInput): Promise<prodect> {
         return this.prisma.prodect.create({
        data,
      });
    }
    };
  



