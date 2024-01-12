"use client";
import { useEffect, useState } from "react";
import { ArticleModal, ArticleTitle, NavFooter, ScrollButton, TopicArticle } from "./components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Article } from "@/app/utils/types";
import { Loading } from "./components/loading/Loading";
import { handleBookmarking } from "./utils/bookmarksUtils";
import { fetchUserBookmarks } from "./utils/userBookmarksUtils";
import { fetchTrending } from "./utils/articlesUtils";
import { postUserInfo } from "./utils/userUtils";
import { initVoice } from "./utils/utilities";


export default function Home() {
  const [trendingArticles, setTrendingArticles] = useState<Article[]>();
  const [userBookmarks, setUserBookmarks] = useState<Article[]>();
  const { user, isLoading } = useUser();
  
  //trying to get modal to work
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  /*  const [selected, setSelected] = useState<boolean>(false); */
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    if (selectedArticle != null) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) {
        localStorage.clear();
        return;
      }
      try {
        localStorage.setItem("user_id", user.email!);
        await postUserInfo(user.email!, user.name!);
        const userData = await fetchUserBookmarks(user.email);
        setUserBookmarks(userData.bookmarks);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchTrendingArticles = async () => {
      try {
        const data = await fetchTrending();
        setTrendingArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    if (!isLoading && !userBookmarks) {
      fetchData();
      initVoice();
    }

    fetchTrendingArticles();
  }, [user?.email, userBookmarks, isLoading, user?.name]);

  if (isLoading || !trendingArticles) {
    return <Loading />;
  }
  return (
    <main className=" text-primaryB flex min-h-screen mt-10 flex-col items-center py-10">
      <ScrollButton/>
      <section className="w-[85%] md:w-[90%] lg:w-[70%]">
      <div className="flex items-center pr-11 text-left mr-auto">
      <h1 className=" flex items-start mb-3 text-4xl font-bold">Trending today</h1>
      </div>
      <ol className=" sm:max-w-md sm:grid-cols-none md:grid md:grid-cols-2 md:gap-x-4 lg:gap-x-6 md:max-w-none">
        {trendingArticles &&
          trendingArticles.map((article, index) => (
            <li key={index}>
              <ArticleTitle
                article={article}
                bookmarks={userBookmarks || []}
                handleOpenModal={() => handleOpenModal(article)}
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
          <TopicArticle topicOne={"Animals"} topicTwo={"Technology"} />
      </ol>
      </section>
      {selectedArticle && <ArticleModal article={selectedArticle!} isVisible={isModalOpen} onClose={handleCloseModal} />}
    </main>
  );
}
