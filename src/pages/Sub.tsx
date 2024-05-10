import {SyntheticEvent, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

const Sub = () => {

    const[sub, setSub] = useState("");

    const url = "http://localhost:3000/subs";
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(sub);

        const data = {
            content: sub
        }
        const res = await axios.post(url,data);
        if (res.status === 201) {
            setRedirect(true);
        }
    }
    if (redirect) {
        return <Navigate to="/" />;
    }
    return (
        <>
        <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" name="content" rows={3}
                          onChange={(e) => setSub(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    );
}
export default Sub;