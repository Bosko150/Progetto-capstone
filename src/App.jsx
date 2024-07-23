import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePage from "./components/GamePage/GamePage";
// import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <MyNavbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gamepage" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
