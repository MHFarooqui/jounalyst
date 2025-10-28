const { KiteConnect } = require("kiteconnect");
const OrderModel = require("../Models/OrderModel");
const env = require('dotenv');
env.config();

const order = {
    "status": "success",
    "data": [
        {
            "placed_by": "XXXXXX",
            "order_id": "100000000000000",
            "exchange_order_id": "200000000000000",
            "parent_order_id": null,
            "status": "CANCELLED",
            "status_message": null,
            "status_message_raw": null,
            "order_timestamp": "2021-05-31 09:18:57",
            "exchange_update_timestamp": "2021-05-31 09:18:58",
            "exchange_timestamp": "2021-05-31 09:15:38",
            "variety": "regular",
            "modified": false,
            "exchange": "CDS",
            "tradingsymbol": "USDINR21JUNFUT",
            "instrument_token": 412675,
            "order_type": "LIMIT",
            "transaction_type": "BUY",
            "validity": "DAY",
            "product": "NRML",
            "quantity": 1,
            "disclosed_quantity": 0,
            "price": 72,
            "trigger_price": 0,
            "average_price": 0,
            "filled_quantity": 0,
            "pending_quantity": 1,
            "cancelled_quantity": 1,
            "market_protection": 0,
            "meta": {},
            "tag": null,
            "guid": "XXXXX"
        }
    ]
};

const kc = new KiteConnect({ api_key: process.env.your_api_key });
kc.setAccessToken(process.env.user_access_token);

async function getOrders() {
    try {
        const orders = await kc.getOrders();
        return orders;
    } catch (err) {
        console.error("Error fetching orders:", err);
        return orderSample;
    }
}

module.exports = {
    GetOrders: async (req, res) => {
        try {
            const orders = await getOrders();
            if (orders.status !== "success") {
                return res.json([]);
            }
            res.json(orders);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to fetch orders" });
        }
    },

    NormalizeOrders: async (req, res) => {
        try {
            const orders = order;
            if (orders.status === "success") {
                const normalizedOrders = orders.data.map(order => new OrderModel(order));
                res.json(normalizedOrders);
            } else {
                res.json([]);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to normalize orders" });
        }
    }
};

/*using this as a referance for order object structure
source : https://kite.trade/docs/connect/v3/orders/#retrieving-orders

{
"status": "success",
"data": [
    {
      "placed_by": "XXXXXX",
      "order_id": "100000000000000",
      "exchange_order_id": "200000000000000",
      "parent_order_id": null,
      "status": "CANCELLED",
      "status_message": null,
      "status_message_raw": null,
      "order_timestamp": "2021-05-31 09:18:57",
      "exchange_update_timestamp": "2021-05-31 09:18:58",
      "exchange_timestamp": "2021-05-31 09:15:38",
      "variety": "regular",
      "modified": false,
      "exchange": "CDS",
      "tradingsymbol": "USDINR21JUNFUT",
      "instrument_token": 412675,
      "order_type": "LIMIT",
      "transaction_type": "BUY",
      "validity": "DAY",
      "product": "NRML",
      "quantity": 1,
      "disclosed_quantity": 0,
      "price": 72,
      "trigger_price": 0,
      "average_price": 0,
      "filled_quantity": 0,
      "pending_quantity": 1,
      "cancelled_quantity": 1,
      "market_protection": 0,
      "meta": {},
      "tag": null,
      "guid": "XXXXX"
}]
}*/