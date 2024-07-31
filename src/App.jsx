import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage/GamePage";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import SearchPage from "./components/SearchPage/SearchPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
// import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games/:gameId" element={<GamePage />} />
          <Route path="/search/" element={<SearchPage />} />
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/register/" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
