import {FC, PropsWithChildren} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";


import css from './SearchBar.module.css'


interface IProps extends PropsWithChildren {

}


const SearchBar: FC<IProps> = () => {

    const {register, handleSubmit, reset} = useForm();

    const [ , setQuery] = useSearchParams();
    const navigate = useNavigate();

    const save:SubmitHandler<any> = (request:{searchRequest:string}) => {
        setQuery (prev => {
            prev.set('query', request.searchRequest);
            navigate('/movies')
            reset()
            return prev;
        })

    };

    return (
        <div className={css.SearchBar}>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'Type a movie...'} {...register('searchRequest')}/>
                <button>Search</button>
            </form>
            
        </div>
    );
};

export {SearchBar};