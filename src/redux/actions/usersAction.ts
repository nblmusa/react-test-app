import actionTypes from "../constant/actionTypes";

const setUsers = (result: any) => {
    return {
        type: actionTypes.SET_USERS,
        payload: result
    }
}

const sortUsers = (sortField: string) => {
    return {
        type: actionTypes.SORT_USERS,
        payload: sortField
    }
}

const filterUsers = (searchQuery: string) => {
    return {
        type: actionTypes.FILTER_USERS,
        payload: searchQuery
    }
}

export {setUsers, sortUsers, filterUsers};
