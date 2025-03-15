import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ChatGenius AI</h1>
      <ul className="flex gap-5">
        <li className="hover:underline cursor-pointer">
          <Link href="/">🏠 Home</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link href="/dashboard">📊 Dashboard</Link>
        </li>
        <li className="hover:underline cursor-pointer">
          <Link href="/profile">👤 Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
