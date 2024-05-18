import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [moviePopular, setMoviePopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          {
            params: {
              api_key: "649d7cb7fa591c4040c93caa5d6b089f",
            },
          }
        );
        setMoviePopular(response.data.results);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Sesuaikan jumlah tampilan film yang diinginkan
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024, // Jika lebar layar kurang dari 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1800, // Jika lebar layar kurang dari 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768, // Jika lebar layar kurang dari 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650, // Jika lebar layar kurang dari 650px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-36 px-8 text-white">
      <div>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Top Rated</h1>
          <div className="w-28 h-8 border px-2 py-2 rounded-3xl">
            <div className="w-full h-full flex justify-center items-center">
              <Link to="/movielist">
                <span>Show More</span>
              </Link>
            </div>
          </div>
        </div>
        <Slider className="mr-2" {...settings}>
          {Array.isArray(moviePopular) && moviePopular.length > 0 ? (
            moviePopular.map((movie) => (
              <div
                key={movie.id}
                className="card-image h-[500px] rounded mr-2 gap-2 flex flex-wrap shadow-md shadow-slate-500"
              >
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt="movie"
                    className=" h-full mr-2 rounded"
                  />
                </Link>
              </div>
            ))
          ) : (
            <p className="text-lg">Tidak ada film ditemukan</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default TopRated;
