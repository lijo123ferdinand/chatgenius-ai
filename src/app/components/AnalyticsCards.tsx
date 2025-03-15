"use client";

import { useEffect, useState } from "react";

const AnalyticsCards = () => {
  const [data, setData] = useState({ revenue: "", users: 0, orders: 0 });

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="p-6 bg-green-500 text-white rounded-lg">
        <h3 className="text-lg font-bold">Revenue</h3>
        <p className="text-2xl">{data.revenue}</p>
      </div>
      <div className="p-6 bg-blue-500 text-white rounded-lg">
        <h3 className="text-lg font-bold">Users</h3>
        <p className="text-2xl">{data.users}</p>
      </div>
      <div className="p-6 bg-purple-500 text-white rounded-lg">
        <h3 className="text-lg font-bold">Orders</h3>
        <p className="text-2xl">{data.orders}</p>
      </div>
    </div>
  );
};

export default AnalyticsCards;
