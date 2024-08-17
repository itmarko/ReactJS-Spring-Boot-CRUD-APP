import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <div className="form-outline mb-1 my-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            className="form-control"
            placeholder="Student Search"
            role="searchbox"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
