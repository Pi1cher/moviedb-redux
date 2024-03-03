import {FC, PropsWithChildren, useEffect, useState} from 'react';

import {GenreBadge} from "./GenreBadge";
import {genreService} from "../../services";
import {IGenre} from "../../interfaces";
import css from './Genres.module.css'
import {SetURLSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const Genres: FC<IProps> = () => {

    const [genres, setGenres] = useState<IGenre[]>([]);


    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data.genres))
    }, [])

    return (
        <div className={css.Genres}>
            {genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};