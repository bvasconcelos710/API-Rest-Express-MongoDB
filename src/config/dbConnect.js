import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bvasconcelos710:bbp010217@alura.wfbbmg9.mongodb.net/Alura");

let db = mongoose.connection;

export default db;