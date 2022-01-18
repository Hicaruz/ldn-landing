import React from 'react'
import getStatic from '../utils/getStatic'
function PrincipalEvent() {
    const _settings = getStatic()
    return (
        <>
            <section className="banner-section" style={{ backgroundImage: `url(${_settings.banner})` }}>
                <div className="container ">
                    <div className="">
                        <div className="banner-content text-center">
                            <h4 className="fw-normal theme-color mb-4">{_settings.main_event_name}</h4>
                            <img src={_settings.main_event_logo} alt="banner text thumb" className="mb-4" />
                            <p>{_settings.main_event_desciption}</p>
                            <a href={_settings.main_event_video} className="default-button reverse-effect" data-rel="lightcase"><span> Ver Ahora <i className="icofont-play-alt-1"></i></span> </a>
                        </div>
                        <div className="banner-thumb d-flex flex-wrap justify-content-center justify-content-between align-items-center align-items-lg-end">
                            <div className="banner-thumb-img ml-xl-50-none">
                                <a><img src={_settings.team_blue_side_logo} width="350px" alt="banner-thumb" /></a>
                            </div>
                            <div className="banner-thumb-vs">
                            </div>
                            <div className="banner-thumb-img mr-xl-50-none">
                                <a><img src={_settings.team_red_side_logo} width="350px" alt="banner-thumb" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrincipalEvent