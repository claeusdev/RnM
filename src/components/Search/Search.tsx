import React from "react";
import styles from "./Search.module.css";

interface SearchProps {
    setSearch: (term: string) => void;
    updatePageNumber: (pageNumber: number) => void;
}
const Search = ({ setSearch, updatePageNumber }: SearchProps) => {
  let searchBtn = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="search"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;