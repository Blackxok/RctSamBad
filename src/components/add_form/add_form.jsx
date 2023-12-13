import React from "react";
import "./add_form.css";

const AddForm = () => {
   return (
      <div className="add_form">
         <form className="add_form_content">
            <input type="text" placeholder="How much watch" />
            <input type="text" placeholder="What kind of movi" />
            <button className="add_button">Add</button>
         </form>
      </div>
   );
};

export default AddForm;
