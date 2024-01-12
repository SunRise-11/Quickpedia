"use client";

import { useEffect, useState } from "react";
import {
  ArticleModal,
  ArticleTitle,
  Filterbutton,
  NavFooter,
  ScrollButton,
} from "../../components";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DynamicUrl, Article } from "@/app/utils/types";
import { handleBookmarking } from "@/app/utils/bookmarksUtils";
import { capitaliseFirstLetter, uniqueFilter } from "@/app/utils/utilities";
import { fetchUserBookmarks } from "@/app/utils/userBookmarksUtils";
import { fetchArticles } from "@/app/utils/articlesUtils";
import { Loading } from "@/app/components/loading/Loading";
import { TopicSelector } from "@/app/components/topic-selector/TopicSelector";

const Page = ({ params }: DynamicUrl) => {
  const { user, isLoading } = useUser();
  const [allArticles, setAllArticles] = useState<Article[] | []>();
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

    const fetchAllArticles = async () => {
      try {
        const data = await fetchArticles();
        setAllArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    if (!isLoading && !userBookmarks) {
      fetchData();
    }

    fetchAllArticles();
  }, [user?.email, userBookmarks, isLoading]);

  const articlesToShow =
    params.topic === "all"
      ? allArticles
      : allArticles?.filter(
          (article) => article.topic.toLowerCase() === params.topic
        );

  if (isLoading || !allArticles) {
    return <Loading />;
  }

  return (
    <main className="text-primaryB flex min-h-screen mt-10 flex-col items-center py-10">
      <ScrollButton />
      <section className="w-[85%] md:w-[90%] lg:w-[70%]">
      <TopicSelector allArticles={allArticles} pathParam={params.topic} />
      <div className="flex items-center pr-11 text-left mr-auto">
        <h1 className=" flex items-start mb-3 mt-3 text-4xl font-bold text-primaryB">{capitaliseFirstLetter(params.topic)}</h1>

      </div>
      <ol className="sm:max-w-md sm:grid-cols-none md:grid md:grid-cols-2 md:gap-x-4 lg:gap-x-6 md:max-w-none">
        {articlesToShow &&
          articlesToShow.map((article, index) => (
            <li key={index}>
              <ArticleTitle
                article={article}
                key={article.id}
                bookmarks={userBookmarks || []}
                handleOpenModal={() => handleOpenModal(article)}
                handleCloseModal={() => setIsModalOpen(false)}
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
      </section>
      <NavFooter />
      {selectedArticle && <ArticleModal isVisible={isModalOpen} article={selectedArticle!} onClose={handleCloseModal} />}
    </main>
  );
};

export default Page;
