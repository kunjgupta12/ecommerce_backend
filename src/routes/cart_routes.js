const CartRoutes=require('express').Router();
const CartController=require('./../controller/cart_controller');
CartRoutes.post("/",CartController.addToCart);
CartRoutes.delete("/",CartController.removeFromCart);
CartRoutes.get("/:user",CartController.getCartForUser);

module.exports=CartRoutes;