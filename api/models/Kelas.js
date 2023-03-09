import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Kelas = db.define(
  "kelas",
  {
    id_kelas: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    kelas: {
      type: DataTypes.STRING(5),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    jurusan: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
  },
  {
    freezeTableName: true,
  }
);

Kelas.removeAttribute("id");
Kelas.removeAttribute("siswaIdSiswa")

export default Kelas;
