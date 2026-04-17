import Mouse from "../typeorm/entities/Mouse";
import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";

interface IRequest{ // name, brand, MCU, clicks, sensor
    id: string;
    name: string;
    brand: string;
    MCU: string;
    clicks: string;
    sensor: number;
}

export default class UpdateMouseService{
    public async execute({id, name, brand, MCU, clicks, sensor}: IRequest):Promise<Mouse>{
        const mouseRepository = AppDataSource.getRepository(Mouse);

        const mouse = await mouseRepository.findOneBy({id});
        if(!mouse){
            throw new AppError("Mouse não encontrado.");
        }

        const productExists = await mouseRepository.findOne({
            where : { name }
        });
        if(productExists && productExists.id !== mouse.id){
            throw new AppError("Já existe um mouse com esse nome")
        }

        mouse.name = name;
        mouse.brand = brand;
        mouse.MCU = MCU;
        mouse.clicks = clicks;
        mouse.sensor = sensor;
        await mouseRepository.save(mouse);
        return mouse;
    }
}