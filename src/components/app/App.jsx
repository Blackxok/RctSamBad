import "../app/App.css";
import App_filter from "../app_filter/App_filter";
import App_info from "../app_info/App_info";
import Search_panel from "../search_panel/Search_panel";

function App() {
   return (
      <>
         <div>
            <App_filter />
            <App_info />
            <Search_panel />
         </div>
      </>
   );
}

export default App;
