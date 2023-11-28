import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";

export const postUserInfo = async (
  email: string,
  username: string
): Promise<void> => {
  await axios.post("https://quickipedia.azurewebsites.net/api/users", {
    email,
    username,
  });
};

export const getAccessTokenAndSetToken = async (): Promise<
  string | undefined
> => {
  try {
    const { accessToken } = await getAccessToken();
    return accessToken;
  } catch (error) {
    console.log("Error getting access token:", error);
    return undefined;
  }
};
