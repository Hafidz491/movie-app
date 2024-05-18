import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Api from "../../utils/api";
import { Link } from "react-router-dom";

const Hero = () => {
  const [heroMovies, setHeroMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: Api.apiKey,
            },
          }
        );
        setHeroMovies(response.data.results);
      } catch (e) {
        console.log("Error fetching movies: ", e);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Kecepatan
    fade: true,
  };

  return (
    <div className="hero-section overlay  h-screen">
      <Slider {...settings}>
        {heroMovies.map((movie) => (
          <div key={movie.id} className="relative">
            <div className="dark-overlay"></div>
            <img
              src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full lg:h-screen sm:h-[700px]"
            />
            <div className="hero-text absolute top-1/2 left-1/3 w-[750px] lg:pl-4 sm:pl-28  transform -translate-x-1/2  text-white">
              <h1 className="text-5xl font-bold">{movie.title}</h1>
              <p className="text-lg">{movie.overview.substring(0, 150)}...</p>
              <div className="flex flex-wrap w-full gap-8 mt-8">
                <a href="">
                  <div className="text-xl font-bold w-48 bg-red-600 hover:bg-red-400 rounded-2xl px-4 py-2 text-center">
                    <span>Watch Now</span>
                  </div>
                </a>
                <a href="">
                  <div className="text-xl font-bold w-48 border  rounded-2xl px-4 py-2 text-center text-white hover:bg-slate-300 hover:bg-opacity-50">
                    <span>Watch Trailer</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
