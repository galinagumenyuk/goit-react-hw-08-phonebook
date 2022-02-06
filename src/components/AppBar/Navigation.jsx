import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={s.nav }>
            <NavLink to='/' className={navData => navData.isActive ? s.active : s.link}>Home</NavLink>
            <NavLink to='/contacts' className={navData => navData.isActive ? s.active : s.link}>Contacts</NavLink>
    </nav>
    )}

export default Navigation;