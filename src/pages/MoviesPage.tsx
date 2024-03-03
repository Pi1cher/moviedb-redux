import {MoviesList} from "../components";
import {useAppContext} from "../hooks";
import {SearchList} from "../components/SearchContainer";
import css from './MoviesPage.module.css'

const MoviesPage = () => {

    const {query} = useAppContext();

    return (
        <div className={css.MoviesPage}>
            {(query.get('query') == null) ? <MoviesList/>:<SearchList/>}
        </div>
    );
};

export {MoviesPage};