import { Container } from "react-bootstrap";
import Anime from "./Anime";
import './animeList.css'

const AnimeList = ({title,data}) =>{



    return(<div className="anime-category pt-5">
    <Container>

            <div className="headings mb-3 text-white">
                <h2>{title}</h2>
            </div>
            <div className="animes">
                {data.map((anime,index) =>{
                    return <Anime  key={index+1} anime={anime}/>
                })}
            </div>
    </Container>
    </div>)
}

export default AnimeList;