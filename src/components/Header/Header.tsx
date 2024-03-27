import css from './Header.module.css'
import {SearchBar} from "../SearchContainer";
import {MainPageButton} from "../NavigateButtons";
import {ThemeSwitcher} from "../ThemeSwitcher";
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