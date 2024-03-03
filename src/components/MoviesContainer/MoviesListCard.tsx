import {FC, PropsWithChildren} from 'react';

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterContainer";
import css from './MovieListCard.module.css'
import {Link} from "react-router-dom";
import {StarsRating} from "../StarsRatingContainer";

interface IProps extends PropsWithChildren {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {

    const {id,title,vote_average,poster_path} = movie;


    return (
        <div className={css.MovieListCard}>
            <Link to={id.toString()}>
                <PosterPreview poster_path={poster_path} title={title}/>
                <div>{title}</div>
                <StarsRating rating={vote_average} size={'medium'}/>
            </Link>
        </div>
    );
};

export {MoviesListCard};