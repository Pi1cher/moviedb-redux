import {MovieInfo} from "../components";
import css from './MoviesInfoPage.module.css'

const MovieInfoPage = () => {
    return (
        <div className={css.MoviesInfoPage}>
            <MovieInfo/>
        </div>
    );
};

export {MovieInfoPage};