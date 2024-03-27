import {FC, PropsWithChildren, useEffect} from 'react';


import {MoviesListCard} from "./MoviesListCard";
import css from './MovieList.module.css'
import {PageSelector} from "../PaginationContainer";
import {Genres} from "../GenreContainer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieListActions} from "../../store";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {

    const {results: movies} = useAppSelector(state => state.movieList);

    const dispatch = useAppDispatch();

    const [query, ] = useSearchParams({page:'1'})
    const page = query.get('page');
    const with_genres = query.get('with_genres');


    useEffect(() => {
        dispatch(movieListActions.getAll({page, with_genres}))
    }, [page, with_genres])

    return (
        <div>
            <Genres/>
            <div className={css.MovieList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <PageSelector/>
        </div>
    );
};

export {MoviesList};