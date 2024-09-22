import mysql from "mysql2";
export const dbConnection = () => {
const conn = mysql.createConnection({
host: "localhost",
database: "db",
user: "root",
password: "",
});
conn.connect((err) => {
if (err) return console.log("database Error");
console.log("database Connected successfully");
});
return conn;
};
