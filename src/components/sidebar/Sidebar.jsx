import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo2.jpg"

const Sidebar = () =>{
    const [toggle, showMenu] = useState (false);
    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                
                <a href="#" className="nav__logo">
                    <h1>P</h1>  
                </a>
                
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">

                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                <i class="fa-solid fa-house"></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                <i class="fa-solid fa-user-astronaut"></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#service" className="nav__link">
                                <i class="fa-solid fa-person-walking-luggage"></i>
                                </a>
                            </li>

                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                <i class="fa-duotone fa-solid fa-handshake"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className="copyright">&copy; 2024.</span>
                </div>
            </aside>

            <div className= {toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>
    )
}

export default Sidebar