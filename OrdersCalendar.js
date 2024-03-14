// OrdersCalendar.js
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function OrdersCalendar({ orders }) {
  const events = orders.map((order) => ({
    title: `Order ${order.id}`,
    start: new Date(order.date),
    end: new Date(order.date),
  }));

  return (
    <div style={{ height: "500px" }}>
      <h2>Orders Calendar View</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: "20px" }}
      />
    </div>
  );
}

export default OrdersCalendar;
