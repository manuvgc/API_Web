import mousesRouter from "@module/mouses/routes/mouses.routes";
import { Router } from "express"

const routes = Router();
routes.use('/mouses', mousesRouter);

routes.get('/', (request, response) => {
    response.json({message: 'API de informações sobre mouses!'});
    return;
})

export default routes;