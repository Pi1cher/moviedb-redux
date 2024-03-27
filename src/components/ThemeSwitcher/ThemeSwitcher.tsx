import React, {FC, PropsWithChildren} from 'react';
import {Switch} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../store";


interface IProps extends PropsWithChildren {

}

const ThemeSwitcher: FC<IProps> = () => {

    const {theme} = useAppSelector(state => state.theme);

    const dispatch = useAppDispatch();

    return (
        <div>
            <Switch checked={theme}  onChange={(e, c) => dispatch(themeActions.toggleTheme(c))}/>
        </div>
    );
};

export {ThemeSwitcher};