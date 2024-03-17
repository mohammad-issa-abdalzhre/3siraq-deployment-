import { Body, Controller, Delete, Get, Param, ParseFilePipeBuilder, ParseIntPipe, Post, Render, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { HomeService } from './home.service';
import { SampleDto, clientts, project1 } from './sample.dto';
import { client, project, storage } from './congug';
import { prindStorage } from './confiprond';
import { JwtAuthGuard } from 'src/utils/guards/jwt-guard.guard';


@Controller('home')
export class HomeController {
  constructor(private readonly appService: HomeService) {}

  @UseInterceptors(FileInterceptor('file', { storage }))
  @Post('file')
  async uploadFile(
    @Body(ValidationPipe) body: SampleDto,
    @UploadedFile(new ParseFilePipeBuilder().build({ fileIsRequired: false })) file: Express.Multer.File,
  ) {
    console.log('Uploaded File:', file);
    console.log('Other Information:', body);
    if (file) {
      const data = { name: body.name, description: body.description, pathimage: file.originalname, path: body.path };
      await this.appService.createUser(data);
      console.log(data);
      return {
        body,
        file: {
          originalname: file.originalname,
          filename: file.filename,
        },
      };
    } else {
      return {
        body,
        file: null,
      };
    }
  }

  @UseInterceptors(FileInterceptor('file', { storage: prindStorage }))
  @Post('prind')
  async uploadFile2(
    @Body() body: any,
    @UploadedFile(new ParseFilePipeBuilder().build({ fileIsRequired: false })) file: Express.Multer.File,
  ) {
    console.log('Uploaded File:', file);
    await this.appService.createprind({ pathimage: file.originalname });
    return;
  }

  @UseInterceptors(FileInterceptor('file', { storage: client }))
  @Post('client')
  async uploadFile3(
    @Body() body: clientts,
    @UploadedFile(new ParseFilePipeBuilder().build({ fileIsRequired: false })) file: Express.Multer.File,
  ) {
    console.log('Uploaded File:', file);
    console.log('Uploaded File:', body);
    const data = { name: body.name, pathimage: file.originalname };
    await this.appService.createclient(data);
    return;
  }

  @UseInterceptors(FileInterceptor('file', { storage: project }))
  @Post('fil')
  async uploadFile4(
    @Body() body: project1,
    @UploadedFile(new ParseFilePipeBuilder().build({ fileIsRequired: false })) file: Express.Multer.File,
  ) {
    console.log('Uploaded File:', file);
    console.log('Other Information:', body);
    if (file) {
      const data = { pathimage: file.originalname, name: body.name, description: body.description as string, id_catogary: body.dica };
      await this.appService.createproject(data);
      console.log(data);
      return {
        body,
        file: {
          originalname: file.originalname,
          filename: file.filename,
        },
      };
    } else {
      return {
        body,
        file: null,
      };
    }
  }

  @Delete('delete/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    const all = this.appService.removeUser(id);
  }

  @Get("1")
  @Render('index')
  p() {}

  @Get("2")
  @Render('about')
  p2() {}

  @Get("3")
  @Render('service')
  async getImages() {
    const imageUrls = await this.appService.fetchall();
    return { imageUrls };
  }

  @Get("4")
  @Render('admin')
  async p4() {
    const imageUrls = await this.appService.fetchall();
    return { imageUrls };
  }

  @Get("5")
  @Render('zbon')
  async f1() {
    const imageUrls = await this.appService.fetchallclient();
    console.log(imageUrls);
    return { imageUrls };
  }

  @Get("prind")
  @Render('prind')
  async ps() {
    const x = await this.appService.fetchallprind();
    return { x };
  }

  @UseGuards(JwtAuthGuard)
  @Get('8')
  @Render('project')
  async x() {
    const x = await this.appService.fetchallproject();
    return { x };
  }
  @UseGuards(JwtAuthGuard)
  @Get("6")
  @Render('adminprind')
  f() {}
  @UseGuards(JwtAuthGuard)
  @Get("13")
  @Render('upladproject')
  f2() {}

  @Get("chice")
  @UseGuards(JwtAuthGuard)
  @Render('mar')
  s() {}

  @Get("10")
  @Render('upladclient')
  s2() {}

  @Get("12")
  @Render('testimonial')
  s3() {}
}


