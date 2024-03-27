import {MoviesList} from "../components";
import {SearchList} from "../components/SearchContainer";
import css from './MoviesPage.module.css'
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../hooks";

const MoviesPage = () => {

    const [query, ] = useSearchParams();
    const {theme} = useAppSelector(state => state.theme);

    return (
        <div className={theme ? css.MoviesPage : css.dark}>

            {(query.get('query') == null) ? <MoviesList/>:<SearchList/>}
        </div>
    );
};

export {MoviesPage};