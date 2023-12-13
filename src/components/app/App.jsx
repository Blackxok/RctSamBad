import "../app/App.css";
import App_filter from "../app_filter/App_filter";
import App_info from "../app_info/App_info";
import Search_panel from "../search_panel/Search_panel";

function App() {
   return (
      <div className="app">
         <div className="content">
            <App_info />
            <App_filter />
            <Search_panel />
         </div>
      </div>
   );
}

export default App;
