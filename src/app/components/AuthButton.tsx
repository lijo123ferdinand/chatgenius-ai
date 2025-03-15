"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();

  return session ? (
    <button onClick={() => signOut()} className="bg-red-500 text-white p-2 rounded">Logout</button>
  ) : (
    <button onClick={() => signIn("google")} className="bg-blue-500 text-white p-2 rounded">Login</button>
  );
};

export default AuthButton;
