import Api from "api";
import CharacterCard from "components/Card/Card";
import Spinner from "components/Spinner";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Character, Episode } from "types";

const CardDetails = () => {
  let { id } = useParams();

  let [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState<boolean>(false);
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    (async function () {
      setLoading(true);
      if (id) {
        const data = await Api().getSingleCharacter(id);
        const episodes = await Api().getEpisodes(data.episode);
        setCharacter(data);
        setEpisodes(episodes)
      } else {
        setLoading(true);
      }
      setLoading(false);
    })();
  }, [id]);

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <Link to="/">Back to all characters</Link>
        {loading ? (
          <Spinner />
        ) : (
          <>{character && <CharacterCard character={character} episodes={episodes}/>}</>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
