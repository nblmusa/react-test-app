import {AnyAction} from "redux";
import actionTypes from "../constant/actionTypes";
import {sortByKey} from "../../utils";

export interface IUsersState {
    users: any[],
    filteredUsers: any[],
    sortBy: { [key: string]: string }
}

const INITIAL_STATE: IUsersState = {
    users: [],
    filteredUsers: [],
    sortBy: {}
}

const usersReducer = (state: IUsersState = INITIAL_STATE, {type, payload}: AnyAction): IUsersState => {

    switch (type) {
        case actionTypes.SET_USERS:
            return {...state, filteredUsers: payload, users: payload};

        case actionTypes.SORT_USERS:
            const fieldName = payload;
            const sortBy = {[fieldName]: (!state.sortBy[fieldName] || state.sortBy[fieldName] === 'asc' ? 'desc' : 'asc')};

            return {
                ...state,
                sortBy,
                filteredUsers: state.users.slice().sort(sortByKey(fieldName, sortBy[fieldName]))
            }

        case actionTypes.FILTER_USERS:
            const searchQuery: string = payload;
            return {
                ...state,
                filteredUsers: state.users.filter(user => {
                    const rowValues = [
                        user.location.city,
                        user.location.state,
                        user.location.country,
                        user.location.postcode,
                        user.location.street.number,
                        user.location.street.name,
                        user.location.coordinates.latitude,
                        user.location.coordinates.longitude
                    ];

                    return rowValues.join(' ').toLowerCase().includes(searchQuery.toLowerCase());
                })
            }
        default:
            return state;
    }
}

export {usersReducer};
