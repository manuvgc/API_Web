import Mouse from "../typeorm/entities/Mouse";
import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";

interface IRequest{ // name, brand, MCU, switch, sensor
    name: string;
    brand: string;
    MCU: string;
    clicks: string;
    sensor: number;
}

export default class CreateMouseService{
    public async execute({name, brand, MCU, clicks, sensor}: IRequest):Promise<Mouse>{
        const mouseRepository = AppDataSource.getRepository(Mouse);

        const productExists = await mouseRepository.findOne({
            where : { name }
        });
        if(productExists){
            throw new AppError("Já existe um mouse com esse nome")
        }

        const product = mouseRepository.create({name, brand, MCU, clicks, sensor});
        await mouseRepository.save(product);
        return product;
    }
}