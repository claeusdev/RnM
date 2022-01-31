import Api from "api";
import CharacterCard from "components/Card/Card";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Character } from "types";

const CardDetails = () => {
  let { id } = useParams();

  let [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      setLoading(true);
      if (id) {
        let data = await Api().getSingleCharacter(id);
        setCharacter(data);
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
          <span>loading ...</span>
        ) : (
          <>{character && <CharacterCard character={character} />}</>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
