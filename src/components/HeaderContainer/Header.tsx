import css from './Header.module.css'
import {SearchBar} from "../SearchContainer";
import {MainPageButton} from "../NavigateButtonsContainer";
const Header = () => {
    return (
        <div className={css.Header}>
            <MainPageButton/>
            <SearchBar/>
        </div>
    );
};

export {Header};