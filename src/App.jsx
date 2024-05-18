import { Route, Routes } from "react-router-dom";
import FirstPage from "./pages/firstpage";
import RegisterPage from "./pages/register";
import ProtectRoute from "./services/ProtectRoute";
import DetailPage from "./pages/detailpage";
import ListMovies from "./pages/listmovies";

function App() {
  return (
    <div className="movie-app">
      <Routes>
        <Route path="/login" element={<FirstPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<ProtectRoute />} />
        <Route path="/movies/:id" element={<DetailPage />} />
        <Route path="/movielist" element={<ListMovies />} />
      </Routes>
    </div>
  );
}

export default App;
