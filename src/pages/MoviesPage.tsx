import {MoviesList} from "../components";
import {useAppContext} from "../hooks";
import {SearchList} from "../components/SearchContainer";
import css from './MoviesPage.module.css'

const MoviesPage = () => {

    const {query, theme} = useAppContext();

    return (
        <div className={theme ? css.MoviesPage : css.dark}>

            {(query.get('query') == null) ? <MoviesList/>:<SearchList/>}
        </div>
    );
};

export {MoviesPage};