"use client";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700">Welcome, Lijo!</span>
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
