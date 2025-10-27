class OrderModel {
    constructor(order) {
        this.placed_by = order.placed_by;
        this.order_id = order.order_id;
        this.status = order.status;
        this.order_timestamp = order.order_timestamp;
        this.price = order.price;
        this.quantity = order.quantity;
    }
}

module.exports = OrderModel;