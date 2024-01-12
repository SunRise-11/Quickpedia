"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { Article } from "@/app/utils/types";
import { ArticleModal, ArticleTitle, ScrollButton } from "../components";
import { fetchUserBookmarks } from "../utils/userBookmarksUtils";
import { handleBookmarking } from "../utils/bookmarksUtils";
import { BackButton } from "../components/back-button/BackButton";

const Page = () => {
  const { user, error, isLoading } = useUser();
  const [userBookmarks, setUserBookmarks] = useState<Article[]>();

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  /*  const [selected, setSelected] = useState<boolean>(false); */
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    console.log("Modal open: " + isModalOpen);
  };

  const handleCloseModal = () => {
    if (selectedArticle != null) {
      setIsModalOpen(false);
    }
  };

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
    <main className="flex min-h-screen flex-col items-center justify-start py-10">
      <ScrollButton/>
      {user && (
        <>
          <div className=" w-[80%] flex flex-col justify-center text-primaryB mt-8 text-center rounded-3xl py-6">
          <BackButton />
            <h3 className=" text-3xl sm:text-4xl font-semibold leading-normal mt-10 mb-2 text-blueGray-700">
              {user.name}
            </h3>
            <div className="text-center rounded text-sm leading-normal mt-0 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-sm"></i>
              {user.email}
            </div>
          </div>
          <div className="border-t text-secondary text-center rounded-3xl bg-primaryB">
            <div className="flex flex-col justify-center min-h-full px-4 py-2 rounded">
              <h4 className="py-4 text-lg font-medium">All your booksmarks here!</h4>
              <ol className=" sm:max-w-md sm:grid-cols-none md:grid md:grid-cols-2 md:gap-x-4 lg:gap-x-6 md:max-w-none">
                {userBookmarks &&
                  userBookmarks.map((article, index) => (
                    <li key={index}>
                      <ArticleTitle
                        article={article}
                        key={article.id}
                        bookmarks={userBookmarks || []}
                        handleOpenModal={handleOpenModal}
                        handleCloseModal={handleCloseModal}
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
      {selectedArticle && <ArticleModal isVisible={isModalOpen} article={selectedArticle!} onClose={handleCloseModal} />}
    </main>
  );
};

export default Page;
