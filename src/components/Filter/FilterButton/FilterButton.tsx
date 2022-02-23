import styles from './FilterButton.module.css';

interface FilterButtonProps {
  input: string;
  task: (input: string) => void;
  updatePageNumber: (pageNumber: number) => void;
  index: number;
  name: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  input,
  task,
  updatePageNumber,
  index,
  name,
}) => {
  return (
    <>
      <style>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          className={styles.filterBtn}
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </>
  );
};

export default FilterButton;
