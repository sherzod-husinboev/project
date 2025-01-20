import React from "react";
import PlayBtn from "../assets/icons/PlayButtonIcon";
import LogoIcon from "../assets/icons/logoIcon";
function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__wrap'>
                    <div className='header__logo'>
                        <LogoIcon />
                    </div>
                    <nav className='header__nav'>
                        <a href='#' className='header__nav-item'>
                            Home
                        </a>
                        <a href='#' className='header__nav-item'>
                            Solution
                        </a>
                        <a href='#' className='header__nav-item'>
                            Pages
                        </a>
                        <a href='#' className='header__nav-item'>
                            Elements
                        </a>
                        <a href='#' className='header__nav-item'>
                            Blog
                        </a>
                        <a href='#' className='header__nav-item'>
                            Contacts
                        </a>
                    </nav>
                    <button className='header__button'>
                        <PlayBtn />
                        Watch the demo
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;
