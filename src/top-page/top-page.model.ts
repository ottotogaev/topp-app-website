import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export class HhData {
    @prop()
    count: number;

    @prop()
    juniorSalary: number;

    @prop()
    middleSalary: number;

    @prop()
    seniorSalary: number;
}

export class AdvanteData {
    @prop()
    title: string;

    @prop()
    description: string;
}

export interface TopPageModel extends Base { }
export class TopPageModel extends TimeStamps {

    @prop({ enum: TopLevelCategory })
    firstLevelCategory: TopLevelCategory

    @prop()
    secondCategory: string; // 2-chi turadigan categoriya

    @prop({ unique: true })
    alias: string;

    @prop()
    title: string; // sarlavhasi

    @prop()
    category: string; // Kategoriyasi

    @prop({ type: () => HhData })
    hh?: HhData; // Maosh lari

    @prop({ type: () => [AdvanteData] })
    advantages: AdvanteData[]; // Avzalliklari

    @prop()
    seoText: string; // Link quyiladigan text

    @prop()
    tagsTitle: string; // taglar uchun quyiladigan text

    @prop({ type: () => [String] })
    tags: string[]; // taglar
}
