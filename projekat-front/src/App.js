import Header from "./components/Header";
import Main from "./components/Main";
import NavCards from "./components/NavCards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registre from "./pages/Registre";
import MangaPage from "./pages/MangaPage";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavCards />
        <Routes>
          <Route path={"/*"} element={<Main page="/anime" />}></Route>
          <Route path={"/manga"} element={<MangaPage />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/registre"} element={<Registre />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
