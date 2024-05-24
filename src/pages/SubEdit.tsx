import {SyntheticEvent, useEffect, useState} from "react";
import axios, {get} from "axios";
import {Navigate, useParams} from "react-router-dom";

const SubEdit = () => {
    const { id } = useParams<{id:string}>();

    const[sub, setSub] = useState("");
    const url = "http://localhost:3000/subs";
    const [redirect, setRedirect] = useState(false);
    const[errorMessage, setErrorMessage] = useState("");

    const getSubs = async () => {
        const url = `http://localhost:3000/subs/${id}`;
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                }
            });
            if (res.status === 200) {
                setSub(res.data.content);
            }
        } catch (e) {
            setErrorMessage("Napaka pri dostopu");
        }
    }

    useEffect(() => {
        getSubs();
    }, [id]);


    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(sub);

        const data = {
            content: sub
        }
        const url = `http://localhost:3000/subs/${id}`;
        try {
            const jwt = localStorage.getItem("jwt");
            const res = await axios.patch(url,data,{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            if (res.status === 200) {
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
                    <textarea
                        value={sub}
                        className="form-control" name="content" rows={3}
                        onChange={(e) => setSub(e.target.value)}></textarea>
                    <button type="submit">Submit</button>
                    {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
                </div>
            </form>
        </>
    );
}
export default SubEdit;