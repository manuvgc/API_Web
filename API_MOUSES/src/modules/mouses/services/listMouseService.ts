import { AppDataSource } from "@shared/typeorm/data-source";
import Mouse from "../typeorm/entities/Mouse";

export default class listMouseService{
    public async execute(): Promise<Mouse[]>{
        const mouseRepository = AppDataSource.getRepository(Mouse);
        return await mouseRepository.find()
    }
}