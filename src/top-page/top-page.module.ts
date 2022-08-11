import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { TopPageController } from './top-page.controller';
import { TopPageModel } from './top-page.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TopPageModel,
        schemaOptions: {
          collection: 'top-page'
        }
      }
    ])
  ],
  providers: [ConfigService],
  controllers: [TopPageController]
})
export class TopPageModule { }
