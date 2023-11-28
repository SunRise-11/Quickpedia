import axios from "axios";
import { Article } from "@/app/utils/types";

export const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error; //look into how we want to do this
  }
};

export const fetchTrending = async (): Promise<Article[]> => {
  try {
    const response = await axios.get(
      "https://quickipedia.azurewebsites.net/api/articles/top"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error; //look into how we want to do this
  }
};

export const handleShare = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'Share Quikipedia with your friends!',
        url: window.location.href,
      });
    } else {
      console.log('Web Share API not supported in this browser');
    }
  } catch (error) {
    console.error('Error sharing:', error);
  }
};

