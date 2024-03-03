import {FC, PropsWithChildren} from 'react';

import css from './PosterPreview.module.css'
interface IProps extends PropsWithChildren {
    poster_path:string;
    title:string
}

const PosterPreview: FC<IProps> = ({poster_path, title}) => {



    return (
        <div className={css.PosterPreview} >
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
        </div>
    );
};

export {PosterPreview};