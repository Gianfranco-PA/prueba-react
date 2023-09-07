import Movie from "./movie";
import "@/commom/background.css"

const fecthMovieData = async () => {
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  return data.results;
};

export default async function ListMovies() {
  const movies = await fecthMovieData();

  return (
    <div className="container backcard">
      <div className="row justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-md-3 g-lg-4">
        {movies?.map((movie) => {
          return (
            <Movie
              key={movie.episode_id}
              id={movie.url.slice(-2,-1)}
              title={movie.title}
              release_date={movie.release_date}
              opening_crawl={movie.opening_crawl}
            />
          );
        })}
      </div>
    </div>
  );
}
