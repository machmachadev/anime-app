
export const initialState = {
    loading : true,
    popularAnime:[],
    trendingAnime:[],
    topRatedAnime:[],
  
}

export const animeListReducer = (state =initialState, action) =>{

    switch(action.type){
        case "ANIME_LIST_REQUEST":
            return{
                ...state,
                laoding : true
            }
        case "ANIME_LIST_SUCCESS":
            return{
                ...state,
                loading:false,
                trendingAnime : action.payload.trendingAnime,
                popularAnime : action.payload.popularAnime,
                topRatedAnime : action.payload.topRatedAnime
                
            }
            default:
                return state
    }
}



export const animeDetailsReducer = (state,action) =>{

    switch(action.type){
        case "ANIME_DETAILS_REQUEST":
            return{
                ...state,
                loading : true
            }
        case "ANIME_DETAILS_SUCCESS":
            return{
                ...state,
                anime : action.payload
            }
        default:
            return state
    }
}

export const animeCharactersReducer = (state,action) =>{
    switch(action.type){
        case "ANIME_CHARACTERS_REQUEST":
            return{
                ...state,
                loading : true
            }
        case "ANIME_CHARACTERS_SUCCESS":
            return{
                ...state,
                characters : action.payload
            }
        default:
            return state
    }

}