import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { getMoviesByQuery } from 'API';
import s from './Movies.module.css';

const Movies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchQuery, setSearchQuery] = useState(query ?? '');

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchFilms() {
      setLoading(true);
      try {
        const response = await getMoviesByQuery(query);
        setData(response.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, [query, setSearchParams]);

  const onChangeInput = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({
      query: searchQuery.toLowerCase().trim(),
    });
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={onChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          value={searchQuery}
        />
        <button type="submit">Search</button>
      </form>
      {loading && (
        <ThreeCircles
          color="red"
          outerCircleColor="blue"
          middleCircleColor="red"
          innerCircleColor="grey"
        />
      )}
      <ul>
        {data.length > 0 &&
          data.map(({ original_title, name, id }) => (
            <li key={id} className={s.ListItem}>
              <Link to={`./${id}`} state={{ from: location }}>
                {original_title ?? name}
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Movies;
