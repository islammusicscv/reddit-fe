import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const SubAdd = () => {

    const[sub, setSub] = useState("");
    const url = "http://localhost:3000/subs";
    const [redirect, setRedirect] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(sub);

        const data = {
            content: sub
        }
        try {
            const jwt = localStorage.getItem("jwt");
            const res = await axios.post(url,data,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            if (res.status === 201) {
                setRedirect(true);
            }
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                setErrorMessage(e.response.data.message);
            }
        }
    }
    if (redirect) {
        return <Navigate to="/sub" />;
    }
    return (
        <>
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" name="content" rows={3}
                          onChange={(e) => setSub(e.target.value)}></textarea>
                <button type="submit">Submit</button>
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </div>
        </form>
        </>
    );
}
export default SubAdd;