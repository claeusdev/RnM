import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import Characters from 'components/Characters';
import Spinner from 'components/Spinner';
import Filter from 'components/Filter';
import styles from 'pages/Home/Home.module.css';

import { isEmpty } from 'utils';
import { store } from 'store';

import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useSelector';

const Home: React.FC = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [status, setStatus] = useState('');
  let [gender, setGender] = useState('');
  let [species, setSpecies] = useState('');

  const { fetchCharacters } = useActions();
  const { characters, loading } = useTypedSelector(
    (state: any) => state.characters
  );
  useEffect(() => {
    (async function () {
      fetchCharacters({
        status,
        gender,
        species,
        pageNumber,
      });
    })();
  }, [pageNumber, status, species, gender]);

  function handleLoadMore(rate: number): void {
    setPageNumber((state) => state + rate);
  }

  const { info, results } = characters;

  const Content = loading ? (
    <Spinner />
  ) : (
    <>
      {isEmpty(results) ? (
        <Characters page="/character/" results={results} />
      ) : (
        <NoCharacterFound />
      )}
    </>
  );

  const Pagination = (
    <>
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
    </>
  );
  

  return (
    <Provider store={store}>
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
              <div className="row">{Content}</div>
              <div className="d-flex justify-content-center">{Pagination}</div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

function NoCharacterFound() {
  return <span>No characters found</span>;
}

export default Home;
