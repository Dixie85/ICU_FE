import "../App.css";
import CountryPucker from "../Components/CountryPucker";
import DatesPicker from "../Components/DatesPicker";
import NavButton from "../Components/NavButton";

const Header = () => {
  return (
    <header className="header">
      <nav className="header_navbar">
        <NavButton link={"realtime"} text={"REAL TIME VISITORS"} />
        <div className="search_utilities_container">
          <CountryPucker />
          <DatesPicker />
        </div>
        <NavButton link={"fake"} text={"FAKE VISITORS"} />
      </nav>
    </header>
  );
};

export default Header;
