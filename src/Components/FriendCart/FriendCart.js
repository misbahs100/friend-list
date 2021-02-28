import React from 'react';

const FriendCart = (props) => {
    console.log(props)
    const cart = props.cart;
    let salary = 0;
    if(cart.length == 0) {salary = 0;}
    else {
        const len = cart.length; 
        salary = cart[len-1].salary;
    }
    
    // console.log(salary);
    // console.log(cart);
    const totalSalary = cart.reduce((salary, cart)=>salary+cart.salary , 0)
    return (
        <div>
            <h1>Friend cart</h1>
            <p>Friend selected: {cart.length}</p>
            <p>Salary: {salary}</p>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default FriendCart;