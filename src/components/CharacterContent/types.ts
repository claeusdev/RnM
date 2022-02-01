import { Character, Location } from "types";


export interface CharacterContentProps {
  gender: string;
  location: Location;
  origin: { name: string };
  species: string;
}
