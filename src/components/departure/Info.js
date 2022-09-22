import arrowIcon from "../../assets/arrow.png";
import classes from "./Departure.module.css";
import infoClasses from './Info.module.css'

const Info = (props) => {
  const isSummary = props.isSummary;
  return (
    <div className={`${classes.flex} ${classes['m-3']}`}>
      <div className={classes['ml-3']}>
        <div className={`${classes['ml-05']} ${infoClasses['codec-pro-bold']}`}>{props.departureTime}</div>
        {isSummary && <div className={`${classes['ml-05']} ${infoClasses['codec-pro-bold']}`}>{props.departureDate}</div>}
        <div className={classes['ml-025']}>{props.departureLocation}</div>
        <div className={classes['ml-025']}>{props.departureCity}</div>
        <div>MAP</div>
      </div>

      <div className={`${classes['mr-10']} ${classes['ml-10']}`}>
        <img src={arrowIcon}></img>
      </div>
  
      <div>
        <div className={`${classes['ml-05']} ${infoClasses['codec-pro-bold']}`}>{props.arrivalTime}</div>
        {isSummary && <div className={`${classes['ml-05']} ${infoClasses['codec-pro-bold']}`}>{props.arrivalDate}</div>}
        <div className={classes['ml-025']}>{props.arrivalLocation}</div>
        <div className={classes['ml-025']}>{props.arrivalCity}</div>
        <div>MAP</div>
      </div>
    </div>
  );
};

export default Info;
