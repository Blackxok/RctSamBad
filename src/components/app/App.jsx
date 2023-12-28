import { useRef } from "react";
import "./App.css";

const User = () => {
   const cRef = useRef();

   return (
      <div className="container">
         <div className="inputGroup">
            <input type="text" className="input_1" placeholder="number" />
            <input ref={cRef} type="text" className="input_2" placeholder="password" />
         </div>
      </div>
   );
};

const App = () => {
   return (
      <div className="container">
         <User />
      </div>
   );
};

export default App;
