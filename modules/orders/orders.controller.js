import { dbConnection } from "./../../database/dbConnection.js";
const connection = dbConnection();

const createOrder = (req, res) => {
    connection.query(`INSERT INTO orders set ?`, req.body, ((err, data) => {
        if (err)
            return res
                .status(404)
                .json({ message: "error occured at createOrder", error: err });
        return res.status(201).json({ message: "order added Successfully" });
    }));
};
const averageOrder = (req, res) => {
    connection.query(`SELECT products.productName , AVG(orderitems.quantity / orderitems.unitPricing) as average FROM products JOIN orderitems GROUP BY products.productName`, req.body, ((err,data) => {
        if (err) return res.status(404).json({ message: "error occured at average", error: err });
        return res.status(200).json({ message: " Success" ,data});
    }))
}
const noOrders = (req, res) => {
    connection.query(`SELECT customers.firstName AS name , customers.id as id FROM customers JOIN orders WHERE customers.id != orders.customerId`, ((err, data) => {
        if (err) return res.status(404).json({ message: "error occured at noOrders", error: err });
        return res.status(200).json({ message: " Success" ,data});
    }))
}
const mostItems = (req, res) => {
    connection.query(`SELECT customers.firstName as name , MAX( orderitems.quantity) as numOfOrders FROM customers JOIN orderitems on customers.id =
(SELECT orders.customerId as cId FROM orders JOIN orderitems on orders.orderItemsId=orderitems.id)`, ((err, data) => {
    if (err) return res.status(404).json({ message: "error occured at mostItems", error: err });
    return res.status(200).json({ message: " Success" ,data});
        
}))
}
const topCustomers = (req, res) => {
    connection.query(`SELECT customers.firstName as name , sum( orderitems.quantity * orderitems.unitPricing) as totalPrice FROM customers JOIN orderitems on customers.id =
    (SELECT orders.customerId as cId FROM orders JOIN orderitems on orders.orderItemsId=orderitems.id) LIMIT 10;`, ((err, data) => {
    if (err) return res.status(404).json({ message: "error occured at mostItems", error: err });
    return res.status(200).json({ message: " Success" ,data});
}))
}
const above5Orders = (req, res) => {
    connection.query(`SELECT customers.firstName as name , sum( orderitems.quantity ) as totalOrdersNum FROM customers JOIN orderitems on customers.id =
    (SELECT orders.customerId as cId FROM orders JOIN orderitems on orders.orderItemsId=orderitems.id) AND orderitems.quantity >= 5`, ((err, data) => {
    if (err) return res.status(404).json({ message: "error occured at mostItems", error: err });
    return res.status(200).json({ message: " Success" ,data});
}))
}
const percentage = (req, res) => {
    connection.query(`SELECT customers.firstName as name , SUM( orderitems.quantity / orders.totalAmount ) as customerOrdersNum FROM customers JOIN orders JOIN orderitems on customers.id =(SELECT orders.customerId as cId FROM orders JOIN orderitems on orders.orderItemsId=orderitems.id) AND orderitems.quantity >1`, ((err, data) => {
    if (err) return res.status(404).json({ message: "error occured at mostItems", error: err });
    return res.status(200).json({ message: " Success" ,data});
}))
}
const earliest = (req, res) => {
    connection.query(`SELECT customers.firstName as name , orders.orderDate as customerOrderDate FROM customers JOIN orders on customers.id = orders.customerId GROUP BY orders.orderDate ASC LIMIT 1`, ((err, data) => {
    if (err) return res.status(404).json({ message: "error occured at mostItems", error: err });
    return res.status(200).json({ message: " Success" ,data});
}))
}
export {
    createOrder,
    averageOrder,
    noOrders,
    mostItems,
    topCustomers,
    above5Orders,
    percentage,
    earliest
};
