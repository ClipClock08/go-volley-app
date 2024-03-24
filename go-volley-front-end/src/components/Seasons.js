import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Seasons = () => {
    const [seasons, setSeasons] = useState([])

    useEffect(() => {
        const headers = new Headers();

        headers.append("Content-Type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: headers
        }

        fetch(`/seasons`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setSeasons(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    return <>
        <div className="text-center">
            <h2>Список турнірів</h2>
            <hr/>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Назва</th>
                    <th>Опис</th>
                    <th>Період</th>
                </tr>
                </thead>
                <tbody>
                {seasons.map((m) => (
                    <tr key={m.id}>
                        <td>
                            <Link to={`/seasons/${m.id}`}>{m.title}</Link>
                        </td>
                        <td>{m.details}</td>
                        <td>{m.start_year} - {m.end_year}</td>
                    </tr>
                ))}
                <tr>
                    <td>
                        <Link to={`/seasons/1`}>Чемпіонат Валківської МТГ з класичного волейболу</Link>
                    </td>
                    <td>турнір проводиться в ліцеї ім. Масельського О.С.</td>
                    <td>2023 - 2024</td>
                </tr>
                <tr>
                    <td>
                        <Link to={`/seasons/2`}>Кубок "закриття сезону" з класичного волейболу на призи</Link>
                    </td>
                    <td>турнір проводиться в ліцеї ім. Масельського О.С.</td>
                    <td>2024</td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default Seasons