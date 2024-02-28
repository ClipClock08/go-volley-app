import {useEffect, useState} from "react";
import {Link, useNavigate, useOutletContext} from "react-router-dom";

const ManagePage = () => {
    const [seasons, setSeasons] = useState([])
    const {jwtToken} = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        const headers = new Headers();
        if (jwtToken === "") {
            navigate("/login")
            return
        }
        headers.append("Content-Type", "application/json")

        const requestOptions = {
            method: "GET",
            headers: headers
        }

        fetch(`/admin/seasons`, requestOptions)
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
                <tr>
                    <td>
                        <Link to={`/seasons/123`}>Тестовий запис</Link>
                    </td>
                    <td>Класичний волейбол</td>
                    <td>2023 - 2024</td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
}

export default ManagePage