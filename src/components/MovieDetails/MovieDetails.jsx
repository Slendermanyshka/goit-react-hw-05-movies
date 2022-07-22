import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from 'API';
import Cast from '../Cast';
import Reviews from '../Reviews';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import placeHolder from '../../data/no-image.jpg';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    async function fetchFilm() {
      setLoading(true);
      try {
        const getFilmDetails = await getMovieById(movieId);
        setFilm(getFilmDetails);
        setGenres(getFilmDetails.genres);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFilm();
  }, [movieId]);

  const { original_title, vote_average, overview, poster_path } = film;
  return (
    <main className={s.cardContainer}>
      {loading && (
        <ThreeCircles
          color="red"
          outerCircleColor="blue"
          middleCircleColor="red"
          innerCircleColor="grey"
        />
      )}
      <Link to={backLink}> Go back </Link>
      {film && (
        <section className={s.Container}>
          <div className={s.imageThumb}>
            <img
              className={s.Image}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : placeHolder
              }
              alt={original_title}
            />
          </div>
          <div>
            <h2> {original_title}</h2>
            <p> User Score: {vote_average * 10}%</p>
            {film && (
              <div>
                <h3>Genres</h3>
                <ul className={s.genresList}>
                  {genres.map(genre => (
                    <li key={genre.id} className={s.movieGenres}>
                      {genre.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h3>Overview</h3>
              <p> {overview}</p>
            </div>
          </div>
        </section>
      )}
      <section className={s.section}>
        <div className={s.information}>
          <h3>Additional information</h3>

          <Link to={`cast`} movieid={movieId} state={{ from: backLink }}>
            Cast
          </Link>
          <Link to={`reviews`} movieid={movieId} state={{ from: backLink }}>
            Reviews
          </Link>
        </div>
      </section>
      <Suspense fallback={((<Cast />), (<Reviews />))}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
