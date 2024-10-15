import React, { FC, FormEventHandler, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { fetchBySearchedFilm } from "../../../store/slices/homeSlice";
import "./SearchForm.css"; // Import the CSS file

const SearchForm: FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setSearchParams({ search: value });
    dispatch(fetchBySearchedFilm(value)); // Dispatch the thunk here
    setValue("");
  };

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <form className="search-form" onSubmit={handleForm}>
        <h1 className="hero-title">Discover movies that you like</h1>
        <div className="input-container">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            type="search"
            placeholder="Search for a movie..."
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
