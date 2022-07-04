import s from './Container.module.css';

function Container({children}) {
    return (
        <div className={s.box}>
{children}
        </div>
    )
};

export default Container;