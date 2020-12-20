import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres, id }) {
  return (
    <div className="col-6 p-3">
      <div className="card d-flex flex-row" style={{ maxHeight: 345 }}>
        <div>
          <img className="" src={poster} alt={title} />
        </div>
        <div className="card-body">
          <h3 className="card-title movie_title">
            {title.length < 30 ? title : `${title.slice(0, 30)}...`}
          </h3>
          <h5 className="card-text movie_year">{year}</h5>
          <ul className="p-0 card-text movie_genres d-flex flex-wrap">
            {genres.map((genre, index) => (
              <li
                key={index}
                className="list-unstyled px-1 card-text genres_genre"
              >
                {genre}
              </li>
            ))}
          </ul>
          <p className="card-text movie_summary">{summary.slice(0, 90)}...</p>
          <Link
            to={{
              pathname: `/movie/${id}`,
              state: {
                year,
                title,
                summary,
                poster,
                genres,
              },
            }}
            className="btn btn-primary"
          >
            Go Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
