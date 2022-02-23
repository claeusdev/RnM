import Api from 'api';
import Characters from 'components/Characters';
import { useEffect, useState } from 'react';
import { Character, Info } from 'types';
import { isEmpty } from 'utils';

import styles from 'pages/Home/Home.module.css';
import Filter from 'components/Filter';

const Home = () => {
  let [characters, setCharacters] = useState<Character[]>([]);
  let [info, setInfo] = useState<Info>();
  let [pageNumber, setPageNumber] = useState(1);
  let [status, setStatus] = useState('');
  let [gender, setGender] = useState('');
  let [species, setSpecies] = useState('');

  useEffect(() => {
    (async function () {
      let data = await Api().getCharacters({
        status,
        gender,
        species,
        pageNumber,
      });
      const { info, results } = data;
      setCharacters(results);
      setInfo(info);
    })();
  }, [pageNumber, status, species, gender]);

  function handleLoadMore(rate: number): void {
    setPageNumber((state) => state + rate);
  }

  return (
    <div className="App">
      <h1 className="text-center mb-3" data-testid="site-header">
        Characters
      </h1>
      <div className="container my-5">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={setStatus}
            updateGender={setGender}
            updateSpecies={setSpecies}
            updatePageNumber={setPageNumber}
          />
          <div className="col-lg-9 col-12 justify-content-center">
            <div className="row">
              {isEmpty(characters) ? (
                <Characters page="/character/" results={characters} />
              ) : (
                <NoCharacterFound />
              )}
            </div>
            <div className="d-flex justify-content-center">
              {info?.prev && (
                <button
                  className={`btn ${styles.btnPill}`}
                  onClick={() => handleLoadMore(-1)}
                >
                  Prev
                </button>
              )}
              {info?.next && (
                <button
                  className={`btn ${styles.btnPill}`}
                  onClick={() => handleLoadMore(1)}
                >
                  Next
                </button>
              )}
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
