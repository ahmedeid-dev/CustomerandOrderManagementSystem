import { dbConnection } from "../../database/dbConnection.js";
const connection = dbConnection();

const signUp = (req, res) => {
connection.query(`insert into customers set ?`, req.body);
res.status(201).json({ message: "signUp successfully" });
};
const signIn = (req, res) => {
const query = connection.query(
`select id,email from customers where email=
'${req.body.email}'`,
((err, data) => {
    if (err)
    return res.status(404).json({ message: "error Occured", error: err });
    if (data.length != 0)
    return res
        .status(200)
        .json({ message: "Login .... Token", customerId: data[0].id });
    res.status(401).json({ message: "Email Not Found " });
}
));
};
export { signUp, signIn };
