import React from "react";
import Logo from "../assets/icons/logoIcon";
function Footer() {
    return (
        <footer className='footer'>
            <div className='footer'>
                <div className='footer-content'>
                    <div className='footer-main'>
                        <div className='footer-logo'>
                            <Logo />
                            <div className='footer-contacts'>
                                <p>+1 601-201-5580</p>
                                <p>ensome@info.co.us</p>
                                <a href='#' className='directions'>
                                    Driving directions
                                </a>
                            </div>
                        </div>

                        <div className='footer-links'>
                            <div className='link-column'>
                                <h4>About</h4>
                                <a href='#'>Home</a>
                                <a href='#'>About Us</a>
                                <a href='#'>Services</a>
                                <a href='#'>Solutions</a>
                            </div>

                            <div className='link-column'>
                                <h4>Information</h4>
                                <a href='#'>Contacts</a>
                                <a href='#'>Our team</a>
                                <a href='#'>Blog</a>
                                <a href='#'>FAQ</a>
                            </div>

                            <div className='link-column'>
                                <h4>Service</h4>
                                <a href='#'>Pages</a>
                                <a href='#'>Elements</a>
                                <a href='#'>Site map</a>
                                <a href='#'>Pricing</a>
                                <a href='#'>FAQ</a>
                            </div>
                        </div>
                    </div>

                    <div className='footer-bottom'>
                        <p>© 2022 Ensome. All Rights Reserved.</p>
                        <div className='legal-links'>
                            <a href='#'>Privacy policy</a>
                            <a href='#'>Terms of use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
