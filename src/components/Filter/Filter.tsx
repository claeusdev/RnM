import Gender from "./FilterCategory/Gender";
import Species from "./FilterCategory/Species/Species";
import Status from "./FilterCategory/Status";
import { FilterProps } from "./types";

interface FilterComponentProps extends FilterProps {
    pageNumber: number;
    updateStatus: (status: string) => void
    updateGender: (gender: string) => void
    updateSpecies: (species: string) => void
    status: string
}

const Filter: React.FC<FilterComponentProps> = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload();
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

export default Filter;