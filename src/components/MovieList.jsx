import MovieCard from "./MovieCard";
import '../css/movieList.css'

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="font-bold text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll movieList ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
