import './MovieList.scss';
import { MovieCard } from '../MovieCard';

export const MovieList = ({ movies }) => (
  <div className="movie" data-cy="MovieList">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);
