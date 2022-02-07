import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={s.nav }>
            <NavLink to='/' className={navData => navData.isActive ? s.active : s.link}>Home</NavLink>
            <NavLink to='/contacts' className={navData => navData.isActive ? s.active : s.link}>Contacts</NavLink>
            <NavLink to='/login' className={navData => navData.isActive ? s.active : s.link}>Log In</NavLink>
            <NavLink to='/register' className={navData => navData.isActive ? s.active : s.link}>Sign Up</NavLink>
    </nav>
    )}

export default Navigation;