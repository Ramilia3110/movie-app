import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  fetchByAllFilms,
  fetchBySearchedFilm,
} from "../../../store/slices/homeSlice";
import Film from "../../../components/Film/Film";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Output.css"; // Import the CSS file
import Loader from "../../../components/Loader/Loader";

const Output: FC = () => {
  const dispatch = useAppDispatch();
  const { error, films = [], loading } = useAppSelector((state) => state.home); // Initialize films as an empty array
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");

    // Fetch all films if there is no search and films are empty
    if (!search) {
      dispatch(fetchByAllFilms());
    } else {
      // Dispatch fetchBySearchedFilm if there is a search query
      dispatch(fetchBySearchedFilm(search));
    }
  }, [dispatch, searchParams]);

  return (
    <div className="films-container">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>{error}</h1>
      ) : films && films.length > 0 ? ( // Ensure films is defined and has length
        <motion.div
          className="films-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {films.map((el, index) => (
            <motion.div
              key={el.kinopoiskId || el.filmId}
              initial={{ opacity: 0, y: 20 }} // Start from below
              animate={{ opacity: 1, y: 0 }} // Animate to original position
              transition={{ duration: 0.3, delay: index * 0.1 }} // Delay based on index
            >
              <Film el={el} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <h1>Films are not found</h1>
      )}
    </div>
  );
};

export default Output;
