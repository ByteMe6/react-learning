import axios from "axios";

export async function fetchGifs(api, keywords) {
  try {

    if (keywords == " "){

    } else{
        const url = "api.giphy.com/v1/gifs/search";
        let fullUrl = `https://${url}?api_key=${api}&q=${keywords}&limit=20&offset=0&rating=g&lang=en`;
        const response = await axios.get(fullUrl);
        return response.data.data;
    }
  } catch (error) {
    return `Error! ${error.message}`;
  }
}
