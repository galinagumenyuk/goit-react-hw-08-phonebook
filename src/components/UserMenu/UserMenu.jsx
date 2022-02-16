import React from "react";
import { useSelector, useDispatch } from "react-redux";
import authSelectors from "../../redux/authSelectors";
import authOperations from "../../redux/authOperations";
import s from "./UserMenu.module.css";



const UserMenu = () => { 
    const name = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();
    return (
        <div>
            <span className={s.text}>Welcome, {name}</span>
            <button type="button" onClick={() => dispatch(authOperations.logout())} className={s.button}>Log Out</button>
        </div>
    )
}

export default UserMenu;