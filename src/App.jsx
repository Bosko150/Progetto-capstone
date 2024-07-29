import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage/GamePage";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import MyFooter from "./components/MyFooter/MyFooter";
import SearchPage from "./components/SearchPage/SearchPage";
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
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
