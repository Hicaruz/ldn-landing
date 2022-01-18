import React from 'react'

function Header() {

    return (
        <>
            <a href="." className="scrollToTop"><i className="icofont-rounded-up"></i></a>

            <div className="body-shape">
                <img src="assets/images/shape/body-shape.png" alt="shape"/>
            </div>

            <header className="header-section">
                <div className="container">
                    <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
                        <div className="brand-logo d-none d-lg-inline-block">
                            <div className="logo">
                                <a href=".">
                                    <img src="assets/images/logo/logo.png" alt="logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="header-menu-part">
                            <div className="header-top">
                                <div className="header-top-area">
                                    <ul className="left">
                                        <li>
                                            <i className="icofont-whatsapp"></i> <span>+52 1 667 201 6415</span>
                                        </li>
                                    </ul>
                                    <ul className="social-icons d-flex align-items-center">
                                        <li>
                                            <a href="." className="fb"><i className="icofont-facebook-messenger"></i></a>
                                        </li>
                                        <li>
                                            <a href="." className="facebook"><i className="icofont-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="." className="instagram"><i className="icofont-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="." className="youtube"><i className="icofont-youtube"></i></a>
                                        </li>
                                        <li>
                                            <a href="." className="twitch"><i className="icofont-twitch"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-bottom">
                                <div className="header-wrapper justify-content-lg-end">
                                    <div className="mobile-logo d-lg-none">
                                        <a href="."><img src="assets/images/logo/logo.png" alt="logo"/></a>
                                    </div>
                                    <div className="menu-area">
                                        <ul className="menu">

                                            <li><a href=".">Sobre Nosotros</a></li>
                                            <li><a href=".">Precios Y Servicios</a></li>

                                        </ul>

                                        <div className="header-bar d-lg-none">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="ellepsis-bar d-lg-none">
                                            <i className="icofont-info-square"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header