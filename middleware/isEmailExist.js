import { dbConnection } from './../database/dbConnection.js';
const connection = dbConnection();

export const isEmailExist = (req, res, next) => {
    connection.query(`select email from customers where email=
'${req.body.email}'`, (err, data) => {
    if (err) return res.status(404).json({ message: "error Occured", error: err });
    if (data.length != 0) return res.status(409).json({ message: "Email Already Exists" });
    next()
        })
};