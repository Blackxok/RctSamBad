import React from "react";
import "./movi.css";
import MoviItem from "../movi_item/Movi_item";

function Movi() {
   return (
      <div className="app_movi">
         <MoviItem />
         <MoviItem />
         <MoviItem />
      </div>
   );
}

export default Movi;
