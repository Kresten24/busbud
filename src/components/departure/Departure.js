import Header from "./Header";
import Footer from "./Footer";

import Info from "./Info";

import logo from "../../assets/logo.png";

const Departure = (props) => {
  
  return (
    <li>
      <Header logo={logo}></Header>

      <Info isSummary = {props.isSummary}
        departureTime={props.departureTime}
        departureDate={props.departureDate}
        departureLocation={props.departureLocation}
        departureCity={props.departureCity}
        arrivalTime={props.arrivalTime}
        arrivalDate={props.arrivalDate}
        arrivalLocation={props.arrivalLocation}
        arrivalCity={props.arrivalCity}
      ></Info>

      <Footer label={props.label} isSummary = {props.isSummary} />

    </li>
  );
};

export default Departure;
