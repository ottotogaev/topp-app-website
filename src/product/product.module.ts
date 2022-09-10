import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProductController } from './product.controller';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProductModule,
        schemaOptions: {
          collection: 'product'
        }
      }
    ])
  ],
  controllers: [ProductController]
})
export class ProductModule {}
