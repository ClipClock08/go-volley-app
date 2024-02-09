import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './Season.css'

const Seasons = () => {
    const [season, setSeason] = useState({})
    let {id} = useParams();

    useEffect(() => {
        let mySeason = {
            id: 1,
            title: "Класичний волейбол 2023-2024",
            details: "",
            start_year: "02.10.2023",
            end_year: ""
        }
        setSeason(mySeason)
    }, [id]);

    const results = [];

    return <>
        <div className="table">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <td>Team</td>
                    <td>Ranking Points</td>
                    <td colSpan="3">Matches</td>
                    <td colSpan="2">Sets</td>
                    <td colSpan="2">Points</td>
                    <td colSpan="6">Results Breakdown</td>
                    <td>Set Ratio</td>
                    <td>Point Ratio</td>
                    <td>Place</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Played</td>
                    <td>Won</td>
                    <td>Lost</td>
                    <td>Won</td>
                    <td>Lost</td>
                    <td>Won</td>
                    <td>Lost</td>
                    <td>3 - 0</td>
                    <td>3 - 1</td>
                    <td>3 - 2</td>
                    <td>2 - 3</td>
                    <td>1 - 3</td>
                    <td>0 - 3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><p>"Valky Team" Валки</p></td>
                    <td>1</td>
                    <td>12</td>
                    <td>0</td>
                    <td>12</td>
                    <td>2</td>
                    <td>36</td>
                    <td>--</td>
                    <td>--</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>11</td>
                    <td>0,05</td>
                    <td>--</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td><p>"StM" Ст. Мерчик</p></td>
                </tr>
                <tr>
                    <td><p>"Авангард" Люботин</p></td>
                </tr>
                <tr>
                    <td><p>"Авто-Місто" Краснокутськ</p></td>
                </tr>
                <tr>
                    <td><p>"Відродження" Резуненкове</p></td>
                </tr>
                <tr>
                    <td><p>"ДЮСШ" Богодухів</p></td>
                </tr>
                <tr>
                    <td><p>"За Валки" Валки</p></td>
                </tr>
                <tr>
                    <td><p>"Коломак" Коломак</p></td>
                </tr>
                <tr>
                    <td><p>"Шарівка" Шарівка</p></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="table">
            <h2>Season: {season.title}</h2>
            <small><em>season from {season.start_date} to {season.end_date || "in progress"}</em></small>
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
                            сезону {season.start_date} - {season.end_date || "триває"} </p>
                    </td>
                    <td align="center" colSpan="10">
                        <p>Команди гості</p>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-1 align-middle"><p>"Valky Team"</p></td>
                    <td className="col-md-1 align-middle"><p>"StM"</p></td>
                    <td className="col-md-1 align-middle"><p>"Авангард"</p></td>
                    <td className="col-md-1 align-middle"><p>"Авто-Місто"</p></td>
                    <td className="col-md-1 align-middle"><p>"Відродження"</p></td>
                    <td className="col-md-1 align-middle"><p>"ДЮСШ"</p></td>
                    <td className="col-md-1 align-middle"><p>"За Валки"</p></td>
                    <td className="col-md-1 align-middle"><p>"Коломак"</p></td>
                    <td className="col-md-1 align-middle"><p>"Шарівка"</p></td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowSpan="10" align="center" className="align-text-top">
                        <div><p>Команди господарі</p></div>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"Valky Team" Валки</p>
                        </div>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
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
                        <p>3-0</p>
                        <hr/>
                        <p>3-0</p>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>1 - 3</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>3 - 2</p></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 1</p>
                        <hr/>
                        <p>3 - 0</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>2 - 3</p></td>
                    <td className="col-md-1 align-middle">
                        <p>3-2</p>
                        <hr/>
                        <p>3-0</p>
                    </td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"Авангард" Люботин</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>2 - 3</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>1 - 3</p></td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>3 - 2</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>2 - 3</p></td>
                    <td className="col-md-1 align-middle"><p>3 - 1</p></td>
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
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                    <td className="col-md-1 align-middle"><p>1 - 3</p></td>
                    <td className="col-md-1 align-middle"><p>3 - 1</p></td>
                    <td className="col-md-1 align-middle"><p>3 - 2</p></td>
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                </tr>
                <tr>
                    <td className="col-md-3">
                        <div>
                            <p>"Відродження" Резуненкове</p>
                        </div>
                    </td>
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                    <td className="col-md-1 align-middle"><p>3 - 1</p></td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 0</p>
                        <hr/>
                        <p>1 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
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
                    <td className="col-md-1 align-middle"><p>3 - 0</p></td>
                    <td className="col-md-1 align-middle"><p>2 - 3</p></td>
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
                    <td className="col-md-1 align-middle"><p>3 - 2</p></td>
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
                    <td className="col-md-1 align-middle"><p>1 - 3</p></td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                        <hr/>
                        <p>2 - 3</p>
                    </td>
                    <td className="col-md-1 empty"></td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 align-middle"><p>1 - 3</p></td>
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
                    <td className="col-md-1 align-middle"><p>3 - 2</p></td>
                    <td className="col-md-1 align-middle">
                        <p>2 - 3</p>
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
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>0 - 3</p>
                    </td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 2</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>2 - 3</p></td>
                    <td className="col-md-1 align-middle">
                        <p>3 - 1</p>
                    </td>
                    <td className="col-md-1 align-middle"><p>0 - 3</p></td>
                    <td className="col-md-1 empty"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default Seasons