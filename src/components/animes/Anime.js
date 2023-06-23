import './anime.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Anime = ({anime}) =>{

    const { title, score,images} = anime
    const id = anime.mal_id

    return(<Link to={`/anime/${id}`}><div className="anime">
        <div className="photo">
            <img className='rounded'  src={images?.jpg.large_image_url} alt=""/>
            <div className="text">
                <h3>{title}</h3>
                <p><FontAwesomeIcon  icon={faStar} className='star me-2'/>{score}</p>
                
                
            </div>
        </div>
        


    </div>
    </Link>)
}

export default Anime;