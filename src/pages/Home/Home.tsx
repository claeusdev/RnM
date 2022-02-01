import Api from 'api';
import Characters from 'components/Characters';
import { useEffect, useState } from 'react';
import { Character, Info } from 'types';
import { BASE_CHARACTER_URL, isEmpty } from 'utils';

import styles from 'pages/Home/Home.module.css';

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
              {isEmpty(characters) ? (
                <Characters page="/character/" results={characters} />
              ) : (
                <NoCharacterFound />
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

function NoCharacterFound() {
  return <span>No characters found</span>;
}

export default Home;
