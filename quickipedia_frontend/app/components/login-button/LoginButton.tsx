import React from "react";

export const LoginButton = () => {
  return (
    <>
      <button className="border-2 border-primaryB px-3 py-1 rounded-md hover:border-secondary hover:bg-secondary hover:text-primary">
        <a href="/api/auth/login">Login</a>
      </button>
    </>
  );
};
