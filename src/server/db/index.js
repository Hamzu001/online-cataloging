import mysql from "mysql";

const connectionToMySql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user",
});

connectionToMySql.connect((err) => {
  if (err) return console.log(err);
  console.log("connected to mySql database");
});

connectionToMySql.query("SELECT * FROM userdetails", (err, result) => {
  if (err) return console.log(err);
  console.log(
    result.map((i) => {
      return i;
    })
  );
});

export default connectionToMySql;
