import Api from "api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Character, Location } from "types";
import { STATUSES } from "utils";


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
          <>
            {character && (
              <CharacterDetails character={character} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

interface CharacterProps {
  character: Character
}

function CharacterDetails({ character }: CharacterProps) {
  return (
    <>
      <h1 className="text-center">{character.name}</h1>
      <img className="img-fluid" src={character.image} alt="" />
      <CharacterStatus status={character.status} />
      <CharacterContent {...character} />
    </>
  );
}

interface CharacterStatusProps {
  status: string;
}

export function CharacterStatus({status}: CharacterStatusProps){
    return (
      <div className={`badge bg-${STATUSES[status]} fs-5`}>
        {status}
      </div>
    );
}

interface CharacterContentProps {
  gender: string, 
  location: Location
  origin: { name: string },
  species: string
}

function CharacterContent({
  gender,
  location,
  origin,
  species,
}: CharacterContentProps) {
  return (
    <div className="content">
      <div className="">
        <span className="fw-bold">Gender : </span>
        {gender}
      </div>
      <div className="">
        <span className="fw-bold">Location: </span>
        {location.name}
      </div>
      <div className="">
        <span className="fw-bold">Origin: </span>
        {origin.name}
      </div>
      <div className="">
        <span className="fw-bold">Species: </span>
        {species}
      </div>
    </div>
  );
}

export default CardDetails;
