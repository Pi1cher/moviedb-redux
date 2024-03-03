import React, {FC, PropsWithChildren} from 'react';
import {Switch} from "@mui/material";

import {useAppContext} from "../../hooks";


interface IProps extends PropsWithChildren {

}

const ThemeSwitcher: FC<IProps> = () => {

    const {setTheme} = useAppContext();





    return (
        <div>
            <Switch  onChange={(e, c) => setTheme(c)}/>
        </div>
    );
};

export {ThemeSwitcher};