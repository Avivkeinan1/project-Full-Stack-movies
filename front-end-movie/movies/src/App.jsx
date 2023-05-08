import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/sign-up";
import Login from "./components/login";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LogOut from "./components/logout";
import SearchBarMovies from "./components/searchBar";
import { useEffect, useState } from "react";
import SaveMovies from "./components/saveMovies";
import DeleteMovie from "./components/deleteMovie";
import ProtectedRoute from "./common/ProtectedRouts";
import SignUpBiz from "./components/signupbusiness";
import Footer from "./components/footer";
import About from "./components/about";
import AllUsers from "./components/userData";
import DeleteUsers from "./components/deleteUser";

function App() {
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=97078127fca4b1bc3b367f36b1cc98f4&language=en-US&page=maximum:3`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((respond) => respond.json())
      .then((respondData) => {
        setMovies(respondData.results);
      });
  }, []);

  return (
    <>
      <div className="App d d-flex flex-column min-vh-100">
        <ToastContainer />
        <header>
          <Navbar />
        </header>
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home data={movies} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="log-out" element={<LogOut />} />
            <Route path="/saveMovies" element={<SaveMovies />} />
            <Route
              path="search-bar"
              element={<SearchBarMovies data={movies} />}
            />
            <Route path="/movies/delete/:id" element={<DeleteMovie />} />
            <Route path="/sign-up-business" element={<SignUpBiz />} />
            <Route path="/about" element={<About />} />
            <Route path="/all-Users" element={<AllUsers />} />
            <Route path="/user/delete/:id" element={<DeleteUsers />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
