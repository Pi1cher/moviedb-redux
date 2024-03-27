import {FC, PropsWithChildren} from 'react';
import {Badge} from "reactstrap";

import {IGenre} from "../../interfaces";
import css from './GenreBadge.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
    genre: IGenre;
}

const GenreBadge: FC<IProps> = ({genre}) => {

    const [, setQuery] = useSearchParams();


    const {id, name} = genre;

    const navigate = useNavigate();

    return (
        <div className={css.GenderBadge}>
            <Badge pill onClick={() => setQuery(prev => {
                    navigate('/movies')
                    prev.set('with_genres', id.toString())
                    prev.set('page', '1')
                    return prev;
                }
            )}>{name}</Badge>
        </div>
    );
};

export {GenreBadge};