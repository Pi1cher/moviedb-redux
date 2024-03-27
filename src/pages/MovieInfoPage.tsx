import {MovieInfo} from "../components";
import css from './MoviesInfoPage.module.css'
import {useAppSelector} from "../hooks";


const MovieInfoPage = () => {

    const {theme} = useAppSelector(state => state.theme);


    return (
        <div className={theme ? css.MoviesInfoPage : css.dark}>
            <MovieInfo/>
        </div>
    );
};

export {MovieInfoPage};