import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendCard from './FriendCard';

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(response => {
                setFriends(response.data)
            })
            .catch(error => console.log(error.response));
    })

    return(
        <div className="friendsContainer">
            <div>
                {friends.map((friend, key) => (
                    <FriendCard key={key} friend={friend} />
                ))}
            </div>

        </div>
    )
}

export default FriendsList;