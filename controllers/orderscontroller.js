const { getOrdersCollection } = require("../models/orders");
const { getUserCollection } = require('../models/user');

async function createOrders(req, res) {
    try {
        const OrderCollection = await getOrdersCollection();
        const UserCollection = await getUserCollection();
        const { email } = req.params; // Email of the user creating the order
        const order = req.body; // Order details from the request body

        // Insert the order into the orders collection
        const result = await OrderCollection.insertOne(order);

        // If the order insertion is successful, update the user's pending orders
        if (result.acknowledged) {
            await UserCollection.updateOne(
                { email }, // Find the user by email
                { 
                    $push: { pendingOrders: order }, // Add the order to the pendingOrders array
                    $inc: { pendingOrdersCount: 1 }  // Increment the pendingOrdersCount field by 1
                } 
            );
        }

        res.send(result);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { createOrders };
