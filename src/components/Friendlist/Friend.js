import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './Friend.css';

const Friend = (props) => {
    
    const {name, img, price, phone, email,gender} = props.friend;
    const handleAddFriend = props.handleAddFriend;
    return (
        <div className="content">
            
            <div>
                <img className="imgStyle" src={img} alt=""/>
            </div>
            <div className="text-container">
            
                <h1>Name : {name}</h1>
                <p>Gender : {gender}</p>
                <p>Email : {email}</p>
                <p>Yearly Encomes : {price}</p>
                <h3>Phone Number : {phone}</h3>
                <button onClick={() => handleAddFriend(props.friend)} className="btn"> <FontAwesomeIcon icon={faPlus} />   add friend</button>

            </div>
        
        
        </div>
    );
};

export default Friend;