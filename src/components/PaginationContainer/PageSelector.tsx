import {FC, PropsWithChildren} from 'react';

import css from './PageSelector.module.css'

import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";


interface IProps extends PropsWithChildren {

}

const PageSelector: FC<IProps> = () => {

    const {prev: prevPage, next: nextPage} = useAppSelector(state => state.movieList);

    const [query, setQuery] = useSearchParams();



    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') -1).toString())
            return prev
        })
    }
    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString())
            return prev
        })
    }

    return (
        <div className={css.PageSelector}>

                <button className={css.prev} disabled={!prevPage} onClick={prev}>&lsaquo;</button>
                <p>{query.get('page')}</p>
                <button className={css.next} disabled={!nextPage} onClick={next}>&rsaquo;</button>

        </div>
    );
};

export {PageSelector};