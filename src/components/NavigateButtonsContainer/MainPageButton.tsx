import {FC, PropsWithChildren} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";

import css from './MainPageButton.module.css'
import {log} from "util";


interface IProps extends PropsWithChildren {

}

const MainPageButton: FC<IProps> = () => {

    const navigate = useNavigate();

    const location = useLocation();


    return (
        <div className={css.MainPageButton}>
            <button disabled={location.pathname=='/movies' && location.search=='?page=1' } onClick={() => navigate('/movies?page=1')} >Main Page</button>
        </div>
    );
};

export {MainPageButton};