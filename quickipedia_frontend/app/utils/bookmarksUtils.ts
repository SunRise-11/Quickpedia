import { addUserBookmark, deleteUserBookmark } from "./userBookmarksUtils";
import { Article } from "./types";


export const handleBookmarking = async (email: string, articleToToggle: Article, userBookmarks: Article[] | undefined, setUserBookmarks: React.Dispatch<React.SetStateAction<Article[] | undefined>>) => {
    if (!userBookmarks) {
      return;
    }
    const articleId = articleToToggle.id;
    if (userBookmarks.some((item) => item.id === articleId)) {
      try {
        await deleteUserBookmark(email, articleId);
        setUserBookmarks(userBookmarks.filter((item) => item.id !== articleId));
      } catch (error) {
        console.error("Error deleting user bookmark:", error);
      }
    } else {
      try {
        await addUserBookmark(email, articleId);
        setUserBookmarks([...userBookmarks, articleToToggle]);
      } catch (error) {
        console.error("Error adding user bookmark:", error);
      }
    }
  };