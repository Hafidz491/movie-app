import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailMovie = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: "649d7cb7fa591c4040c93caa5d6b089f",
            },
          }
        );
        setItem(response.data);
        window.scrollTo(0, 0);
        setError(null);
      } catch (e) {
        console.log(e.message);
        setError("Terjadi kesalahan saat memuat data");
      }
    };
    getDetail();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {item && (
        <div className="container mx-auto">
          <div className="dark-overlay"></div>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
            alt={item.title}
            className="w-full lg:h-screen sm:h-[700px]"
          />
          <div className=" absolute top-1/4 ml-20 w-full lg:pl-4 sm:pl-28  text-white">
            <div className="flex mx-auto">
              <div className="flex ">
                <img
                  src={`https://image.tmdb.org/t/p/w400/${item.backdrop_path}`}
                  alt={item.title}
                  className="w-96 h-96 rounded-3xl"
                />
              </div>
              <div className="w-2/4 ml-2">
                <h1 className="text-6xl font-bold">{item.title}</h1>
                <p className="text-lg">{item.overview}</p>
                <p className="font-bold text-lg">
                  Released : {item.release_date}
                </p>
                <p className="font-bold text-lg">
                  Genre: {item.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailMovie;
