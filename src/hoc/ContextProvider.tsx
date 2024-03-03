import {createContext, FC, PropsWithChildren} from 'react';
import {SetURLSearchParams, useSearchParams} from "react-router-dom";

const Context = createContext<{query:URLSearchParams, setQuery:SetURLSearchParams}>(null)

interface IProps extends PropsWithChildren {

}
const ContextProvider: FC<IProps> = ({children}) => {

    const [query, setQuery] = useSearchParams({page: '1'});


    return (
        <Context.Provider value={{query, setQuery}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};