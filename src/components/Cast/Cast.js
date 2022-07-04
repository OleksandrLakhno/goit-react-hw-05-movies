import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getMovieCredits } from "../services/API";
import defaultImage from "../images/defaultImage.jpg";
import s from "./Cast.module.css";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        async function fetchCast() {
            try {
                const cast = await getMovieCredits(movieId);
                setCast(cast);
            } catch (error) {
                toast.error('Cast not found')
            }
        }
        fetchCast();
    }, [movieId])

    const poster = `https://image.tmdb.org/t/p/w200`;

    return (
        <div>
            {cast && <ul className={s.list}>
                {
                cast.cast.length > 0 ? cast.cast.map(({id, profile_path, name, character}) => <li className={s.item} key={id}>
                    <img className={s.img} src={profile_path ? poster + profile_path : defaultImage} alt={name} />
                    <p className={s.text}>{name}</p>
                    <p>Character: {character ? character : 'Without character'}</p>
                </li>) : <p>Information not found</p>
            }
                </ul>}
        </div>
    )
};

export default Cast;