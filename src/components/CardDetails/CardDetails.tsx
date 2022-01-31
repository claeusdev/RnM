import Api from "api";
import React, { useState, useEffect } from "react";
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
      setLoading(false)
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
            <h1 className="text-center">{character?.name}</h1>

            <img className="img-fluid" src={character?.image} alt="" />
            {(() => {
              if (character?.status === "Dead") {
                return (
                  <div className="badge bg-danger fs-5">
                    {character?.status}
                  </div>
                );
              } else if (character?.status === "Alive") {
                return (
                  <div className=" badge bg-success fs-5">
                    {character?.status}
                  </div>
                );
              } else {
                return (
                  <div className="badge bg-secondary fs-5">
                    {character?.status}
                  </div>
                );
              }
            })()}
            <div className="content">
              <div className="">
                <span className="fw-bold">Gender : </span>
                {character?.gender}
              </div>
              <div className="">
                <span className="fw-bold">Location: </span>
                {character?.location?.name}
              </div>
              <div className="">
                <span className="fw-bold">Origin: </span>
                {character?.origin?.name}
              </div>
              <div className="">
                <span className="fw-bold">Species: </span>
                {character?.species}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
