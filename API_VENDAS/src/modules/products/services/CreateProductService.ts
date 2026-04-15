import Product from "../typeorm/entities/Product";
import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";

interface IRequest{
    name: string;
    price: number;
    quantity:number;
}

export default class CreateProductService{
    public async execute({name, price, quantity}: IRequest):Promise<Product>{
        const productRepository = AppDataSource.getRepository(Product);

        const productExists = await productRepository.findOne({
            where : { name }
        });
        if(productExists){
            throw new AppError("There is already a product with this name")
        }

        const product = productRepository.create({name, price, quantity});
        await productRepository.save(product);
        return product;
    }
}