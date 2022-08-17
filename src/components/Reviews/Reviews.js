import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getMovieReviews } from "components/services/API";
import s from "./Reviews.module.css";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
        
    useEffect(() => {
        async function fetchReviews() {
            try {
                const reviews = await getMovieReviews(movieId);
                setReviews(reviews);
            } catch (error) {
                toast.error("Reviews no found");
            }
        };
        fetchReviews();
    }, [movieId]);

    return (
        <div>
            {reviews && <ul className={s.list}>
                {reviews.results.length > 0 ? reviews.results.map(({ author, content }) => <li className={s.item} key={author}>
                    <h3 className={s.author}>Author: {author}</h3>
                    <p>{content}</p>
                </li>) : <p>We don't have any reviews for this movie</p>}
                
            </ul>}
        </div>
    );
    };

    export default Reviews;