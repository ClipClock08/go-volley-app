import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import thumb from './../images/empty_logo.jpg'

const Teams = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`/teams`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setTeams(data)
            })
            .catch(error => {
                console.log(error)
            })

        let myTeams = [
            {
                name: "Valky Team",
                city: "Валки",
                since: null
            },
            {
                name: "StM",
                city: "Старий Мерчик",
                since: null
            },
            {
                name: "Коломак",
                city: "Коломак",
                since: null
            },
            {
                name: "ДЮСШ Богодухів",
                city: "Богодухів",
                since: null
            },
            {
                name: "Відродження",
                city: "Різуненкове",
                since: null
            },
            {
                name: "За Валки",
                city: "Валки",
                since: null
            },
            {
                name: "Авангард",
                city: "Люботин",
                since: null
            },
            {
                name: "Авто-Місто",
                city: "Краснокутськ",
                since: null
            },
            {
                name: "Шарівка",
                city: "Шарівка",
                since: null
            },
            {
                name: "Пітбуль",
                city: "Котельва",
                since: null
            },
            {
                name: "ДЮСШ Пісочин",
                city: "Пісочин",
                since: null
            },
            {
                name: "Газовик",
                city: "Харків",
                since: null
            },
            {
                name: "Кристал",
                city: "Сидоренкове",
                since: null
            },

        ]

        setTeams(myTeams)
    }, []);
    return <>
        <div className="text-center">
            <h2>Команди</h2>
            <hr/>
        </div>
        <div className="row">
            {teams.map((m) => (
                <div className="col-lg-4" key={m.id}>
                    <div className="card">
                        <Link to={`/teams/${m.id}`}>
                            <img src={m.logo || thumb} className="card-img-top" alt="..."/>
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">{m.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Заснована: {m.since}</li>
                            <li className="list-group-item">Локація: {m.city}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </>
}

export default Teams