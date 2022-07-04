import { useParams, useLocation, NavLink, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/API";
import toast from "react-hot-toast";
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Loader from "../Loader";
import s from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
  const movieId = useParams();
  const idMovie = Object.values(movieId)[0];
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const goBackURL = location?.state?.from ?? '/';

  // console.log(movieId);
  // console.log(getMovieDetails(movieId));

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const movie = await getMovieDetails(idMovie);
        setMovie(movie);
      } catch (error) {
        toast.error("Movie is not found");
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [idMovie]);

  const defaultPoster = `https://i.pinimg.com/200x/e4/71/1e/fea9bd6cc64d250f3b3bb2ecec82173d.jpg`;

  return (
    <div>
      {loading && <Loader />}
      <div className={s.arrowLinkBox}>
        <FaArrowAltCircleLeft className={s.arrowLink} />
        <Link to={goBackURL}>Go back</Link>
      </div>
      {movie && 
      <div>
        <div className={s.container}>
            <img className={s.poster} src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : defaultPoster} alt={movie.title}/>
            <ul className={s.list}>
              <li className={s.item}>
                <h2 className={s.title}>{movie.title}</h2>
                <p>Rating:{movie.vote_average ? movie.vote_average : "No rating for that movie"}</p>
              </li>
              <li className={s.item}>
                <h3 className={s.title}>Overview</h3>
                {movie.overview ? (<p>{movie.overview}</p>) : (<p>There is no overview for that movie</p>)}
              </li>
              <li className={s.item}>
                <h3 className={s.title}>Genres</h3>
                <div className={s.genreBox}>{movie.genres.length > 0 ? (<p>{movie.genres.map((genre) => genre.name).join(", ")}</p>) : (<p>No genres found</p>)}</div>
              </li>
            </ul>
        </div>
        <div className={s.movieInfoBox}>
            <p className={s.movieInfo}>Additional information</p>
            <ul>
              <li className={s.movieInfoLink}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? s.routeLinkActive : s.routeLink
                  }
                  to={`/movies/${movie.id}/cast`}
                  state={{ from: goBackURL }}
                >
                  Cast
                </NavLink>
              </li>
              <li className={s.movieInfoLink}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? s.routeLinkActive : s.routeLink
                  }
                  to={`/movies/${movie.id}/reviews`}
                  state={{ from: goBackURL }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
        </div>
      </div>
      }
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
