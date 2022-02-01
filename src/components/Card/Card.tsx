import CharacterStatus from 'components/CharacterStatus';
import { Episode } from 'types';
import styles from './Card.module.css';
import { CharacterProps } from './types';

export default function CharacterCard({ character, episodes }: CharacterProps) {
  return (
    <>
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-auto">
            <span
              className={styles.avatar}
              style={{
                backgroundImage: `url(${character.image})`,
              }}
            ></span>
          </div>
          <div className="col">
            <h2 className="page-title">{character.name}</h2>
            <div className="page-subtitle">
              <div className="row">
                <CharacterStatus status={character.status} />
                <div className="col-auto">
                  <span className="text-reset">{character.species}</span>
                </div>
                <div className="col-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-man"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M10 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"></path>
                  </svg>
                  <span className="text-reset">{character.gender}</span>
                </div>
                <div className="col-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.icon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    <circle cx="12" cy="12" r="8"></circle>
                    <line x1="12" y1="2" x2="12" y2="4"></line>
                    <line x1="12" y1="20" x2="12" y2="22"></line>
                    <line x1="20" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="12" x2="4" y2="12"></line>
                  </svg>
                  <span className="text-reset">{character.location.name}</span>
                </div>
                <div className="col-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.icon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="11" r="3"></circle>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                  <span className="text-reset">{character.origin.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hr}>Episodes</div>
      <ul>
        {episodes.map((episode: Episode) => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ul>
    </>
  );
}
