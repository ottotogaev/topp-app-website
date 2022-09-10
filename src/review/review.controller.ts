import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreativeReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {

  constructor(private readonly reviewService: ReviewService) {}

  @Post('create')
  async create(@Body() dto: CreativeReviewDto) {
    this.reviewService.create(dto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteDoc = await this.reviewService.delete(id)
    if(!deleteDoc) {
      throw new HttpException('Id not found ', HttpStatus.NOT_FOUND)
    }
  }

  @Get('byProduct/:product_id')
  async getByProduct(@Param('product_id') product_id: string) {
    return this.reviewService.findProductById(product_id)
  }


}
