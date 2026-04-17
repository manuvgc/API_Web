import { Router } from "express";
import MouseController from "../controllers/MouseController";
import { celebrate, Joi, Segments } from "celebrate";
import { number } from "joi";


const mousesRouter = Router();
const mouseController = new MouseController();

mousesRouter.get('/', async(req, res, next) => {
    try{
        await mouseController.index(req, res, next);
    }catch(err){
        next(err);
    }
});

mousesRouter.get('/:id', celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()},
}),
    async(req, res, next) => {
    try{
        await mouseController.show(req, res, next);
    }catch(err){
        next(err);
    }
});

mousesRouter.post('/', celebrate({ // name, brand, MCU, clicks, sensor
    [Segments.BODY]:{
        name: Joi.string().required(),
        brand: Joi.string().required(),
        MCU: Joi.string().required(),
        clicks: Joi.string().required(),
        sensor: Joi.number().required(),
    }
}),
    async(req, res, next) => {
    try{
        await mouseController.create(req, res, next);
    }catch(err){
        next(err);
    }
});

mousesRouter.put('/:id', celebrate({ // name, brand, MCU, clicks, sensor
    [Segments.PARAMS] : {id: Joi.string().uuid().required()},
    [Segments.BODY]:{
        name: Joi.string().required(),
        brand: Joi.string().required(),
        MCU: Joi.string().required(),
        clicks: Joi.string().required(),
        sensor: Joi.number().required(),
    }
}), async(req, res, next) => {
    try{
        await mouseController.update(req, res, next);
    }catch(err){
        next(err);
    }
})

mousesRouter.delete('/:id', celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()},
}),
    async(req, res, next) => {
    try{
        await mouseController.delete(req, res, next);
    }catch(err){
        next(err);
    }
})

export default mousesRouter;