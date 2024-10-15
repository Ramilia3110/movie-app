import { FC, useState } from "react";
import { IFilmsData } from "../../store/types";
import { Link } from "react-router-dom";
import "./Film.css";

interface FilmProps {
  el: IFilmsData;
}

const Film: FC<FilmProps> = ({ el }) => {
  const { nameEn, nameRu, nameOriginal, posterUrl, filmId, kinopoiskId } = el;

  // State to track whether the title is hovered
  const [isHovered, setIsHovered] = useState(false);

  // Get the title and provide a fallback if it's null
  const title = nameOriginal || nameRu || nameEn || "Untitled Film";

  // Shorten the title to the first 30 characters, ensuring it's not null
  const shortTitle = title.length > 30 ? `${title.substring(0, 30)}...` : title;

  return (
    <Link
      to={`/detail/${kinopoiskId || filmId}`}
      className="film-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={posterUrl}
        alt={`${nameEn || nameRu || nameOriginal}`}
        className="film-poster"
        loading="lazy"
      />
      <h2 className="film-name">{isHovered ? title : shortTitle}</h2>
    </Link>
  );
};

export default Film;
