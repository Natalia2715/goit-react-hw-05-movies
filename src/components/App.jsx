import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './Loader/Loader';

import Navigation from '../components/Navigation/Navigation';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies.jsx'));
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('../pages/Cast/Cast.jsx'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
