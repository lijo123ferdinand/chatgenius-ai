"use client";

import { useSession } from "next-auth/react";

const Settings = () => {
  const { data: session } = useSession();

  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-lg font-bold mb-3">Settings</h2>
      {session ? (
        <div>
          <p><strong>Name:</strong> {session.user?.name}</p>
          <p><strong>Email:</strong> {session.user?.email}</p>
        </div>
      ) : (
        <p>Please log in to view settings.</p>
      )}
    </div>
  );
};

export default Settings;
