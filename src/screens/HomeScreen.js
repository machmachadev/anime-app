import React from 'react';
import AnimeSlider from "../components/slider/AnimeSlider";
import { useReducer } from 'react';
import { animeListReducer, initialState } from '../reducers/animesReducer';
import Loader from '../helpers/Loader';
import { useEffect } from 'react';
import { getAnimeList, getPopularAnime, getTopRatedAnime, getTrendingAnime } from '../actions/animeActions';
import AnimeList from '../components/animes/AnimeList';

function HomeScreen() {

    const [{loading,popularAnime,topRatedAnime,trendingAnime},dispatch] = useReducer(animeListReducer,initialState)


    useEffect(() =>{

        
        // getPopularAnime(dispatch);
        // getTopRatedAnime(dispatch);
        getAnimeList(dispatch)



},[dispatch,loading])
    return (
        
        
            loading ? <Loader/> : <>

            <AnimeSlider animesSlide = {trendingAnime}/>
            <div className="animes-section">
                    <AnimeList title = "Trending" data={trendingAnime}/>
                    <AnimeList title = "Most Rated" data={topRatedAnime}/>
                    <AnimeList title = "Most Popular" data={popularAnime}/>
                
                </div>
            </>
        

            
    );
}

export default HomeScreen;