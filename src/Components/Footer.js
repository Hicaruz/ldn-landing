import React from 'react';

function Footer() {
    return (
        <>
            <footer className="footer-section">
                {/* <div className="footer-top">
                    <div className="container">
                        <div className="row g-3 justify-content-center g-lg-0">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/01.png" alt="Phone-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span> +52 1 667 201 6415</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/02.png" alt="email-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span> email@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div> */}
                <div className="footer-middle  padding-bottom" style={{ backgroundImage: "url(assets/images/footer/bg.jpg)" }}>
                    <div className="container">
                        <div className="row padding-lg-top">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title mb-4">
                                            <img src="assets/images/logo/logo.png" alt="logo" />
                                        </div>
                                        <div className="fm-item-content">
                                            <p className="mb-4">asd</p>
                                            <ul className="match-social-list d-flex flex-wrap align-items-center">
                                                <li><a href="."><img src="assets/images/match/social-1.png" alt="vimeo" /></a></li>
                                                <li><a href="."><img src="assets/images/match/social-2.png" alt="youtube" /></a></li>
                                                <li><a href="."><img src="assets/images/match/social-3.png" alt="twitch" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>Merch</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <div className="fm-item-widget lab-item">
                                                <div className="lab-inner">
                                                    <div className="lab-thumb">
                                                        <a href="."> <img src="assets/images/footer/01.jpg" alt="footer-widget-img" /></a>
                                                    </div>
                                                    <div className="lab-content">
                                                        <h6><a href="blog-single.html">Jersey LDN</a></h6>
                                                        <p>Price: <b>$230</b></p>
                                                        <div className="rating">
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fm-item-widget lab-item">
                                                <div className="lab-inner">
                                                    <div className="lab-thumb">
                                                        <a href="."><img src="assets/images/footer/02.jpg" alt="footer-widget-img" /></a>
                                                    </div>
                                                    <div className="lab-content">
                                                        <h6><a href="blog-single.html">Pants LDN</a></h6>
                                                        <p>Price: <b>$290</b></p>
                                                        <div className="rating">
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fm-item-widget lab-item">
                                                <div className="lab-inner">
                                                    <div className="lab-thumb">
                                                        <a href="."><img src="assets/images/footer/03.jpg" alt="footer-widget-img" /></a>
                                                    </div>
                                                    <div className="lab-content">
                                                        <h6><a href="blog-single.html">Hoddie LDN</a></h6>
                                                        <p>Price: <b>$330</b></p>
                                                        <div className="rating">
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                            <i className="icofont-ui-rating"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item-3 mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>Subscribete a nuestras Noticias</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            <form>
                                                <div className="form-group mb-4">
                                                    <input type="text" className="form-control" placeholder=" Name" />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <input type="email" className="form-control" placeholder=" Email" />
                                                </div>
                                                <button type="submit" className="default-button"><span>Enviar Mensaje <i className="icofont-circled-right"></i></span></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-content text-center">
                                    <p>&copy;2021 <a href="index.html">Liga Del Nexo</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer;