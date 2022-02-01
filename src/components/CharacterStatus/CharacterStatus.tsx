import { STATUSES } from "utils";
import { CharacterStatusProps } from "./types";

export default function CharacterStatus({status}: CharacterStatusProps){
    return (
      <div className={`text-${STATUSES[status]}`}>
        {status}
      </div>
    );
}