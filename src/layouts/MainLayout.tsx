import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {ContextProvider} from "../hoc";
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <ContextProvider>
            <div className={css.MainLayout}>
                <Header/>
                <Outlet/>
            </div>
        </ContextProvider>
    );
};

export {MainLayout};