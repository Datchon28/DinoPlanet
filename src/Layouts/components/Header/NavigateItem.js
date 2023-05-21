import classNames from "classnames/bind";
import style from './Header.scss'

import { NavLink } from "react-router-dom";

const st = classNames.bind(style)

export default function NavigateItem({ to, title }) {
    return (
        <NavLink onClick={() => window.scrollTo({ top : '0', behavior: 'smooth'})} to={to} className={(nav) => st('nav-link' , { active: nav.isActive })}>
            <div className={st('title')}>
                <h3>{title}</h3>
            </div>
        </NavLink>
    )
}