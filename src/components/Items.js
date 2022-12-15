import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const Item = (props) => {
    const { dispatch } = useContext(AppContext);

    const Deleteitem = () => {
        dispatch({
            type: 'HARCAMA_SİL',
            payload: props.id,
        })
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span class="badge rounded-pill text-bg-warning p-3"> {props.tutar}</span>
                <TiDelete size="1.5em" onClick={Deleteitem}></TiDelete>
            </div>
        </li>
    )

}
export default Item;