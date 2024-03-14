// OrderDetails.js
import React from "react";

function OrderDetails({ order }) {
  return (
    <div>
      <h2>Order Details</h2>
      <p>
        <strong>Order ID:</strong> {order.id}
      </p>
      <p>
        <strong>Customer:</strong> {order.customer}
      </p>
      <p>
        <strong>Date:</strong> {order.date}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
      {/* Add more order details as needed */}
    </div>
  );
}

export default OrderDetails;
