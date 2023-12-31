import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Fake from "./Components/Fake";
import RealTime from "./Components/RealTime";
import Home from "./layout/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/realtime" element={<RealTime />} />
        <Route path="/fake" element={<Fake />} />
      </Route>
    </Routes>
  );
}

export default App;
