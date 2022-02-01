import { CharacterContentProps } from "./types";


export default function CharacterContent({
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