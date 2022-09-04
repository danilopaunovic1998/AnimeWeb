import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import NavCards from "./components/NavCards";

function App() {
  const [page, SetPage] = useState("/manga");
  return (
    <div className="App">
      <Header />
      <NavCards />
      <Main page={page} />
    </div>
  );
}

export default App;
