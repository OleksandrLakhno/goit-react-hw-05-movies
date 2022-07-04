import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';
import { Audio } from 'react-loader-spinner';

function Loader() {
    return (
    <div className={s.container}>
    <Audio
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
        />
        </div>
)
};

export default Loader;