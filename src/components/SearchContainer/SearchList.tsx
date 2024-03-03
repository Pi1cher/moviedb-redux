import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {useAppContext} from "../../hooks";
import {IMovie, IPrevNext} from "../../interfaces";
import css from "../MoviesContainer/MovieList.module.css";
import {MoviesListCard} from "../MoviesContainer";
import {PageSelector} from "../PaginationContainer";
import {searchService} from "../../services";

interface IProps extends PropsWithChildren {

}

const SearchList: FC<IProps> = () => {

    const {query, theme} = useAppContext();

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [prevNext, setPrevNext] = useState<IPrevNext>({prev: null, next: null});


    useEffect(() => {
        searchService.searchByQuery(query.get('page'), query.get('query')).then(({data}) => {
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
    }, [query.get('query'), query.get('page')])


    return (
        <div>
            <h1 className={theme ? css.MovieList : css.dark}>
                Search result "{query.get('query')}"
            </h1>

            <div className={css.MovieList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <PageSelector prevNext={prevNext}/>
        </div>
    );
};

export {SearchList};