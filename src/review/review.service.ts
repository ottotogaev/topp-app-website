import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { CreativeReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel(ReviewModel) private readonly reviewModel: ModelType<ReviewModel>
    ) { } 

    async create(dto: CreativeReviewDto): Promise<DocumentType<ReviewModel>> {
        return this.reviewModel.create(dto)
    }

    async delete(id: string): Promise<DocumentType<ReviewModel> | null> {
        return this.reviewModel.findByIdAndDelete(id).exec();
    }

    async findProductById(product_id: string): Promise<DocumentType<ReviewModel>[]> {
        return this.reviewModel.find(
            {
                product_id
                // product_id: Types.ObjectId(product_id)
            })
            .exec();
    };
    
    async deleteByProductId(product_id: string) {
        return this.reviewModel.deleteMany({ product_id }).exec();
    }

    
}
