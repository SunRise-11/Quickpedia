"use client";

import { UserData } from "@/utils/types";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { useState } from "react";
import { Article } from "../page";
import { ArticleTitle } from "../components";

const Page = () => {
  const { user, error, isLoading } = useUser();
  const [userBookmarks, setUserBookmarks] = useState<Article[]>();

  const fetchUserBookmarks = async () => {
    const response = await axios.get(
      `https://quickipedia.azurewebsites.net/api/users/${user?.email}`
    );
    const userData: UserData = response.data;
    const bookmarks = userData.bookmarks;
    setUserBookmarks(bookmarks);
  };

  const handleBookmarking = async (email: string, articleToToggle: Article) => {
    if (!userBookmarks) {
      return;
    }
    if (
      userBookmarks?.filter((item) => item.id == articleToToggle.id).length > 0
    ) {
      {
        await axios.delete(
          `https://quickipedia.azurewebsites.net/api/users/${email}`,
          { data: { id: articleToToggle.id } }
        );
      }
      setUserBookmarks(
        userBookmarks?.filter((item) => item.id != articleToToggle.id)
      );
      return;
    }
    await axios.post(
      `https://quickipedia.azurewebsites.net/api/users/${email}`,
      { data: { id: articleToToggle.id } }
    );
    const articles: Article[] = [...userBookmarks, articleToToggle];
    setUserBookmarks(articles);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!isLoading && !userBookmarks) fetchUserBookmarks();

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
              <ol className="w-[100%] max-w-md">
                {userBookmarks &&
                  userBookmarks.map((article, index) => (
                    <li key={index}>
                      <ArticleTitle
                        {...article}
                        key={article.id}
                        bookmarks={userBookmarks || []}
                        toggleBookmark={() =>
                          handleBookmarking(user?.email || "", article)
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
