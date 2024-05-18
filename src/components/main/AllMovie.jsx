import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllMovie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "649d7cb7fa591c4040c93caa5d6b089f",
            },
          }
        );
        setData(response.data.results);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  });

  return (
    <div className="flex flex-wrap">
      {data.map((movie) => (
        <div className="w-1/4 p-2 my-4 text-center">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="all movie"
            className="h-full mr-2 rounded"
          />
          <Link
            className="text-md text-center mx-auto font-bold text-white hover:text-yellow-500"
            to={`/movie/${movie.id}`}
          >
            {movie.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllMovie;
