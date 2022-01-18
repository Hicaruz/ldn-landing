import React, { useEffect, useState } from 'react';
import { getPartners } from "../api/firebase"
function Partners() {

    const [partners, setPartners] = useState([])
    useEffect(() => {

        (async () => {
            const partners = await getPartners()
            setPartners(partners)
        })()
    }, [])
    return (<>
        <section className="collection-section padding-top padding-bottom">
            <div className="container">
                <div className="section-header">
                    <p>Conoce a nuestros</p>
                    <h2>PATROCINADORES</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center">
                        {partners.map((partners, idx) => (
                            <>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="game-item item-layer">
                                        <div className={`game-item-inner bg-${++(idx)}`}>
                                            <div className="game-thumb">
                                                <img src={partners.logo} alt="partner-img" />
                                            </div>
                                            <div className="game-overlay">
                                                <h4><a href="team-single.html">{partners.name}</a> </h4>
                                                <ul className="rating-star d-flex flex-wrap justify-content-center align-items-center">
                                                   
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                       
                       
                    </div>
                    <div className="button-wrapper text-center mt-5">
                        <a href="#1" className="default-button"><span>Quieres ser parte LDN? <i
                            className="icofont-circled-right"></i></span> </a>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Partners