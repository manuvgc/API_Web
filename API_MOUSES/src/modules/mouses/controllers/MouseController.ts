import { NextFunction, Request, response, Response } from "express";
import ListMouseService from "../services/listMouseService";
import ShowMouseService from "../services/ShowMouseService";
import CreateMouseService from "../services/CreateMouseService";
import UpdateMouseService from "../services/UpdateMouseService";
import DeleteMouseService from "../services/DeleteMouseService";

export default class MouseController{
    public async index(request: Request, response: Response, next: NextFunction) : Promise<Response | void> {
        try{
            const listMouses = new ListMouseService();
            const mouses = await listMouses.execute();
            return response.status(200).json(mouses);
        }catch(err){
            next(err);
        }
    }
    
    public async show(request: Request, response: Response, next: NextFunction) : Promise<Response | void> {
        try{
            const id = request.params.id as string;
            const showMouse = new ShowMouseService();
            const mouse = await showMouse.execute({id});
            return response.status(200).json(mouse);
        }catch(err){
            next(err);
        }
    }

    public async create(request: Request, response: Response, next: NextFunction) : Promise<Response | void> {
        try{
            const {name, brand, MCU, clicks, sensor} = request.body;
            const createMouse = new CreateMouseService();
            const mouse = await createMouse.execute({name, brand, MCU, clicks, sensor});
            return response.status(201).json(mouse);
        }catch(err){
            next(err);
        }
    }

    public async update(request: Request, response: Response, next: NextFunction) : Promise<Response | void> {
        try{
            const id = request.params.id as string;
            const {name, brand, MCU, clicks, sensor} = request.body;
            const updateMouse = new UpdateMouseService();
            const mouse = await updateMouse.execute({id, name, brand, MCU, clicks, sensor});
            return response.status(200).json(mouse);
        }catch(err){
            next(err);
        }
    }

    public async delete(request: Request, response: Response, next: NextFunction) : Promise<Response | void> {
        try{
            const id = request.params.id as string;
            const deleteMouse = new DeleteMouseService();
            await deleteMouse.execute({id});
            return response.status(204).send();
        }catch(err){
            next(err);
        }
    }
}