import axios from "axios"
import { mostRatedAnime } from "../animeRequest"



export const getAnimeList = async (dispatch) =>{

    dispatch({
        type: "ANIME_LIST_REQUEST"
    })
    const firstAnineData = await axios.get(mostRatedAnime)
    console.log(firstAnineData.data.data)
    dispatch({
        type:"ANIME_LIST_SUCCESS",
        payload : {
            popularAnime:firstAnineData.data.data,
            trendingAnime : firstAnineData.data.data,
            topRatedAnime : firstAnineData.data.data
        }
    })


}

export const getAnimeDetails = async (id , dispatch) =>{

    dispatch({
        type: "ANIME_DETAILS_REQUEST"
    })

    const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    

    dispatch({
        type :"ANIME_DETAILS_SUCCESS",
        payload : res.data.data
    })

}

