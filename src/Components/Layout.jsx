import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";
import { DateProvider } from "../context/DateContext";
import { CountryProvider } from "../context/CountryContext";
import { RefreshProvider } from "../context/RefreshContext";
import { SearchBarCountryProvider } from "../context/SearchBarCountryContext";

const Layout = () => {
  return (
    <div className="App">
      <DateProvider>
        <CountryProvider>
          <RefreshProvider>
            <SearchBarCountryProvider>
              <Header />
              <Outlet />
              <Footer />
            </SearchBarCountryProvider>
          </RefreshProvider>
        </CountryProvider>
      </DateProvider>
    </div>
  );
};

export default Layout;
