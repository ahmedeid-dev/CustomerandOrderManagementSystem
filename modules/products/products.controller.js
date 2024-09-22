import { dbConnection } from "../../database/dbConnection.js";

const connection = dbConnection();
const addProduct = (req, res) => {
    connection.query("insert into products set ?", req.body, ((err, data) => {
        if (err) return res.status(404).json({message:"error occured at add products",error:err})
        return res.status(200).json({ message: "product added successfully" });
    }));
}
const totalRevenue = (req, res) => {
    connection.query(`SELECT "category", SUM("unitPricing") AS "totalRevenues" FROM products GROUP BY "productName";`, ((err, data) => {
        if (err) return res.status(404).json({message:"error occured at totalRevenue products",error:err})
        return res.status(200).json({message:"success",data})
    }))
}
const totalSold = (req, res) => {
    connection.query(`SELECT products.productName AS "name" , orderItems.quantity FROM products JOIN orderItems ON products.id= orderItems.productId;`, ((err, data) => {
        if (err) return res.status(404).json({message:"error occured at totalSold products",error:err})
        return res.status(200).json({message:"success",data})
    }))
}
export {
    addProduct,
    totalRevenue,
    totalSold
}