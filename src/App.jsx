import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <MyNavbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
