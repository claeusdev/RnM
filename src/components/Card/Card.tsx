import CharacterContent from 'components/CharacterContent';
import CharacterStatus from 'components/CharacterStatus';
import { CharacterProps } from './types';


export default function CharacterCard({ character }: CharacterProps) {
  return (
    <>
      <h1 className="text-center">{character.name}</h1>
      <img className="img-fluid" src={character.image} alt="" />
      <CharacterStatus status={character.status} />
      <CharacterContent {...character} />
    </>
  );
}