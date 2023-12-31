import "../App.css";
import { useContext } from "react";
import MapComponent from "../Components/MapComponent";
import RefreshContext from "../context/RefreshContext";

const Main = ({ markers }) => {

  const { setRefresh } = useContext(RefreshContext);

  return (
    <div className="main">
      <div className="main_container">
        <h1 
        title="Refresh"
        className="main_h1"
        onClick={()=> {setRefresh('refresh')}
                }
        >I 👁️ Y👁️U</h1>
        <MapComponent markers={markers} />
      </div>
    </div>
  );
};

export default Main;
