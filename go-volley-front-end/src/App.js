import {Link, Outlet, useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import Alert from "./components/Alert";

function App() {
    const [jwtToken, setJwtToken] = useState("")
    const [alertMessage, setAlertMessage] = useState("")
    const [alertClassName, setAlertClassName] = useState("d-none")

    const [tickInterval, setTickInterval] = useState()

    const navigate = useNavigate()

    const logOut = () => {
        const requestObjects = {
            method: "GET",
            credentials: "include"
        }
        fetch("/logout", requestObjects)
            .catch(error => {
                console.log("error logging out", error)
            })
            .finally(() => {
                setJwtToken("")
                toggleRefresh(false)
            })

        navigate("/login")
    }

    const toggleRefresh = useCallback((status) => {
        console.log("clicked");

        if (status) {
            console.log("turning on ticking");
            let i  = setInterval(() => {

                const requestOptions = {
                    method: "GET",
                    credentials: "include",
                }

                fetch(`/refresh`, requestOptions)
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.access_token) {
                            setJwtToken(data.access_token);
                        }
                    })
                    .catch(error => {
                        console.log("user is not logged in");
                    })
            }, 600000);
            setTickInterval(i);
            console.log("setting tick interval to", i);
        } else {
            console.log("turning off ticking");
            console.log("turning off tickInterval", tickInterval);
            setTickInterval(null);
            clearInterval(tickInterval);
        }
    }, [tickInterval])

    useEffect(() => {
        if (jwtToken === "") {
            const requestOptions = {
                method: "GET",
                credentials: "include",
            }

            fetch(`/refresh`, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    if (data.access_token) {
                        setJwtToken(data.access_token);
                        toggleRefresh(true);
                    }
                })
                .catch(error => {
                    console.log("user is not logged in", error);
                })
        }
    }, [jwtToken, toggleRefresh])

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className="col">
                    <h1 className={"mt-3"}>Go Volley App</h1>
                </div>
                <div className="col text-end">
                    {jwtToken === ""
                        ? <Link to="/login"><span className={"badge bg-success"}>Login</span></Link>
                        : <a href="#!" onClick={logOut}><span className="badge bg-danger">Logout</span></a>
                    }
                </div>
                <hr className={"mb-3"}/>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <nav>
                        <div className="list-group">
                            <Link to="/" className={"list-group-item list-group-item-action"}>Home</Link>
                            <Link to="/seasons" className={"list-group-item list-group-item-action"}>Seasons</Link>
                            <Link to="/teams" className={"list-group-item list-group-item-action"}>Teams</Link>
                            <Link to="/schedule" className={"list-group-item list-group-item-action"}>Schedule</Link>
                            {jwtToken !== "" &&
                                <>
                                    <Link to="/admin" className={"list-group-item list-group-item-action"}>Admin</Link>
                                    <Link to="/graphql"
                                          className={"list-group-item list-group-item-action"}>GraphQL</Link>
                                </>
                            }
                        </div>
                    </nav>
                </div>
                <div className="col-md-10">
                    <Alert message={alertMessage} className={alertClassName}/>
                    <Outlet context={{
                        jwtToken,
                        setJwtToken,
                        setAlertClassName,
                        setAlertMessage,
                        toggleRefresh
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default App;
