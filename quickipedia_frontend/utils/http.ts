import axios from "axios";


export const handleBookmarking = async (email: string, articleId: string) => {
    console.log("you tried to add bookmark: " + articleId)

    const data = await axios({
      method: "post",
      url: `https://quickipedia.azurewebsites.net/api/users/${email}`,
      data: {id: articleId}
    });

    console.log(data);
  }

 