import {useState} from "react";
import Input from "./form/input";
import {useNavigate, useOutletContext} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {setJwToken} = useOutletContext();
    const {setAlertClassName} = useOutletContext();
    const {setAlertMessage} = useOutletContext();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "admin@example.com") {
            setJwToken("abc")
            setAlertClassName("d-none")
            setAlertMessage("")
            navigate("/")
        } else {
            setAlertClassName("alert-danger")
            setAlertMessage("invalid credentials")
        }
    };

    return <>
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr/>
            <form onSubmit={handleSubmit}>
                <Input
                    title="Email"
                    type="email"
                    className="form-control"
                    name="email"
                    autoComplete="email-new"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    title="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    autoComplete="password-new"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <hr/>

                <input type="submit"
                       className="btn btn-primary"
                       value="Login"
                />
            </form>
        </div>
    </>
}

export default Login