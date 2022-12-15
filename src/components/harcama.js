import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"

const Harcanan = () => {
    const { harcamalar } = useContext(AppContext);

    const totalExpenses = harcamalar.reduce((total, item) => {
        return (total += item.tutar)
    }, 0)
    return (
        <div className="alert alert-danger">
            <span>
                Harcanan Tutar :{totalExpenses} TL
            </span>

        </div>
    )

}
export default Harcanan;