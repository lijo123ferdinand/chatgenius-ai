"use client";

import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold">ChatGenius AI</h2>
      <nav className="mt-10">
        <ul className="space-y-4">
          <li><Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
          <li><Link href="/dashboard/analytics" className="hover:text-gray-300">Analytics</Link></li>
          <li><Link href="/dashboard/settings" className="hover:text-gray-300">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
