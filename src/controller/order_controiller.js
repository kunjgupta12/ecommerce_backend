const OrderModel = require("../models/order_model");

const OrderController = {
  createOrder: async function (req, res) {
   try {
    const {user,items}=req.body;
    const newOrder=new OrderModel({
        user:user,
        items:items
    })
await newOrder.save();
return res.json({success:true,data:newOrder,messgae:"order created!"})
   } catch (ex) {
    return res.json({success:false,message:ex});
   }
},
fetchOrderForUser:async function(req,res){
    try {
        const userId=req.params.userId;
        const foundOrder=await OrderModel.find({
            'user._id':userId
        });
        return res.json({ success: true, data:foundOrder});

    } catch (ex) {
        return res.json({ success: false, message: ex });

    }
},
updaetOrderStatus:async function(req,res){
    try {
        const {orderId,status}=req.params.userId;
        const updateOrder=await OrderModel.findOneAndUpdate(
            {_id:orderId},
{status:status},
{new:true}
        );
        return res.json({ success: true, data:updateOrder});

    } catch (ex) {
        return res.json({ success: false, message: ex });

    }
},


};
module.exports = OrderController;
