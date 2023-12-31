import '../App.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main_container">
        <h1 className="main_h1">I 👁️ Y👁️U</h1>
        <h2>Choose your preferred data</h2>
        <div>
          <button className="home_button" onClick={() => navigate(`/realtime`)}>REAL</button>
          <span>OR</span>
          <button className="home_button" onClick={() => navigate(`/fake`)}>FAKE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
