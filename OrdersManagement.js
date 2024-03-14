// OrdersManagement.js
import React, { useState } from "react";
import OrderForm from "./OrderForm";
import OrderDetails from "./OrderDetails";

function OrdersManagement() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div>
      <h1>Orders Management</h1>
      <OrderForm onSubmit={handleAddOrder} />
      <div>
        <h2>Orders List</h2>
        <ul>
          {orders.map((order) => (
            <li key={order.id} onClick={() => handleOrderClick(order)}>
              {order.customer}
            </li>
          ))}
        </ul>
      </div>
      {selectedOrder && <OrderDetails order={selectedOrder} />}
    </div>
  );
}

export default OrdersManagement;
