import React from 'react';
import './FriendList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const FriendList = (props) => {
    // console.log(props.friend) 
    const friend = props.friend;
    const handleButton = props.handleButton;
    return (
        <div className="friend-list">
            <div>
                <img src={friend.image} alt="" />
            </div>
            <div>
                <h3>Name: {friend.name}</h3>
                <h5>Salary: ${friend.salary}</h5>
                <p>Email: {friend.email}</p>
                <p>Phone No: {friend.phone}</p>
                <button className="friend-button" onClick={() => handleButton(friend)}>
                  <FontAwesomeIcon icon={faUserFriends} /> Friendly Button</button>
            </div>

        </div>

    );
};

export default FriendList;