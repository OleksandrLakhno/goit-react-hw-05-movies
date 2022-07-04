import { useState, useEffect } from "react";
import { fetchMovieByName } from "components/services/API";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "components/Loader";
import SearchForm from "components/SearchForm";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const currentItem = searchParams.get('query');

    async function searchMovie (movieName) {
        if (!movieName) {
            return
        }
        setLoading(true);
        try {
            const movies = await fetchMovieByName(movieName);
            if (movies.length === 0) {
                toast.error('Movie not found');
                return;
            }
            setMovies(movies);
        } catch(error) {
            toast.error('Movie not found')
        } finally {
            setLoading(false);
        }
    };

    const formSearchSubmit = (movieName) => {
        setSearchParams({query: movieName})
        searchMovie(movieName);
    };

    useEffect(() => {
        if (currentItem) {
            searchMovie(currentItem);
        }
    }, [currentItem]);

    return (
        <div>
            <SearchForm onSubmit={formSearchSubmit} />
            {loading && <Loader />}
            {movies && <ul className={s.list}>
                {movies.map((movie => <li className={s.item} key={movie.id}>
                    <Link className={s.link} to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
                </li>))}
                </ul>}
        </div>
    )
};

export default MoviesPage;