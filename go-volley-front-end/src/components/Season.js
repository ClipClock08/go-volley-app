import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './Season.css'

const Season = () => {
    const [season, setSeason] = useState({})
    const [ranking, setRanking] = useState({})

    let {id} = useParams();

    function sortByPlace(ranking) {
        const sortedRanking = Object.entries(ranking)
            .sort(([, a], [, b]) => a.place - b.place)
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});
        return sortedRanking;
    }

    useEffect(() => {
        let mySeason = {
            id: 1,
            title: "Класичний волейбол 2023-2024",
            details: "details",
            start_year: 2023,
            end_year: 2024
        }
        setSeason(mySeason)

        let myRanking = {
            "Valky Team": {
                city: "Валки",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 0,
                    "3-1": 0,
                    "3-2": 0,
                    "2-3": 1,
                    "1-3": 1,
                    "0-3": 12,
                },
                place: 9
            },
            "StM": {
                city: "Ст. Мерчик",
                points: {
                    won: 1163,
                    lost: 1110
                },
                setsRes: {
                    "3-0": 5,
                    "3-1": 2,
                    "3-2": 3,
                    "2-3": 2,
                    "1-3": 1,
                    "0-3": 1,
                },
                place: 3
            },
            "Авангард": {
                city: "Люботин",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 1,
                    "3-1": 2,
                    "3-2": 2,
                    "2-3": 2,
                    "1-3": 3,
                    "0-3": 4
                },
                place: 6
            },
            "Авто-Місто": {
                city: "Краснокутськ",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 5,
                    "3-1": 4,
                    "3-2": 5,
                    "2-3": 0,
                    "1-3": 1,
                    "0-3": 0,
                },
                place: 1
            },
            "Відродження": {
                city: "Резуненкове",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 6,
                    "3-1": 2,
                    "3-2": 0,
                    "2-3": 2,
                    "1-3": 3,
                    "0-3": 1,
                },
                place: 5
            },
            "ДЮСШ": {
                city: "Богодухів",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 4,
                    "3-1": 4,
                    "3-2": 2,
                    "2-3": 2,
                    "1-3": 0,
                    "0-3": 2,
                },
                place: 2
            },
            "За Валки": {
                city: "Валки",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 2,
                    "3-1": 2,
                    "3-2": 0,
                    "2-3": 2,
                    "1-3": 3,
                    "0-3": 6,
                },
                place: 7
            },
            "Коломак": {
                city: "Коломак",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 6,
                    "3-1": 1,
                    "3-2": 2,
                    "2-3": 2,
                    "1-3": 2,
                    "0-3": 1,
                },
                place: 4
            },
            "Шарівка": {
                city: "Шарівка",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 1,
                    "3-1": 1,
                    "3-2": 2,
                    "2-3": 3,
                    "1-3": 4,
                    "0-3": 3,
                },
                place: 8
            },
        }

        //myRanking = sortByPlace(myRanking);
        setRanking(myRanking)

    }, [id]);

    const results = [];

    return <>
        <div className="table">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <td>Команда</td>
                    <td colSpan="3">Матчі</td>
                    <td colSpan="2">Сети</td>
                    {/*<td colSpan="2">Очки</td>*/}
                    <td colSpan="6">Розбивка результатів</td>
                    <td>Рейтинг сетів</td>
                    {/*<td>Рейтинг очків</td>*/}
                    <td>Очки</td>
                    <td>Місце</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>Won</td>
                    <td>Lost</td>
                    <td>Won</td>
                    <td>Lost</td>
                    {/*<td>Won</td>
                    <td>Lost</td>*/}
                    <td>3 - 0</td>
                    <td>3 - 1</td>
                    <td>3 - 2</td>
                    <td>2 - 3</td>
                    <td>1 - 3</td>
                    <td>0 - 3</td>
                    <td></td>
                    {/*<td></td>*/}
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {Object.entries(ranking).map(([key, subject], i) => (
                    <tr key={key}>
                        <td>{`"${key}" ${subject.city}`}</td>
                        <td>{subject.setsRes["3-0"] + subject.setsRes["3-1"] + subject.setsRes["3-2"] + subject.setsRes["2-3"] + subject.setsRes["1-3"] + subject.setsRes["0-3"]}</td>
                        <td>{subject.setsRes["3-0"] + subject.setsRes["3-1"] + subject.setsRes["3-2"]}</td>
                        <td>{subject.setsRes["2-3"] + subject.setsRes["1-3"] + subject.setsRes["0-3"]}</td>
                        <td>{subject.setsRes["3-0"] * 3 + subject.setsRes["3-1"] * 3 + subject.setsRes["3-2"] * 3 + subject.setsRes["2-3"] * 2 + +subject.setsRes["1-3"]}</td>
                        <td>{subject.setsRes["3-1"] + subject.setsRes["3-2"] * 2 + subject.setsRes["2-3"] * 3 + subject.setsRes["1-3"] * 3 + subject.setsRes["0-3"] * 3}</td>
                        {/*<td>{subject.points.won}</td>
                        <td>{subject.points.lost}</td>*/}
                        {Object.entries(subject.setsRes).map(([key, set], i) => (
                            <td key={key}>{set}</td>
                        ))}

                        <td>{((subject.setsRes["3-0"] * 3 + subject.setsRes["3-1"] * 3 + subject.setsRes["3-2"] * 3 + subject.setsRes["2-3"] * 2 + +subject.setsRes["1-3"]) / (subject.setsRes["3-1"] + subject.setsRes["3-2"] * 2 + subject.setsRes["2-3"] * 3 + subject.setsRes["1-3"] * 3 + subject.setsRes["0-3"] * 3)).toFixed(2)}</td>
                        {/*<td>{(subject.points.won / subject.points.lost).toFixed(2)}</td>*/}
                        <td>{subject.setsRes["3-0"] * 3 + subject.setsRes["3-1"] * 3 + subject.setsRes["3-2"] * 2 + subject.setsRes["2-3"] * 1}</td>
                        <td>{subject.place}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div className="table">
            <h2>Сезон: {season.title}</h2>
            <small><em>{season.details} </em></small>
            <hr/>
            <table border="0" cellPadding="10" cellSpacing="0"
                   className="table table-striped table-hover">
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <colgroup></colgroup>
                <thead>
                <tr>
                    <td align="center" colSpan="11">
                        <p>Таблиця результатів</p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" rowSpan="2">
                        <p>Чемпіонат волейболу серед
                            громад Богодухівського району
                            сезону {season.start_year} - {season.end_year || "триває"} </p>
                    </td>
                    <td align="center" colSpan="10">
                        <p>Команди</p>
                    </td>
                </tr>
                <tr>
                    {Object.entries(ranking).map(([key, subject], i) => (
                        <td className="col-md-1 align-middle" key={key}><p>{key}</p></td>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowSpan="10"></td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"Valky Team" Валки</p>
                        </div>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>-</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>-</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"StM" Ст. Мерчик</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>1 - 3</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p> - </p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 2</p>
                        <hr/>
                        <p>3 - 2</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 1</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>2 - 3</p>
                        <hr/>
                        <p> - </p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 2</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"Авангард" Люботин</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>2 - 3</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>1 - 3</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>3 - 2</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>2 - 3</p>
                        <hr/>
                        <p>3 - 2</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 1</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"Авто-Місто" Краснокутськ</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 1</p>
                        <hr/>
                        <p>3 - 2</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 2</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>3 - 2</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>1 - 3</p>
                        <hr/>
                        <p> - </p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 1</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 2</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>3 - 2</p>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"Відродження" Резуненкове</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 1</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>2 - 3</p></td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"ДЮСШ" Богодухів</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>2 - 3</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                    <td className="col-md-1 align-middle"><p>3 - 1</p></td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>3 - 2</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 1</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 2</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"За Валки" Валки</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                    <td className="col-md-1 align-middle">
                        <p>1 - 3</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>1 - 3</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>1 - 3</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"Коломак" Коломак</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3-0</p>
                        <hr/>
                        <p>3-0</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>3 - 2</p></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 2</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>2 - 3</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>3 - 1</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>1 - 3</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>3-0</p>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"Шарівка" Шарівка</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3-0</p>
                        <hr/>
                        <p>3-2</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>2-3</p>
                        <hr/>
                        <p>0-3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>1 - 3</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 2</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>2 - 3</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 1</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 empty"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default Season