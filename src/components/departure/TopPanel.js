import classes from "./TopPanel.module.css";
import flashIcon from "../../assets/flash.png";

const TopPanel = (props) => {
  return (
    <div className={classes.top}>
      <div className={`${classes.header} ${classes["mx-1"]}`}>
        <img src={flashIcon}></img>Fastest
      </div>
      {props.children}
    </div>
  );
};

export default TopPanel;
