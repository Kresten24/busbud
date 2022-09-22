import wifi from "../../assets/wifi.png";
import eTicket from "../../assets/eTicket.png";
import bathroom from "../../assets/bathroom.png";

import classes from "./Departure.module.css";

const Header = (props) => {
  return (
    <div className={`${classes.flex} ${classes["m-2"]}`}>
      <div className={classes["ml-3"]}>
        <img src={props.logo}></img>
      </div>
      <div className={`${classes.push} ${classes["mr-2"]}`}>
        <img src={wifi}></img>
        <img src={bathroom}></img>
        <img src={eTicket}></img>
      </div>
    </div>
  );
};

export default Header;
