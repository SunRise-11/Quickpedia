import axios from "axios";

export const apiBaseUrlUsers: string = 'https://quickipedia.azurewebsites.net/api/users/'

export const fetchUserBookmarks = async (email:string) => {
    try {
      const response = await axios.get(`${apiBaseUrlUsers}${email}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user bookmarks:", error);
      throw error;
    }
  };
  
  export const deleteUserBookmark = async (email: string, articleId: string) => {
    try {
      await axios.delete(`${apiBaseUrlUsers}${email}`, { data: { id: articleId } });
    } catch (error) {
      console.error("Error deleting user bookmark:", error);
      throw error;
    }
  };
  
  export const addUserBookmark = async (email: string, articleId:string) => {
    try {
      const response = await axios.post(`${apiBaseUrlUsers}${email}`, { id: articleId });
      return response.data;
    } catch (error) {
      console.error("Error adding user bookmark:", error);
      throw error;
    }
  };

