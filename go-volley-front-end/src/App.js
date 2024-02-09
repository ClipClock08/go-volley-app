import {Link, Outlet, useNavigate} from "react-router-dom";
import {useState} from "react";
import Alert from "./components/Alert";

function App() {
    const [jwToken, setJwToken] = useState("")
    const [alertMessage, setAlertMessage] = useState("")
    const [alertClassName, setAlertClassName] = useState("d-none")

    const navigate = useNavigate()

    const logOut = () => {
        setJwToken("")
        navigate("/login")
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className="col">
                    <h1 className={"mt-3"}>Go Volley App</h1>
                </div>
                <div className="col text-end">
                    {jwToken === ""
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
                            {jwToken !== "" &&
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
                        jwToken,
                        setJwToken,
                        setAlertClassName,
                        setAlertMessage
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default App;
