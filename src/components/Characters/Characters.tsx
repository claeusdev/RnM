import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { Character } from "types";
import { CharacterStatus } from "components/CardDetails/CardDetails";

type CharactersProps = {
    page: string
    results: Character[]
}

const Characters = ({ page, results }: CharactersProps) => {
    let display;

    if (results) {
      display = results.map((x) => {
        let { id, image, name, status, location } = x;

        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`${page}${id}`}
            key={id}
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          >
            <div
              className={`${styles.card} d-flex flex-column justify-content-center`}
            >
              <img className={`${styles.img} img-fluid`} src={image} alt="" />
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-4">{name}</div>
                <div className="">
                  <div className="fs-6 fw-normal">Last Location</div>
                  <div className="fs-5">{location.name}</div>
                </div>
              </div>
            </div>

            <CharacterStatus status={status} />
          </Link>
        );
      });
    } else {
      display = "No Characters Found :/";
    }

  return <>{display}</>;
};

export default Characters;
