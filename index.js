import express from 'express'
import  customerRouter  from './modules/customers/customers.routes.js'
import productRouter from './modules/products/products.routes.js'
import orderRouter from './modules/orders/orders.routes.js'
const app = express()
const port = 4000
app.use(express.json())
app.use("/customers", customerRouter)
app.use("/products", productRouter)
app.use("/orders", orderRouter)
app.get("/", (req, res) => res.status(200).json({ message: "hello from home" }))
app.use("*",(req,res)=>res.status(404).json({message:"4 0 4 Route Not Found"}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))