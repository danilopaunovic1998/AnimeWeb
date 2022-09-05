import Header from "./components/Header";
import Main from "./components/Main";
import NavCards from "./components/NavCards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MangaPage from "./pages/MangaPage";
import { useState } from "react";
import Popup from "./components/Popup";

function App() {
  const [token, SetToken] = useState();
  const [popup, SetPopup] = useState({
    trigger: false,
    text: "",
  });
  function addToken(auth_token) {
    SetToken(auth_token);
  }
  function changePopup(data) {
    SetPopup({
      trigger: true,
      text: data,
    });
  }
  return (
    <div className="App">
      <Router>
        <Header token={token} changeToken={addToken} popup={changePopup} />
        <NavCards />
        <Routes>
          <Route path={"/*"} element={<Main page="/anime" />}></Route>
          <Route path={"/manga"} element={<MangaPage />}></Route>
          <Route
            path={"/login"}
            element={<Login addToken={addToken} popup={changePopup} />}
          ></Route>
          <Route
            path={"/register"}
            element={<Register popup={changePopup} />}
          ></Route>
        </Routes>
      </Router>
      <Popup data={popup} setTrigger={SetPopup} />
    </div>
  );
}

export default App;
