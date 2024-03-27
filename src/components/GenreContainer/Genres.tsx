import {FC, PropsWithChildren, useEffect} from 'react';

import {GenreBadge} from "./GenreBadge";
import css from './Genres.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresActions} from "../../store";

interface IProps extends PropsWithChildren {

}

const Genres: FC<IProps> = () => {

    const {genres} = useAppSelector(state => state.genres);
    console.log(genres)
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(genresActions.getAll())
    }, [dispatch])

    return (
        <div className={css.Genres}>
            {genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};