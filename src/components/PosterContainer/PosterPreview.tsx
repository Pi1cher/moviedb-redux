import {EventHandler, FC, PropsWithChildren} from 'react';

import css from './PosterPreview.module.css'
interface IProps extends PropsWithChildren {
    poster_path:string;
    title:string
}

const PosterPreview: FC<IProps> = ({poster_path, title}) => {


    const errorHandler:EventHandler<any> = (event) => {
            event.target.src = 'https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc='
            event.onerror = null
    };

    return (
        <div className={css.PosterPreview} >
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} onError={errorHandler}/>
        </div>
    );
};

export {PosterPreview};