"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

const Notifications = () => {
  const [show, setShow] = useState(false);
  const notifications = ["New Order Received", "Payment Processed", "User Signed Up"];

  return (
    <div className="relative">
      <button className="p-2" onClick={() => setShow(!show)}>
        <Bell className="w-5 h-5" />
      </button>
      {show && (
        <div className="absolute right-0 bg-white dark:bg-gray-700 p-3 shadow-lg rounded-lg w-60">
          {notifications.length ? (
            notifications.map((note, i) => <p key={i} className="p-2 border-b">{note}</p>)
          ) : (
            <p className="p-2">No Notifications</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
