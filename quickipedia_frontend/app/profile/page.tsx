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
    <main className="text-rose-900 flex min-h-screen mt-10 flex-col items-center p-24">
      {user && (
        <>
          <div className="text-center rounded  bg-slate-50">
            <h3 className="text-3xl sm:text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
              {user.name}
            </h3>
            <div className="text-center px-4 rounded text-sm leading-normal mt-0text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg"></i>
             {user.email}
            </div>
          </div>
          <div className="border-t border-blueGray-200 text-center  bg-slate-50">
            <div className="flex flex-wrap justify-center px-4 py-2 w-96 rounded">
              <h4>All your booksmarks here!</h4>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Page;
