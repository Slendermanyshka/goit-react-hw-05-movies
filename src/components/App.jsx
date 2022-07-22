import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navigate from './Navigate';

const Home = lazy(() =>
  import('../components/Home').then(module => ({ default: module.Home }))
);
const Movies = lazy(() => import('./Movies/Movies'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MovieDetails = lazy(() => import('../components/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));
const NotFoundPage = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Navigate />
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId/" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
