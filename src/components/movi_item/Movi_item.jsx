import React from "react";
import "./Movi_item.css";

const MoviItem = () => {
   return (
      <div className="movi_item">
         <div className="movi_item_content">
            <div className="item_title">
               <h3>Temur Empire</h3>
            </div>
            <div className="item_icons">
               <i className="fas fa-star"></i>
               <i className="fas fa-cookie"></i>
               <i className="fas fa-trash"></i>
            </div>
         </div>
      </div>
   );
};

export default MoviItem;
