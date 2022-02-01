import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Characters from 'components/Characters';

import CardDetails from 'components/CardDetails';
import Api from 'api';
import { Character, Info } from 'types';
import { BASE_CHARACTER_URL } from 'utils';
import Navbar from 'components/Navbar';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [characters, setCharacters] = useState<Character[]>([]);
  let [info, setInfo] = useState<Info>();
  const [page, setPage] = useState<string | undefined>(BASE_CHARACTER_URL);
  useEffect(() => {
    (async function () {
      let data = await Api().getCharacters(page);
      const { info, results } = data;
      setCharacters((prevState) => [...prevState, ...results]);
      setInfo(info);
    })();
  }, [page]);

  function handleLoadMore() {
    setPage(info?.next);
  }

  return (
    <div className="App">
      <h1 className="text-center mb-3" data-testid="site-header">
        Characters
      </h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-9 col-12 justify-content-center">
            <div className="row">
              {characters.length > 0 ? (
                <Characters page="/character/" results={characters} />
              ) : (
                <span>No characters found</span>
              )}
            </div>
            <div className="d-flex justify-content-center">
              <button
                className={`btn ${styles.btnPill}`}
                onClick={handleLoadMore}
              >
                Load More ...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
