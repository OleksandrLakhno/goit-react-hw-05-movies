import { useState } from "react";
import { PropTypes } from "prop-types";
import toast from "react-hot-toast";
import s from "./SearchForm.module.css";

const SearchForm = ({onSubmit}) => {
    const [movieName, setMovieName] = useState('');

    const handleChange = event => {
        setMovieName(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (movieName.trim() === '') {
            return toast.error('Your search is empty');
        }
        onSubmit(movieName);
        setMovieName('');
    };

    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit}>
                <input className={s.input} type="text" name="query" autoComplete="off" autoFocus placeholder="Enter the title of the film" value={movieName} onChange={handleChange}/>
                <button className={s.btn} type="submit">Search</button>
            </form>
        </div>
    )
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
 export default SearchForm;