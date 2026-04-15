import Product from "@module/products/typeorm/entities/Product";
import path from "node:path";
import { DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433, // 5433 se ja tem pg instalado
    username: "postgres",
    password: "DOCKER",
    database: "apivendastb",
    synchronize: false,
    logging: true,
    entities: [Product],
    migrations: [path.join("src", "shared", "typeorm", "migrations", "*.ts")]
})