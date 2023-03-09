import argon2, { hash } from "argon2";
import Siswa from "../models/Siswa.js";

// Ambil Data Semua Siswa
export const getSiswa = async (req, res) => {
  try {
    const response = await Siswa.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

// Ambil Data Siswa Berdasarkan ID
export const getSiswaById = async (req, res) => {
  try {
    const response = await Siswa.findOne({
      where: {
        id_siswa: req.params.id_siswa,
      },
    });
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

// Menambahkan Data Siswa
export const createSiswa = async (req, res) => {
  const nisnSiswa = await Siswa.findOne({
    where: {
      nisn: req.body.nisn,
    },
  });
  const namaSiswa = await Siswa.findOne({
    where: {
      nama: req.body.nama,
    },
  });

  const { id_kelas, nama, nisn, password, no_telp, alamat } = req.body;

  if (nisnSiswa) return res.status(400).json({ msg: "NISN Sudah Terdaftar" });
  if (namaSiswa)
    return res.status(400).json({ msg: "Nama Siswa Sudah Terdaftar" });

  const hashPassword = await argon2.hash(password);

  try {
    await Siswa.create({
      id_kelas: id_kelas,
      nama: nama,
      nisn: nisn,
      password: hashPassword,
      alamat: alamat,
      no_telp: no_telp,
    });
    return res.status(200).json({ msg: "Berhasil Menambahkan Siswa" });
  } catch (errors) {
    console.log(errors);
  }
};

// Mengupdate Data Siswa
export const updateSiswa = async (req, res) => {
  const siswa = await Siswa.findOne({
    where: {
      id_siswa: req.params.id_siswa,
    },
  });

  if (!siswa) return res.status(404).json({ msg: "Siswa Tidak Ditemukan" });

  const { id_kelas, nama, nisn, password, no_telp, alamat } = req.body;

  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = siswa.password;
  } else {
    hashPassword = await argon2.hash(password);
  }

  try {
    await Siswa.update(
      {
        id_kelas: id_kelas,
        nama: nama,
        nisn: nisn,
        password: hashPassword,
        alamat: alamat,
        no_telp: no_telp,
      },
      {
        where: {
          id_siswa: req.params.id_siswa,
        },
      }
    );
    return res.status(200).json({ msg: "Berhasil Mengupdate Siswa" });
  } catch (errors) {
    console.log(errors);
  }
};

// Menghapus Data Siswa
export const deleteSiswa = async (req, res) => {
  const siswa = await Siswa.findOne({
    where: {
      id_siswa: req.params.id_siswa,
    },
  });

  if (!siswa) return res.status(404).json({ msg: "Siswa Tidak Ditemukan" });
  try {
    await Siswa.destroy({
      where: {
        id_siswa: req.params.id_siswa,
      },
    });
    return res.status(200).json({ msg: "Siswa Berhasil Dihapus" });
  } catch (error) {
    console.log(error);
  }
};
