"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

const Page = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    return <div>User not authenticated.</div>;
  }

  return (
    <main className="text-slate-200 flex min-h-screen mt-10 flex-col items-center justify-between p-24">
    {user && (
      <div>
        <img
          src={user.picture ?? ""}
          alt={user.name ?? ""}
          width={44}
          height={44}
        />{" "}
        {/* if the left thing is null use the right thing */}
        <h1>{user.name}</h1>
      </div>
    )}
    </main>
  );
};

export default Page;
