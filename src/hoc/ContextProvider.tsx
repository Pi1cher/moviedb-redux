import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {SetURLSearchParams, useSearchParams} from "react-router-dom";

const Context = createContext<{
    query:URLSearchParams, setQuery:SetURLSearchParams,
    theme: boolean, setTheme:React.Dispatch<boolean>
}>(null)

interface IProps extends PropsWithChildren {

}
const ContextProvider: FC<IProps> = ({children}) => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const [theme, setTheme] = useState<boolean>(null);






    return (
        <Context.Provider value={{query, setQuery, theme, setTheme}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};