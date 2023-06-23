import { Col, Container } from "react-bootstrap";
import "./animeScreen.css";
import Loader from "../helpers/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rating from "../components/rating/Rating";
const AnimeScreen = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isShowed, setIsShowed] = useState(false);

  //get anime based on id
  const getAnime = async (anime) => {
    const res = await axios.get(`https://api.jikan.moe/v4/anime/${anime}`);
    setAnime(res.data.data);
  };

  // get all characters based on the anime id
  const getCharacters = async (anime) => {
    const res = await axios.get(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );

    setCharacters(res.data.data);
    setLoading(false);
  };

  //initial render
  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, [loading, id]);

  const {
    title,
    synopsis,
    type,
    duration,
    images,
    score,
    status,
    source,
    genres,
  } = anime;

  const handleShowMore = () => {
    setIsShowed(true);
  };
  const handleShowLess = () => {
    setIsShowed(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="anime-section">
      <div className="anime-detail pb-5 pt-5">
        <div className="overlay"></div>
        <img
          className="poster-image "
          src={images?.jpg.large_image_url}
          alt=""
        />
        <Container>
          <div className="content mb-3 d-flex gap-4">
            <div>
              <img
                className="anime-cover position-relative img-fluid"
                src={images?.jpg.large_image_url}
                alt=""
              />
            </div>

            <div className="anime-details pt-3 pb-3">
              <h3 className="mb-3">{title}</h3>
              <Rating score={score} />
              <ul className="genres-anime list-unstyled d-flex gap-2">
                {genres?.map((genre, ind) => {
                  return (
                    <li className="rounded" key={ind + 1}>
                      {genre.name}
                    </li>
                  );
                })}
              </ul>
              <ul className="list-unstyled">
                <li className="mb-2">Type : {type}</li>
                <li className="mb-2">Status : {status}</li>
                <li className="mb-2">Duration episode : {duration}</li>
                <li className="mb-2">Source : {source}</li>
              </ul>
            </div>
          </div>
          <div>
            <Col lg="8">
              {!isShowed ? (
                <p className="contenu anime-details">
                  {synopsis?.substring(0, 300) + "..."}
                  <span onClick={handleShowMore}>show more </span>
                </p>
              ) : (
                <p className="contenu anime-details">
                  {synopsis}
                  <span onClick={handleShowLess}>show less </span>
                </p>
              )}
            </Col>
          </div>
        </Container>
      </div>
      <div className="characters pt-5 pb-5">
        <Container>
          <h3>Characters :</h3>
        </Container>
        <div className="charachters-content d-flex p-2">
          {characters.map((character) => {
            const { images, name } = character.character;
            return (
              <div className="character-box text-center">
                <img
                  className=" img-charac"
                  src={images.jpg.image_url}
                  alt=""
                />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimeScreen;
