import { STATUSES } from "utils";
import { CharacterStatusProps } from "./types";

export default function CharacterStatus({status}: CharacterStatusProps){
    return (
      <div className={`col-auto text-${STATUSES[status]}`}>{status}</div>
    );
}