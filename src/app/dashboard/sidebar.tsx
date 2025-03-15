import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-5">⚡ Admin Panel</h2>
      <ul className="space-y-3">
        <li>
          <Link href="/dashboard" className="block p-3 rounded-lg bg-gray-700 hover:bg-gray-600">
            📊 Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard/analytics" className="block p-3 rounded-lg hover:bg-gray-700">
            📈 Analytics
          </Link>
        </li>
        <li>
          <Link href="/dashboard/users" className="block p-3 rounded-lg hover:bg-gray-700">
            👥 Users
          </Link>
        </li>
      </ul>
    </div>
  );
}
