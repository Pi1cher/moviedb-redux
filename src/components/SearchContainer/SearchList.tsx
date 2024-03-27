import {FC, PropsWithChildren, useEffect} from 'react';
import css from "../MoviesContainer/MovieList.module.css";
import {MoviesListCard} from "../MoviesContainer";
import {PageSelector} from "../PaginationContainer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {movieListActions} from "../../store";

interface IProps extends PropsWithChildren {

}

const SearchList: FC<IProps> = () => {

    const {theme} = useAppSelector(state => state.theme);
    const {results:movies} = useAppSelector(state => state.movieList);
    const [query, ] = useSearchParams({page:'1'});
    const page = query.get('page');
    const searchQuery = query.get('query');


    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(movieListActions.searchByQuery({page, query:searchQuery}))
    }, [page, searchQuery, dispatch])

    return (
        <div>
            <h1 className={theme ? css.MovieList : css.dark}>
                Search result "{searchQuery}"
            </h1>

            <div className={css.MovieList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <PageSelector/>
        </div>
    );
};

export {SearchList};