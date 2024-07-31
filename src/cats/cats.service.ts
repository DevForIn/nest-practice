import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cat } from "src/cats/schemas/cat.schema";
import { CreateCatDto } from "./dto/CreateCatDto";

@Injectable()
export class CatsService{
    constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createCat = new this.catModel(createCatDto);
        return createCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }

}