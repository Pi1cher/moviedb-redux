import {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import css from './BackButton.module.css'

interface IProps extends PropsWithChildren {

}

const BackButton: FC<IProps> = () => {

    const navigate = useNavigate();

    return (
        <div className={css.BackButton}>
            <button onClick={() => navigate(-1)}> &lsaquo; Back</button>
        </div>
    );
};

export {BackButton};