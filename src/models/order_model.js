const { Schema, model } = require("mongoose");
const orderItemSchema=new Schema({
    product:{type:Map,required:true},
    quantity:{type:Number,default:1}
})
const orderSchema = new Schema({
  user: { type:Map,required:true },
  items:{type:[orderItemSchema],default:[]},
  status:{type:String,default:'order-placed'},
  updateOn: { type: Date },
  createdOn: { type: Date },
});

orderSchema.pre("save", function (next) {
  this.updatedOn = new Date();
  this.createdOn = new Date();
  next();
});
orderSchema.pre(["update", "findOneAndUpdate", "updateOne"], function (next) {
  const update = this.getUpdate();
  delete update._id;
  this.updatedOn = new Date();
  next();
});
const CartModel = model("Order", orderSchema);
module.exports = CartModel;
