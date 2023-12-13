import AddForm from "../add_form/add_form";
import "../app/App.css";
import App_filter from "../app_filter/App_filter";
import App_info from "../app_info/App_info";
import Movi from "../movi/movi";

function App() {
   return (
      <div className="app">
         <div className="content">
            <App_info />
            <App_filter />
            <Movi />
            <AddForm />
         </div>
      </div>
   );
}

export default App;
