import React, {useEffect, useState} from "react";

const Season2 = () => {
    const [season, setSeason] = useState({})

    useEffect(() => {
        let mySeason = {
            id: 2,
            title: "Кубок \"закриття сезону\" з класичного волейболу на призи",
            details: "",
            start_year: 2023
        }
        setSeason(mySeason)

    }, []);

    const results = [];

    return <>
        <div className="row">
            <h1>Ігри на кубок</h1>
            <h2>{season.title}</h2>
            <div className="tournament-bracket tournament-bracket--rounded">
                <div className="tournament-bracket__round tournament-bracket__round--bronze">
                    <h3 className="tournament-bracket__round-title">Гра за бронзу</h3>
                    <ul className="tournament-bracket__list">
                        <li className="tournament-bracket__item">
                            <div className="tournament-bracket__match" tabIndex="0">
                                <table className="tournament-bracket__table">
                                    <caption className="tournament-bracket__caption">
                                        <time dateTime="2024-03-16">16 Березня 2024</time>
                                    </caption>
                                    <thead className="sr-only">
                                    <tr>
                                        <th>Місто</th>
                                        <th>Рахунок</th>
                                    </tr>
                                    </thead>
                                    <tbody className="tournament-bracket__content">
                                    <tr className="tournament-bracket__team">
                                        <td className="tournament-bracket__country">
                                            <abbr className="tournament-bracket__code"
                                                  title="StM Ст. Мерчик">StM</abbr>
                                        </td>
                                        <td className="tournament-bracket__score">
                                            <span className="tournament-bracket__number">1</span>
                                        </td>
                                    </tr>
                                    <tr className="tournament-bracket__team tournament-bracket__team--winner">
                                        <td className="tournament-bracket__country">
                                            <abbr className="tournament-bracket__code"
                                                  title="Авангард Люботин">АВАН</abbr>
                                        </td>
                                        <td className="tournament-bracket__score">
                                            <span className="tournament-bracket__number">2</span>
                                            <span
                                                className="tournament-bracket__medal tournament-bracket__medal--bronze fa fa-trophy"
                                                aria-label="Bronze medal"></span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="tournament-bracket__round tournament-bracket__round--gold">
                    <h3 className="tournament-bracket__round-title">Гра за золото</h3>
                    <ul className="tournament-bracket__list">
                        <li className="tournament-bracket__item">
                            <div className="tournament-bracket__match" tabIndex="0">
                                <table className="tournament-bracket__table">
                                    <caption className="tournament-bracket__caption">
                                        <time dateTime="2024-03-16">16 Березня 2024</time>
                                    </caption>
                                    <thead className="sr-only">
                                    <tr>
                                        <th>Місто</th>
                                        <th>Рахунок</th>
                                    </tr>
                                    </thead>
                                    <tbody className="tournament-bracket__content">
                                    <tr className="tournament-bracket__team tournament-bracket__team--winner">
                                        <td className="tournament-bracket__country">
                                            <abbr className="tournament-bracket__code"
                                                  title="ДЮСШ Богодухів">ДЮСШ</abbr>
                                        </td>
                                        <td className="tournament-bracket__score">
                                            <span className="tournament-bracket__number">2</span>
                                            <span
                                                className="tournament-bracket__medal tournament-bracket__medal--gold fa fa-trophy"
                                                aria-label="Gold medal"></span>
                                        </td>
                                    </tr>
                                    <tr className="tournament-bracket__team">
                                        <td className="tournament-bracket__country">
                                            <abbr className="tournament-bracket__code"
                                                  title="Коломак Коломак">КОЛО</abbr>
                                        </td>
                                        <td className="tournament-bracket__score">
                                            <span className="tournament-bracket__number">0</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default Season2