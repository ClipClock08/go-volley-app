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
            <h2>Seasons</h2>
            <hr/>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Details</th>
                    <th>Dates</th>
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
                </tbody>
            </table>
        </div>
    </>
}

export default Seasons