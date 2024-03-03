import {MovieInfo} from "../components";
import css from './MoviesInfoPage.module.css'
import {useAppContext} from "../hooks";

const MovieInfoPage = () => {

    const {theme} = useAppContext();

    return (
        <div className={theme ? css.MoviesInfoPage : css.dark}>
            <MovieInfo/>
        </div>
    );
};

export {MovieInfoPage};