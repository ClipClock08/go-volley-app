import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import logo from './../images/empty_logo.jpg'

const Team = () => {
    const [team, setTeam] = useState({})
    let {id} = useParams();

    useEffect(() => {
        let myTeam = {
            id: 1,
            name: "StM",
            since: "2021-01-01",
            logo: logo,
            city_id: 3
        }
        setTeam(myTeam)

        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(`/team/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                setTeam(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id]);

    return <>
        <div className="text-center">
            <h2>Команда {team.name}</h2>
            <hr/>
        </div>
        <div className="row">
            <div className="col-4">
                <img src={team.logo} alt="" width={300} height={300}/>
            </div>
            <div className="col-5">
                <div>
                    Інформація про команду...
                </div>
            </div>
        </div>
    </>
}

export default Team