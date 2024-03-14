// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProductsManagement from "./ProductsManagement";
import OrdersManagement from "./OrdersManagement";
import OrdersCalendar from "./OrdersCalendar";
import "./app.css";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/products" component={ProductsManagement} />
          <Route path="/orders" component={OrdersManagement} />
          <Route path="/calendar" component={OrdersCalendar} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
