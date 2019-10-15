import React from 'react';

const FriendCard = props => {
    return (
        <div className="cardContainer">
            <h1>{props.friend.name}</h1>
            <h2>{props.friend.age}</h2>
            <h2>{props.friend.email}</h2>


        </div>
    )
}

export default FriendCard;