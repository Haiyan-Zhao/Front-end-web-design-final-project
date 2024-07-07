import { useState } from "react";
import "./globalNav.css";
import Button from "./Button";
import menu from "./menu";


function GlobalNav({ className, setPage }) {

    const [showMenu, setShowMenu] = useState(false);

    function changePage(e) {
        e.preventDefault();
        window.history.pushState(null, '', e.target.pathname);
        setPage(e.target.pathname);
        setShowMenu(false);
    };


    const listHtml = menu.map(item => {
        return (
            <li key={item.name} className="global-nav__item">
                <a
                    className="global-nav__link"
                    href={item.path}
                    onClick={changePage}
                >{item.name}
                </a>
            </li>
        );
    });


    const showClass = showMenu ? '' : 'global-nav__list--collapsed';

    return (
        <nav className={`global-nav ${className}`}>

            <Button className="global-nav__toggle" type="button" visual="button"
                onClick={() => setShowMenu(!showMenu)}
            ><div className="gg-menu"></div>
            </Button>

            <div className="global-nav__menu">
                <ul className={`global-nav__list ${showClass} `}>
                    {listHtml}
                </ul>
            </div>
        </nav>
    );

}

export default GlobalNav;


