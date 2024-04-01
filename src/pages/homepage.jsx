import Hero from "../components/hero/Hero";
import MovieList from "../components/main/MovieList";
import TopRated from "../components/main/TopRated";
import UpComing from "../components/main/UpComing";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div className="movie-app">
      <Navbar />
      <Hero />
      <UpComing />
      <MovieList />
      <TopRated />
      <Footer />
    </div>
  );
};

export default HomePage;
