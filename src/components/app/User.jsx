import { useRef, useState } from "react";

const User = () => {
   // Hooks
   const [input_1, setInput_1] = useState("");
   const [input_2, setInput_2] = useState("");
   const cRef = useRef(null);
   const cRef_2 = useRef(null);
   const cRef_3 = useRef(null);

   // functions
   const cngInput = (e) => {
      let val = e.target.value;
      setInput_1(val);
   };
   const cngInput_2 = (e) => {
      let val = e.target.value;
      setInput_2(val);
   };

   //    if (input_1.length === 3) {
   //       cRef_2.current.focus();
   //    }
   input_1.length === 3 && cRef_2.current.focus();

   //    ----------------------------------------------------------
   return (
      <div className="container">
         <div className="inputGroup">
            <input
               ref={cRef}
               type="text"
               className="input_1"
               placeholder="number"
               onChange={cngInput}
               value={input_1}
            />
            <input
               ref={cRef_2}
               type="text"
               className="input_2"
               placeholder="password"
               onChange={cngInput_2}
               value={input_2}
            />
            <input
               ref={cRef_3}
               type="text"
               className="input_3"
               placeholder="code"
            />
         </div>
      </div>
   );
};

export default User;
