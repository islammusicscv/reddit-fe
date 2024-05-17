import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Login = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[errorMessage, setErrorMessage] = useState("");

    const url = "http://localhost:3000/auth/login";
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const data = {
            email,
            password,
        }

        console.log(data);

        try {
            const res = await axios.post(url, data);

            if (res.status === 201) {
                setRedirect(true);
                //shranim si nekam JWT za kasnejšo uporabo
                const token = res.data;
                localStorage.setItem("jwt", token);

            }
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                setErrorMessage(e.response.data.message);
            } else {
                setErrorMessage("Napaka pri prjavi");
            }
        }

    }

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <>
        <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    onChange={e =>setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    onChange={e =>setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </form>
        </main>
        </>
    )
}
export default Login;