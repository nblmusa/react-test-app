import React, {useEffect} from "react";
import UserItem from "./UserItem";
import {useDispatch, useSelector} from "react-redux";
import {IUsersState} from "../redux/reducers/usersReducer";
import {getRandomUsers} from "../services/userService";
import {setUsers, sortUsers} from "../redux/actions/usersAction";

const UserList: React.FC = (): JSX.Element => {

    let users = useSelector((state: { allUsers: IUsersState }) => state.allUsers.filteredUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllUsers().then();
    }, []);

    const getAllUsers = async () => {
        const result: any = await getRandomUsers(20);
        dispatch(setUsers(result.data.results));
    }

    const sortByField = (fieldName: string) => {
        dispatch(sortUsers(fieldName));
    }

    return (
        <table className="table">
            <thead>
            <tr>
                <th onClick={() => sortByField('location.city')}>City</th>
                <th onClick={() => sortByField('location.state')}>State</th>
                <th onClick={() => sortByField('location.country')}>Country</th>
                <th onClick={() => sortByField('location.postcode')}>Post Code</th>
                <th onClick={() => sortByField('location.street.number')}>Number</th>
                <th onClick={() => sortByField('location.street.name')}>Name</th>
                <th onClick={() => sortByField('location.coordinates.latitude')}>Latitude</th>
                <th onClick={() => sortByField('location.coordinates.longitude')}>Longitude</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user: any, index: number) =>
                <UserItem key={index} user={user}/>
            )}
            </tbody>
        </table>
    )
}

export default UserList;
