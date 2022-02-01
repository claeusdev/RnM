import CharacterStatus from 'components/CharacterStatus';
import { Link } from 'react-router-dom';
import styles from './Characters.module.css';
import { CharactersProps } from './types';

const Characters = ({ page, results }: CharactersProps) => {
  let content = results.map(
    ({ id, image, name, status, location, species }) => (
      <Link
        style={{ textDecoration: 'none' }}
        to={`${page}${id}`}
        key={id}
        className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
      >
        <div className="card d-flex flex-column">
          <img className="card-img-top" src={image} alt={name} />
          <div className="card-body d-flex flex-column">
            <h3 className={styles.cardTitle}>{name}</h3>
            <div className="text-muted">{species}</div>
            <div className="d-flex align-items-center pt-2 mt-auto">
              <div>
                <span className="text-body">Last known location</span>
                <div className="text-muted">{location.name}</div>
              </div>
              <div className="ms-auto">
                <CharacterStatus status={status} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  );
  return <>{content}</>;
};

export default Characters;
