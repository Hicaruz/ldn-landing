import React, { useEffect, useState } from "react";
import getStatic from '../utils/getStatic'
import battlefy from "../api/battlefy"
function Matches() {
    const _settings = getStatic()
    const [nextMatches, setNextMatchs] = useState([])
    const [prevMatches, setPrevMatchs] = useState([])
    const [tournament, setTournament] = useState({})

    useEffect(() => {
        (async () => {
            const [matchs, teams, tournament] = await Promise.all([
                battlefy.getTournamentStageMatches("6198305693f9cd128f19edac"),
                battlefy.getTournamentTeams("61411f5f1db4c6787829e3ae"),
                battlefy.getTournamentData("61411f5f1db4c6787829e3ae")

            ])


            // const teams = await battlefy.getTournamentTeams
            const max = [... new Set(matchs.map(match => match.roundNumber))].pop();

            const _matchs = matchs.map(match => ({
                ...match,
                bottom: {
                    ...match.bottom,
                    name: (teams.find(team => team._id === match.bottom.teamID) ?? {}).name ?? "",
                    logo: (teams.find(team => team._id === match.bottom.teamID) ?? {}).persistentTeam?.logoUrl ?? ""

                },
                top: {
                    ...match.top,
                    name: (teams.find(team => team._id === match.top.teamID) ?? {}).name ?? "",
                    logo: (teams.find(team => team._id === match.top.teamID) ?? {}).persistentTeam?.logoUrl ?? ""
                },
                winner: match.top.winner ? "top" : match.bottom.winner ? "bottom" : false
            }))


            const next_matchs = _matchs.filter(match => match.roundNumber === max).slice(0, 3)
            const previous_matchs = _matchs.filter(match => match.roundNumber === (max - 1)).slice(0, 3)

            console.log(previous_matchs)
            setNextMatchs(next_matchs)
            setPrevMatchs(previous_matchs)
            setTournament(tournament)
        })()


    }, [])
    return (
        <>
            <section className="match-section padding-top padding-bottom" style={{ backgroundImage: "url(assets/images/match/bg.jpg)" }}>
                <div className="container">
                    <div className="section-header">
                        <p>CALENDARIO</p>
                        <h2>PARTIDA ESTELAR</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row mb-5">
                            <div className="col-12">
                                <div className="match-item item-layer">
                                    <div className="match-inner">
                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                            <p className="match-team-info">
                                                <span className="fw-bold">Temporada Dragon de Fuego</span>
                                            </p>
                                        </div>
                                        <div className="match-content gradient-bg-yellow">
                                            <div className="row gy-4 align-items-center justify-content-center">
                                                <div className="col-xl-4 col-md-6 order-md-2">
                                                    <div className="match-game-team">
                                                        <ul
                                                            className="match-team-list d-flex flex-wrap align-items-center justify-content-center">
                                                            <li className="match-team-thumb"><a href="."><img src={_settings.team_blue_side_logo} width="100px" alt="team-img" /></a>
                                                            </li>
                                                            <li className="text-center"><img className="w-75 w-md-100" src="assets/images/match/vs.png" alt="vs" /></li>
                                                            <li className="match-team-thumb"><a href="."><img src={_settings.team_red_side_logo} width="100px" alt="team-img" /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-6 order-md-1">
                                                    <div className="match-game-info">
                                                        <h4><a href="team-single.html">{_settings.main_event_name}</a> </h4>
                                                        <p
                                                            className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                            <span className="match-date">30
                                                                Dic 2021 </span><span className="match-time"> 08:00 PM</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-6 order-md-3">
                                                    <div className="match-game-social">
                                                        <ul
                                                            className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-end">

                                                            <li><a href="https://www.twitch.tv/ligadelnexo" className="default-button reverse-effect"><span>Ver Ahora <i className="icofont-play-alt-1"></i></span> </a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">Previas Matches</h3>
                                    <div className="row g-3">
                                        {prevMatches.map(match => (<>
                                            <div className="col-12">
                                                <div className="match-item-2 item-layer">
                                                    <div className="match-inner">
                                                        <div
                                                            className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">
                                                                <span className="fw-bold">{tournament.name}</span>
                                                            </p>
                                                        </div>
                                                        <div className="match-content gradient-bg-blue">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <a href="team-single.html" className="text-center"><img
                                                                            src={match.top.logo || "assets/images/match/teamsm/teamsm-1.png"}
                                                                            alt="team-img" /></a>
                                                                    </div>

                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <a href="team-single.html"><img
                                                                            src={match.bottom.logo || "assets/images/match/teamsm/teamsm-2.png"}
                                                                            alt="team-img" /></a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        <h4><a href="team-single.html">{match.top.score} - {match.bottom.score}</a>
                                                                        </h4>
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">6 Dic 2021 </span><span className="match-time">
                                                                                08:00PM</span>
                                                                        </p>
                                                                        <ul
                                                                            className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                                            <li><a href={`https://battlefy.com/liga-del-nexo/2021-clasificatorias-temporada-drag%C3%B3n-de-los-infiernos-lan/61411f5f1db4c6787829e3ae/stage/6198305693f9cd128f19edac/match/${match._id}`} className="default-button reverse-effect"><span>Ver Ahora <i className="icofont-play-alt-1"></i></span> </a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>))}

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">Proximas Matches</h3>
                                    <div className="row g-3">
                                        {nextMatches.map(match => (<>
                                            <div className="col-12">
                                                <div className="match-item-2 item-layer">
                                                    <div className="match-inner">
                                                        <div
                                                            className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">
                                                                <span className="fw-bold">{tournament.name}</span>
                                                            </p>
                                                        </div>
                                                        <div className="match-content gradient-bg-pink">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <a href="team-single.html" className="text-center"><img
                                                                            src={match.top.logo || "assets/images/match/teamsm/teamsm-1.png"}
                                                                            alt="team-img" /></a>
                                                                    </div>

                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <a href="team-single.html"><img
                                                                            src={match.bottom.logo || "assets/images/match/teamsm/teamsm-2.png"}
                                                                            alt="team-img" /></a>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        <h4><a href="team-single.html">Ronda {match.roundNumber} <span className="fw-bold">Match #{match.matchNumber}</span></a>
                                                                        </h4>
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">6 Dic 2021 </span><span className="match-time">
                                                                                08:00PM</span>
                                                                        </p>
                                                                        <ul
                                                                            className="match-social-list d-flex flex-wrap align-items-center justify-content-center">
                                                                            <li><a href={`https://battlefy.com/liga-del-nexo/2021-clasificatorias-temporada-drag%C3%B3n-de-los-infiernos-lan/61411f5f1db4c6787829e3ae/stage/6198305693f9cd128f19edac/match/${match._id}`} className="default-button reverse-effect"><span>Ver Ahora <i className="icofont-play-alt-1"></i></span> </a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>))}


                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="button-wrapper text-center mt-5">
                            <a href="game-list.html" className="default-button"><span>Buscar mas Matches <i className="icofont-circled-right"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Matches;