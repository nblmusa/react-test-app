import React, {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {filterUsers} from "../redux/actions/usersAction";

const SearchFilter: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-center align-items-center p-4">
            <input
                className="form-control w-auto"
                placeholder="Search"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    dispatch(filterUsers(e.target.value))
                }}
            />
        </div>
    );
}

export default SearchFilter;
