import CharacterStatus from "components/CharacterStatus";
import { Link } from "react-router-dom";
import styles from "./Characters.module.css";
import { CharactersProps } from "./types";

const Characters = ({ page, results }: CharactersProps) => {
  let content = results.map(({ id, image, name, status, location, species }) => (
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
        <div className={styles.content}>
          <div className={styles.contentHeading}>
            <h4 className={styles.characterName}>{name}</h4>
            <CharacterStatus status={status} />
          </div>
          <p className={styles.characterSpecies}>{species}</p>
          
          <div className="">
            <div className="text-small">Last known location:</div>
            <div className="lead">{location.name}</div>
          </div>
        </div>
      </div>

      
    </Link>
  ));
  return <>{content}</>;
};

export default Characters;
