import React, { useContext } from "react";
import Item from "./Items";
import { AppContext } from "../context/AppContext";

const HarcamaListesi = () => {
    const { harcamalar } = useContext(AppContext);
    return (
        <ul className="list-group">
            {harcamalar.map((harcama) => (
                < Item id={harcama.id} name={harcama.name} tutar={harcama.tutar} />

            ))}

        </ul>
    )

}
export default HarcamaListesi;