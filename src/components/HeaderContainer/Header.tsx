import css from './Header.module.css'
import {SearchBar} from "../SearchContainer";
import {MainPageButton} from "../NavigateButtonsContainer";
import {ThemeSwitcher} from "../ThemeSwitcherContainer";
const Header = () => {
    return (
        <div className={css.Header}>
            <MainPageButton/>
            <SearchBar/>
            <ThemeSwitcher/>
        </div>
    );
};

export {Header};