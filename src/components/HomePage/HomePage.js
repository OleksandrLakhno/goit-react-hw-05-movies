import { fetchMoviesInTrend } from "../services/API";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "components/Loader";
import s from "./HomePage.module.css";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const moviesInTrend = async() => {
            setLoading(true);
            try {
                const trendMovies = await fetchMoviesInTrend();
                setMovies(trendMovies);
            } catch(error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        }
        moviesInTrend();
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            {loading && <Loader />}
            {!error && <ul className={s.list}>
                {movies.map((movie => <li className={s.item} key={movie.id}>
                    <Link className={s.link} to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>))}
                </ul>}
        </div>
    )
}

export default HomePage;