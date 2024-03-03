import {FC, PropsWithChildren, useEffect, useState} from 'react';


import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterContainer";
import {useLoaderData} from "react-router-dom";
import {GenreBadge} from "../GenreContainer";
import css from './MovieInfo.module.css'
import {BackButton} from "../NavigateButtonsContainer";

interface IProps extends PropsWithChildren {

}

const MovieInfo: FC<IProps> = () => {

    const movie= useLoaderData() as { data:IMovie };
    window.scrollTo(0, 0)

    const {title,overview,genres,poster_path, vote_average, tagline, runtime} = movie.data;

    return (
        <div className={css.MovieInfo}>
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
                <div>{vote_average}</div>
            </div>
        </div>
    );
};

export {MovieInfo};