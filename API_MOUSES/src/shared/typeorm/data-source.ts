import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import Mouse from "@module/mouses/typeorm/entities/Mouse";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433, // 5433 se ja tem pg instalado
    username: "postgres",
    password: "senha",
    database: "postgres",
    synchronize: false,
    logging: true,
    entities: [Mouse],
    migrations: [path.join("src", "shared", "typeorm", "migrations", "*.ts")]
})