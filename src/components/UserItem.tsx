import React from "react";

const UserItem: React.FC<any> = ({user}) => {
    const {location} = user;

    return (
        <tr>
            <td>{location.city}</td>
            <td>{location.state}</td>
            <td>{location.country}</td>
            <td>{location.postcode}</td>
            <td>{location.street.number}</td>
            <td>{location.street.name}</td>
            <td>{location.coordinates.latitude}</td>
            <td>{location.coordinates.longitude}</td>
        </tr>
    )
}

export default UserItem;
