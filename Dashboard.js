// Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <Link to="/products">Products Management</Link>
      </div>
      <div>
        <Link to="/orders">Orders Management</Link>
      </div>
      <div>
        <Link to="/calendar">Orders Calendar View</Link>
      </div>
    </div>
  );
}

export default Dashboard;
