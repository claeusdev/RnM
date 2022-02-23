import CharacterCard from 'components/Card/Card';
import Spinner from 'components/Spinner';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useSelector';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { store } from 'store';

const CardDetails: React.FC = () => {
  let { id } = useParams();
  const { fetchCharacter } = useActions();

  const { character, loading, episodes } = useTypedSelector(
    (state: any) => state.characters
  );
  useEffect(() => {
    (async function () {
      if (id) {
        fetchCharacter(id);
      }
    })();
  }, [id]);

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
