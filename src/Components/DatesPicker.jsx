import "../App.css";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateContext from "../context/DateContext";

const DatesPicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { setDate } = useContext(DateContext);

  const dateConverter = (date) => {
    let corectMonth = "";
    const ku = date.toString().split(" ");
    if (ku[1] === "Dec") corectMonth = "12";
    if (ku[1] === "Nov") corectMonth = "11";
    if (ku[1] === "Oct") corectMonth = "10";
    if (ku[1] === "Sep") corectMonth = "09";
    if (ku[1] === "Aug") corectMonth = "08";
    if (ku[1] === "Jul") corectMonth = "07";
    if (ku[1] === "Jun") corectMonth = "06";
    if (ku[1] === "May") corectMonth = "05";
    if (ku[1] === "Apr") corectMonth = "04";
    if (ku[1] === "Mar") corectMonth = "03";
    if (ku[1] === "Feb") corectMonth = "02";
    if (ku[1] === "Jan") corectMonth = "01";
    const dateFormat = `${ku[3]}-${corectMonth}-${ku[2]}`;

    setDate(dateFormat);
  };

  return (
    <div className="datepicker_container">
      <DatePicker
        showIcon
        popperPlacement="right"
        selected={selectedDate}
        onChange={(date) => dateConverter(date)}
      />
    </div>
  );
};

export default DatesPicker;
