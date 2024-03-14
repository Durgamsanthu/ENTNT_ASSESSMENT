// OrderForm.js
import React, { useState } from "react";

function OrderForm({ onSubmit, initialOrder }) {
  const [order, setOrder] = useState(
    initialOrder || { customer: "", date: "", status: "" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(order);
    setOrder({ customer: "", date: "", status: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer:
        <input
          type="text"
          name="customer"
          value={order.customer}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={order.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Status:
        <select
          name="status"
          value={order.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          {/* Add more status options as needed */}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;
