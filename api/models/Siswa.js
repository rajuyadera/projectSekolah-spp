import { Sequelize } from "sequelize"
import db from "../config/Database.js"
import Kelas from "./Kelas.js"

const {DataTypes} = Sequelize

const Siswa = db.define("siswa", {
    id_siswa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_kelas:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nama: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nisn: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    thn_ajaran: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alamat: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    no_telp: {
        type: DataTypes.STRING(13),
        allowNull: false
    },

}, {
    freezeTableName: true
})

Siswa.removeAttribute("id")

Siswa.hasOne(Kelas)
Siswa.belongsTo(Kelas, {
    foreignKey: "id_kelas"
})

export default Siswa