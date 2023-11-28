import React from "react";

export const LoginButton = () => {
  return (
    <>
      <button className="border border-primaryB px-3 py-1 rounded-md hover:border-primaryB hover:bg-primaryB hover:text-primary">
        <a href="/api/auth/login">Login</a>
      </button>
    </>
  );
};
