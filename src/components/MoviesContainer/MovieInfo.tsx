import {FC, PropsWithChildren, useEffect} from 'react';

import {PosterPreview} from "../Poster";
import {useParams} from "react-router-dom";
import {GenreBadge} from "../GenreContainer";
import css from './MovieInfo.module.css'
import {BackButton} from "../NavigateButtons";
import {StarsRating} from "../StarsRating";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieInfoActions} from "../../store";

interface IProps extends PropsWithChildren {

}

const MovieInfo: FC<IProps> = () => {

    const {theme} = useAppSelector(state => state.theme);
    const {movieDetails} = useAppSelector(state => state.movieInfo);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieInfoActions.byId({id: parseInt(id)}))
    }, [dispatch, id])

    window.scrollTo(0, 0)

    const {title,overview,genres,poster_path, vote_average, tagline, runtime} = movieDetails;

    return (

        <div className={theme ? css.MovieInfo : css.dark}>
            <BackButton/>
            <PosterPreview poster_path={poster_path} title={title}/>
            <div className={css.Genres}>{genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}</div>
            <div>
                <h1>{title}</h1>
                <div>{tagline}</div>
                <hr/>
                <h3>Runtime: {runtime} mins</h3>
                <hr/>
                <h3>Description:</h3>
                <p>{overview}</p>
                <StarsRating size={'large'} rating={vote_average}/>
            </div>
        </div>
    );
};

export {MovieInfo};