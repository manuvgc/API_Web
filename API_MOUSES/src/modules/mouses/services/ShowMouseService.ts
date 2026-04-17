import { AppDataSource } from "@shared/typeorm/data-source";
import Mouse from "../typeorm/entities/Mouse";
import AppError from "@shared/errors/AppError";

interface IRequest{
    id: string;
}

export default class ShowMouseService{
    public async execute({ id }: IRequest): Promise<Mouse>{
        const mouseRepository = AppDataSource.getRepository(Mouse);

        const mouse = await mouseRepository.findOneBy({id});
        if(!mouse){
            throw new AppError("Mouse não econtrado");
        }

        return mouse;
    }
}