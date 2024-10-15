import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useParams } from "react-router-dom";
import { fetchByDetails } from "../../store/slices/detailSlice";
import { motion } from "framer-motion"; // Import motion
import "./Detail.css"; // Import CSS for styling
import Loader from "../../components/Loader/Loader";

const Detail: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { film, loading, error } = useAppSelector((state) => state.film); // Access the film details from Redux store

  useEffect(() => {
    if (id) {
      dispatch(fetchByDetails(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1 className="error">Error: {error}</h1>;
  }

  return (
    film && (
      <motion.div
        className="detail-page"
        initial={{ opacity: 0, y: -50 }} // Starting position for the animation
        animate={{ opacity: 1, y: 0 }} // Final position for the animation
        transition={{ duration: 0.5 }} // Duration of the animation
      >
        <div className="detail-header">
          <img
            src={film.posterUrl}
            alt={film.nameOriginal || "Movie Poster"}
            className="detail-poster"
          />
          <motion.div
            className="detail-info"
            initial={{ opacity: 0 }} // Starting position for the animation
            animate={{ opacity: 1 }} // Final position for the animation
            transition={{ duration: 0.5, delay: 0.2 }} // Duration and delay for the animation
          >
            <h1 className="film-title">{film.nameRu || film.nameOriginal}</h1>
            <p className="film-description">{film.description}</p>
            <p>
              <strong>Year:</strong> {film.year}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {film.ratingImdb} (
              {film.ratingImdbVoteCount} votes)
            </p>
            <p>
              <strong>Kinopoisk Rating:</strong> {film.ratingKinopoisk} (
              {film.ratingKinopoiskVoteCount} votes)
            </p>
            <p>
              <strong>Film Length:</strong> {film.filmLength} min
            </p>
            <a
              href={film.webUrl}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              View on Kinopoisk
            </a>
          </motion.div>
        </div>
      </motion.div>
    )
  );
};

export default Detail;
