import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Cat extends Document {
    @Prop({ required : true})
    name: string;

    @Prop()
    age: number;

    @Prop()
    bread: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);