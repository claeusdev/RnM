import Api from 'api';
import CharacterCard from 'components/Card/Card';
import Spinner from 'components/Spinner';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useSelector';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Episode } from 'types';

const CardDetails = () => {
  let { id } = useParams();
  const { fetchCharacter } = useActions()
  const character = null,
  episodes: Episode[] = [], loading = false
  // const { character, error, loading, episodes } = useTypedSelector(
  //   (state: any) => state.character
  // );
  useEffect(() => {
    (async function () {
      if (id) {
        console.log("load")
        fetchCharacter(id);
      }
    })();
  }, [id]);
  console.log(id)

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <Link to="/">Back to all characters</Link>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {character && (
              <CharacterCard character={character} episodes={episodes} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
