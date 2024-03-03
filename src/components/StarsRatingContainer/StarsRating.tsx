import {FC, PropsWithChildren} from 'react';
import {Rating} from "@mui/material";


interface IProps extends PropsWithChildren {
    rating: number
    size: "large" | "medium"
}

const StarsRating: FC<IProps> = ({rating, size}) => {
    return (
        <div>
            <Rating name="read-only" value={rating/2} readOnly  precision={0.1} size={size}/>
        </div>
    );
};

export {StarsRating};