import { Sequelize } from "sequelize";

const db = new Sequelize("spp", "root", "" , {
    host: "localhost",
    dialect: "mysql"
})

export default db;