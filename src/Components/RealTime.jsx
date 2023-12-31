import "../App.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Main from "../layout/Main";
import DateContext from '../context/DateContext'
import CountryContext from '../context/CountryContext'
import RefreshContext from '../context/RefreshContext'
import SearchBarCountryContext from "../context/SearchBarCountryContext";

const RealTime = () => {
  const [markers, setMarkers] = useState([]);
  const { date, setDate } = useContext(DateContext);
  const { country, setCountry } = useContext(CountryContext);
  const { refresh, setRefresh } = useContext(RefreshContext);
  const { setSearchBarCountry } = useContext(SearchBarCountryContext);

  const populateCountrySearchBar = (data) => {
    const searchBarCountrys = data.map((u) => {return u.country});
    const searchBarCountrysFiltered = [...new Set(searchBarCountrys)];
    setSearchBarCountry(searchBarCountrysFiltered)
  }

  useEffect(() => {
    const sendInfoToBackend = async () => {
      try {

        if(date !== ''){
          const res = await axios.post("http://localhost:8080/users/sort_by_date", {date});
          const userData = res.data.map((u) => {
            return { ...u, title: `User Location ${u.country}` };
          });
          setMarkers(userData);
        }

        setDate('')
      } catch (error) {
        console.log(error, "Error fetchink FE");
      }
    };
    sendInfoToBackend();

  }, [date, setDate,]);


  useEffect(() => {
    const sendInfoToBackend = async () => {
      try {

        if (country !== '') {
          const res = await axios.post("http://localhost:8080/users/sort_by_country", {country});
          const userData = res.data.map((u) => {
            return { ...u, title: `User Location ${u.country}` };
          });
          setMarkers(userData);
        }

        setCountry('')        
      } catch (error) {
        console.log(error, "Error fetchink FE");
      }
    }
    sendInfoToBackend();

  }, [country, setCountry]);
  

  useEffect(() => {
    const sendInfoToBackend = async () => {
      try {
        const res = await axios.get("http://localhost:8080/users/get");
        const userData = res.data.map((u) => {
          return { ...u, title: `User Location ${u.country}` };
        });
        populateCountrySearchBar(userData)
        setMarkers(userData);
        setRefresh('')
      } catch (error) {
        console.log(error, "Error fetchink FE");
      }
    }
    sendInfoToBackend();

  }, [refresh, setRefresh]);

  return <Main markers={markers} />;
};

export default RealTime;
