import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {

  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {
    

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {


  }

  @Get('byProduct/:product_id')
  async getByProduct(@Param('product_id') product_id: string) {
    
  }


}
