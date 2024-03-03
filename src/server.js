const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
mongoose.connect(
  "mongodb+srv://kunj:Kunj12@cluster0.rnakhui.mongodb.net/?retryWrites=true&w=majority"
);

const Userrouter = require("./routes/user_router");
app.use("/api/user", Userrouter);

const CategoryRoutes = require("./routes/categories_routes");
app.use("/api/category", CategoryRoutes);

const ProductRoutes = require("./routes/product_rotes");
app.use("/api/product", ProductRoutes);

const CartRoutes = require("./routes/cart_routes");
app.use("/api/cart", CartRoutes);

const OrderRoutes = require("./routes/order_routes");
app.use("/api/order", OrderRoutes);

app.listen(5000, () => console.log("server started"));

//user->model,roots & controller
