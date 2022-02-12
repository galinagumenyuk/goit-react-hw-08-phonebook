import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import  authSelectors  from "../../redux/authSelectors";

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <div >
            <nav className={s.nav}>
                <div>
                <NavLink to='/' className={navData => navData.isActive ? s.active : s.link}>Home</NavLink>
                <NavLink to='/contacts' className={navData => navData.isActive ? s.active : s.link}>Contacts</NavLink>
                </div>
                {isLoggedIn ? <UserMenu className={s.userMenu}/> : <div>
                <NavLink to='/login' className={navData => navData.isActive ? s.active : s.link}>Log In</NavLink>
                <NavLink to='/register' className={navData => navData.isActive ? s.active : s.link}>Sign Up</NavLink>
                </div>
                }
               
                
            </nav>
        
        </div>
    )}

export default Navigation;