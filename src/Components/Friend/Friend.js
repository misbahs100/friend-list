import React, { useState } from 'react';
import './Friend.css';
// import friendsData from '../../../friendsData';
import friendsData from '../../friendsData/friendsData.json';
import FriendList from '../FriendList/FriendList';
import FriendCart from '../FriendCart/FriendCart';
const Friend = () => {

    const [friends, setFriends] = useState(friendsData);
    const [cart, setCart] = useState([]);
    // console.log(friends); 
    const handleButton = (friend) =>{
        console.log("button clicked");
        const newCart = [...cart, friend];
        setCart(newCart);

    }

    return (
        <div className="friend-container">
            <div className="friends-list">
                {
                    friends.map(friend => <FriendList friend={friend} handleButton={handleButton} key={friend.id}></FriendList>)
                }
            </div>
            <div className="friend-cart">
                <FriendCart cart={cart}></FriendCart>
            </div>
        </div>
    );
};

export default Friend;