import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Result2 = () => {
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
            id: 2,
            title: "Кубок \"закриття сезону\" з класичного волейболу на призи",
            details: "",
            start_year: 2023,
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
                    "3-0": 1,
                    "3-1": 0,
                    "3-2": 0,
                    "2-3": 1,
                    "1-3": 1,
                    "0-3": 13,
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
                    "1-3": 2,
                    "0-3": 2,
                },
                place: 5
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
                    "2-3": 3,
                    "1-3": 3,
                    "0-3": 5
                },
                place: 7
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
                    "0-3": 1,
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
                    "3-0": 7,
                    "3-1": 3,
                    "3-2": 0,
                    "2-3": 2,
                    "1-3": 3,
                    "0-3": 1,
                },
                place: 4
            },
            "ДЮСШ": {
                city: "Богодухів",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 5,
                    "3-1": 4,
                    "3-2": 3,
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
                    "3-0": 3,
                    "3-1": 2,
                    "3-2": 0,
                    "2-3": 2,
                    "1-3": 3,
                    "0-3": 6,
                },
                place: 6
            },
            "Коломак": {
                city: "Коломак",
                points: {
                    won: 0,
                    lost: 0
                },
                setsRes: {
                    "3-0": 8,
                    "3-1": 1,
                    "3-2": 2,
                    "2-3": 2,
                    "1-3": 2,
                    "0-3": 1,
                },
                place: 3
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
                    "0-3": 5,
                },
                place: 8
            },
        }

        setRanking(myRanking)

    }, [id]);


    return <>
        <div className="row">
            <div className="col">
                <h2>Сезон: {season.title}</h2>
                <small><em>{season.details} </em></small>
            </div>
        </div>
    </>
}

export default Result2