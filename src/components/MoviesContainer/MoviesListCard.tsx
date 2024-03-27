import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../Poster";
import css from './MovieListCard.module.css'
import {Link} from "react-router-dom";
import {StarsRating} from "../StarsRating";
import {useAppSelector} from "../../hooks";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {

    const {theme} = useAppSelector(state => state.theme);


    const {id,title,vote_average,poster_path} = movie;


    return (
        <div className={css.MovieListCard}>
            <Link to={id.toString()}>
                <PosterPreview poster_path={poster_path} title={title}/>
                <p className={theme ? css.MovieListCard : css.dark}>{title}</p>
                <StarsRating rating={vote_average} size={'medium'}/>
            </Link>
        </div>
    );
};

export {MoviesListCard};