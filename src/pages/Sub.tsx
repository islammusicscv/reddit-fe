import {useEffect, useState} from "react";
import axios from "axios";
import SubCard from "../components/SubCard.tsx";
import { useNavigate } from 'react-router-dom';

const Sub = () => {
    const[subs, setSubs] = useState([]);
    const[errorMessage, setErrorMessage] = useState('');

    const url = "http://localhost:3000/subs";

    const navigate = useNavigate();

    const loadSubs = async () => {
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            if (res.status === 200) {
                setSubs(res.data);
            }
        } catch (e) {
            if (axios.isAxiosError(e) && e.response) {
                setErrorMessage(e.response.data.message);
            }
        }
    }

    useEffect(() => {
        loadSubs();
    }, []);

    const addSub = () => {
        //return <Navigate to="/addSub" />;
        navigate('/addSub');
    }

    const removeSub = async (id:number) => {
        const url = `http://localhost:3000/subs/${id}`;
        try {
            const res = await axios.delete(url, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`
                }
            });
            if (res.status == 200) {
                //brisanje uspešno
                setSubs(subs.filter(sub => sub.id !== id));
            }
        } catch (e) {
            //error message
            setErrorMessage("Napaka pri brisanju");
        }
    }

    const editSub = (id:number) => {
        const url = `/editSub/${id}`;
        navigate(url);
    }

    return (
        <>
            <div className="container mt-5">
                <button className="btn btn-bd-primary" onClick={addSub}>Dodaj sub reddit</button>
            </div>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            subs.map((sub, i) => {
                                return <SubCard key={i} data={sub} onRemove={removeSub} editSub={editSub} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sub;