const OrderRoutes = require('express').Router();
const OrderController = require('./../controller/order_controiller');

OrderRoutes.get("/:userId", OrderController.fetchOrderForUser);
OrderRoutes.post("/", OrderController.createOrder);OrderRoutes.put("/updateStatus", OrderController.updaetOrderStatus);

module.exports = OrderRoutes;