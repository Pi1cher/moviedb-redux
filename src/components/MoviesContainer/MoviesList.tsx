import {FC, PropsWithChildren, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovie, IPrevNext} from "../../interfaces";
import {movieService} from "../../services";
import {MoviesListCard} from "./MoviesListCard";
import css from './MovieList.module.css'
import {PageSelector} from "../PaginationContainer";
import {Genres} from "../GenreContainer";
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {

}

const MoviesList: FC<IProps> = () => {

    const {query} = useAppContext();


    const [movies, setMovies] = useState<IMovie[]>([]);
    const [prevNext, setPrevNext] = useState<IPrevNext>({prev: null, next: null});



    useEffect(() => {
        movieService.getAll(query.get('page'), query.get('with_genres')).then(({data}) => {
            setMovies(data.results)
            if (data.page === 1) {
                setPrevNext({prev: null, next: data.page + 1})
            } else if (data.total_pages === data.page) {
                setPrevNext({prev: data.page - 1, next: null})
            } else {
                setPrevNext({prev: data.page - 1, next: data.page + 1})

            }
            window.scrollTo(0, 0)
        })
    }, [query.get('page'), query.get('with_genres')])

    return (
        <div>
            <Genres/>
            <div className={css.MovieList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <PageSelector prevNext={prevNext}/>
        </div>
    );
};

export {MoviesList};