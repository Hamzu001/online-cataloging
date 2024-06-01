import mysql from "mysql";
import { dbName } from "../constants.js";

const connectToMySql = mysql.createConnection({
  host: process.env.mySQL_HOST,
  user: process.env.mySQL_USER,
  password: process.env.mySQL_PASSWORD,
  database: dbName,
});

connectToMySql.connect((err) => {
  if (err) return console.log(err);
  console.log("connected to mySql database");
});

export default connectToMySql;
