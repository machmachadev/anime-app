import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './animeSlide.css'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";



const AnimeSlider = ({animesSlide}) =>{




    return(<>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: false,
                
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                animesSlide.map((anime,index) =>{
                    const { title, score,images,synopsis} = anime
                    
                    
                    
                    
                    
                 
                    return <SwiperSlide key={index+1}>
                        <img src={images?.jpg.large_image_url} alt=""/>
                        <div className="overlay">
                        </div>
                        <div className="description">
                            <h2>{title}</h2>
                            <p>{synopsis.substring(0,200)}...</p>
                            <Link className="text-decoration-none" to="">Watch Now <FontAwesomeIcon icon={faCirclePlay} className="ms-2 play-icon"/></Link>
                        </div>
                    </SwiperSlide>
                })
            }

        </Swiper>


    </>)
}

export default AnimeSlider