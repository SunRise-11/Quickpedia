"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { Article } from "@/app/utils/types";
import { ArticleTitle } from "../components";
import { fetchUserBookmarks } from "../utils/userBookmarksUtils";
import { handleBookmarking } from "../utils/bookmarksUtils";

const Page = () => {
  const { user, error, isLoading } = useUser();
  const [userBookmarks, setUserBookmarks] = useState<Article[]>();

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) {
        console.error("User email is undefined");
        return;
      }

      try {
        const userData = await fetchUserBookmarks(user.email);
        setUserBookmarks(userData.bookmarks);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (!isLoading && !userBookmarks) {
      fetchData();
    }
  }, [user?.email, userBookmarks, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
              <ol className="w-[100%] max-w-md">
                {userBookmarks &&
                  userBookmarks.map((article, index) => (
                    <li key={index}>
                      <ArticleTitle
                        {...article}
                        key={article.id}
                        bookmarks={userBookmarks || []}
                        toggleBookmark={() =>
                          handleBookmarking(
                            user?.email || "",
                            article,
                            userBookmarks,
                            setUserBookmarks
                          )
                        }
                      />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Page;
