import { STATUSES } from "utils";
import { CharacterStatusProps } from "./types";

export default function CharacterStatus({status}: CharacterStatusProps){
    return (
      <div className={`badge bg-${STATUSES[status]} fs-5`}>
        {status}
      </div>
    );
}