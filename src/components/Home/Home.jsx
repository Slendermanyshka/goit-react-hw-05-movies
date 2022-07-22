import s from './Home.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { GetFilms } from 'API';

export const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilms() {
      setLoading(true);
      try {
        const response = await GetFilms();
        setData(response);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, []);

  return (
    <section>
      {loading && (
        <ThreeCircles
          color="red"
          outerCircleColor="blue"
          middleCircleColor="red"
          innerCircleColor="grey"
        />
      )}
      <ul>
        {data &&
          data.results.map(({ original_title, name, id }) => (
            <li key={id} className={s.ListItem}>
              <Link to={`./movies/${id}`}>{original_title ?? name}</Link>
            </li>
          ))}
      </ul>
    </section>
  );
};
