import React from 'react';

function About() {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="section-wrapper padding-top">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src="assets/images/about/01.png" alt="about"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className="about-wrapper">
                                    <div className="section-header">
                                        <p>Quienes Somos?</p>
                                        <h2>ESPORTS PARA LATINOAMÉRICA</h2>
                                    </div>
                                    <div className="about-content">
                                        <p>Somos generadores de torneos, pero también apoyamos a influencers, jugadores, equipos,  casters, coaches y todas las personas que estén interesadas en el mundo de los deportes electrónicos.

                                            Desde el 2018 y seguimos vigentes al día de hoy. Estamos encantados de ayudarte en tu proyecto.

                                            Orgullosamente sinaloenses para el mundo.</p>
                                        <ul className="about-list">
                                            <li className="about-item d-flex flex-wrap">
                                                <div className="about-item-thumb">
                                                    <img src="assets/images/about/icon-1.png" alt="Icon"/>
                                                </div>
                                                <div className="about-item-content">
                                                    <h5>+4 Años de experiencia</h5>
                                                    <p>Creando e impulsando el talento Latinoamericano</p>
                                                </div>
                                            </li>
                                            <li className="about-item d-flex flex-wrap">
                                                <div className="about-item-thumb">
                                                    <img src="assets/images/about/icon-2.png" alt="Icon"/>
                                                </div>
                                                <div className="about-item-content">
                                                    <h5>+150,000 En alcance en redes cada mes</h5>
                                                    <p>Transmisiones de la mayor calidad en la region.</p>
                                                </div>
                                            </li>
                                            <li className="about-item d-flex flex-wrap">
                                                <div className="about-item-thumb">
                                                    <img src="assets/images/about/icon-3.png" alt="Icon"/>
                                                </div>
                                                <div className="about-item-content">
                                                    <h5>+1,500 Jugadores satisfechos</h5>
                                                    <p>Siendo un foco donde las futuras leyendas nacen.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;