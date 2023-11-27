import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import React from "react";

export const LoginButton = () => {
  const { user,isLoading, } = useUser();

  const postUserInfo = async () => {
    if (!isLoading) {
      const response = await axios.post(
        'http://localhost:8080/api/users',
        { email:user?.email,
        username: user?.name },
      );

      console.log(response.data);
    }
  };

  return (
    <>
      <button onClick={postUserInfo}>
        <a href="/api/auth/login">Login</a>
      </button>
    </>
  );
};
