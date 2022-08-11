import { Controller, Post, Get, Patch, HttpCode, Delete, Param, Body, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FindTopPageDto } from './dto/find-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
    constructor(private readonly configService: ConfigService) {

    }

    @Post('save')
    async create(@Body() dto: Omit<TopPageModel, '_id'>) {
        
    }
  
    @Get('get/:alias')
    async get(@Param('alias') id: string) {
        const env = this.configService.get('TEST');
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
  
    }
  
    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: TopPageModel) {
  
    }
  
    @HttpCode(200)
    @Post('find')
    async find(@Body() dto: FindTopPageDto): Promise<any> {
      
    }


}
