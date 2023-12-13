import React from "react";
import "./App_filter.css";

function App_filter() {
   return (
      <div className="App_filter">
         <div className="App_filter_content">
            <input
               type="text"
               className="App_filter_input"
               placeholder="search"
            />
            <button>All</button>
            <button>Top 100</button>
            <button>The best</button>
         </div>
      </div>
   );
}

export default App_filter;
