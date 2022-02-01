import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "components/Card";
// import Navbar from "./components/Navbar";

import CardDetails from "components/CardDetails";
import Api from "api";
import { Character } from "types";

function App() {
  return (
    <Router>
      <div className="App">{/* <Navbar /> */}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [characters, setCharacters] = useState<Character[]>([]);
  let [info, setInfo] = useState<{}>();

  useEffect(() => {
    (async function () {
      let data = await Api().getCharacters();
      const { info, results } = data;
      setCharacters(results)
      setInfo(info)
    })();
  }, []);
  
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      {/* <Search setSearch={setSearch} updatePageNumber={updatePageNumber} /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 justify-content-center">
            <div className="row">
              <Card page="/character/" results={characters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
