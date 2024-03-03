import {FC, PropsWithChildren} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import css from './PageSelector.module.css'
import {IPrevNext} from "../../interfaces";
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren {
    prevNext: IPrevNext;
}

const PageSelector: FC<IProps> = ({prevNext}) => {

    const {query, setQuery} = useAppContext();



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

                <button className={css.prev} disabled={!prevNext.prev} onClick={prev}>&lsaquo;</button>
                <p>{query.get('page')}</p>
                <button className={css.next} disabled={!prevNext.next} onClick={next}>&rsaquo;</button>

        </div>
    );
};

export {PageSelector};