import passanger from "../../assets/passanger.png";
import busIcon from "../../assets/bus.png";
import clockIcon from "../../assets/clock.png";
import classes from "./Departure.module.css";

const Label = (props) => {
  const isSummary = props.isSummary;
  return (
    <div className={`${classes.flex} ${classes.center}`}>
      <div className={classes['mr-025']}>
        <img src={busIcon}></img>
      </div>
      <div className={classes['mr-1']}>Bus</div>
      <div className={classes['mr-025']}>
        <img src={clockIcon}></img>
      </div>
      <div className={classes['mr-1']}>2</div>
      {isSummary && (
        <>
          <div className={classes['mr-1']}>
            <img src={passanger}></img>
          </div>
          <div className={classes['mr-1']}>2</div>
        </>
      )}
    </div>
  );
};

export default Label;
