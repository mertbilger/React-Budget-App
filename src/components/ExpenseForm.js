import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [tutar, setTutar] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();


        const masraf = {
            id: uuidv4(),
            name: name,
            tutar: parseInt(tutar),
        }
        dispatch({
            type: 'MASRAF_EKLE',
            payload: masraf,
        })

    }


    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Gider İsmi</label>
                    <input
                        required="required"
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>

                </div>
                <div className="col-sm">
                    <label for="gider">Gideri Giriniz</label>
                    <input
                        required="required"
                        type="text"
                        className="form-control"
                        id="gider"
                        value={tutar}
                        onChange={(event => setTutar(event.target.value))}
                    ></input>
                </div>
                <div className="col-sm">
                    <button type="sumbit" className="btn btn-danger mt-4">
                        Ekle
                    </button>

                </div>

            </div>

        </form>
    )
}
export default ExpenseForm;