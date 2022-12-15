import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Kalan = () => {
    const { harcamalar, butce } = useContext(AppContext);
    const totalExpenses = harcamalar.reduce((total, item) => {
        return (total = total + item.tutar);
    }, 0)
    const alertType = totalExpenses > butce ? 'alert-danger' : 'alert-success';
    const Ktutar = butce - totalExpenses;
    return (
        <div className={`alert ${alertType}`}>
            <span>
                Kalan Bakiye :{Ktutar} TL
            </span>
        </div>
    )
}
export default Kalan;