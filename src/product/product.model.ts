import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

class ProductCharacteristics {
    @prop()
    name: string;

    @prop()
    value: string;
}

export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
    @prop()
    image: string;

    @prop()
    title: string;

    @prop()
    price: number;

    @prop()
    oldPrice: number;

    @prop()
    credit: string;

    @prop()
    calculatedRated: string;

    @prop()
    description: string;

    @prop()
    advantages: string;

    @prop()
    disAdvantages: string;

    @prop({ type: () => [String]})
    categories: string[];

    @prop({ type: () => [String]})
    tags: string[];

    @prop({ type: () => [ProductCharacteristics], _id: false})
    characteristics: ProductCharacteristics[]
}

