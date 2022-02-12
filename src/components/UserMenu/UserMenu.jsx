import React from "react";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/authSelectors";
import authOperations from "../../redux/authOperations";



const UserMenu = () => { 
    const name = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();
    return (
        <div>
            <span>Welcome, {name}</span>
            <button type="button" onClick={()=>dispatch(authOperations.logout())}>Log Out</button>
        </div>
    )
}

export default UserMenu;