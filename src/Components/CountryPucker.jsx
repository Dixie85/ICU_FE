import "../App.css";
import CountryContext from "../context/CountryContext";
import SearchBarCountryContext from "../context/SearchBarCountryContext";
import SearchBar from "./SearchBar";
import { useContext, useState } from "react";

const CountryPucker = () => {
  const { searchBarCountry } = useContext(SearchBarCountryContext);
  const [filteredData, setFilteredData] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const { setCountry } = useContext(CountryContext);

  const handleSearch = async () => {
    const countryMatch = searchBarCountry.find(
      (coun) => coun.toLowerCase() === searchByName.toLowerCase()
    );
    if (!countryMatch) {
      console.log("NO match");
    } else {
      setCountry(searchByName);
    }
  };

  const selectCountryName = (e, name) => {
    e.preventDefault();
    setSearchByName(name);
    setFilteredData([]);
  };

  return (
    <div className="country_search">
      <div className="country_search_container">
        <SearchBar
          searchBarCountry={searchBarCountry}
          setFilteredData={setFilteredData}
          searchByName={searchByName}
          setSearchByName={setSearchByName}
        />

        <button onClick={handleSearch}> Go </button>
      </div>

      <div className="dropDownSearchBox">
        {filteredData.map((coun, i) => {
          return (
            <div
              key={i}
              className="dropDownSearchBox_element"
              onClick={(e) => selectCountryName(e, coun)}
            >
              <span>{coun}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryPucker;
