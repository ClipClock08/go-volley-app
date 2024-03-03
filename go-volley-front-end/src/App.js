import {Link, Outlet, useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

function App() {
    const [jwtToken, setJwtToken] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertClassName, setAlertClassName] = useState("d-none");

    const [tickInterval, setTickInterval] = useState();

    const navigate = useNavigate();

    const logOut = () => {
        const requestOptions = {
            method: "GET",
            credentials: "include",
        }

        fetch(`/logout`, requestOptions)
            .catch(error => {
                console.log("error logging out", error);
            })
            .finally(() => {
                setJwtToken("");
                toggleRefresh(false);
            })

        navigate("/login");
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

    return (<>
            <div className={"container"}>
                <div className={"row"}>
                    <div className="col col-sm-8">
                        <h1 className="mb-3">ВАЛКІВСЬКИЙ ВОЛЕЙБОЛЬНИЙ КЛУБ <br/> ОРГКОМІТЕТ З ВОЛЕЙБОЛУ ВАЛКІВСЬКОЇ
                            МІСЬКОЇ
                            ТЕРИТОРІАЛЬНОЇ ГРОМАДИ ХАРКІВСЬКОЇ ОБЛАСТІ
                        </h1>
                    </div>
                    <div className="col text-end">
                        {jwtToken === ""
                            ? <Link to="/login"><span className={"badge bg-success"}>Увійти</span></Link>
                            : <a href="#!" onClick={logOut}><span className="badge bg-danger">Вихід</span></a>
                        }
                    </div>
                    <hr className={"mb-3"}/>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <nav>
                            <div className="list-group">
                                <Link to="/" className={"list-group-item list-group-item-action"}>Головна</Link>
                                <Link to="/seasons" className={"list-group-item list-group-item-action"}>Сезони</Link>
                                <Link to="/teams" className={"list-group-item list-group-item-action"}>Команди</Link>
                                <Link to="/schedule"
                                      className={"list-group-item list-group-item-action"}>Календар</Link>
                                {jwtToken !== "" &&
                                    <>
                                        <Link to="/admin" className={"list-group-item list-group-item-action"}>Адмін
                                            панель</Link>
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
                            toggleRefresh,
                        }}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;
