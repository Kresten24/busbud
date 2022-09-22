import classes from "../departure/Departure.module.css";
import Button from "./button/Button";
import optionClasses from "./Option.module.css";

const Option = (props) => {
  return (
    <div
      className={`${classes.flex} ${classes["m-1"]} ${classes["ml-2"]} ${optionClasses.center}`}
    >
      <div>{props.option}</div>
      <div className={classes.push}>
        <Button label={props.label}></Button>
      </div>
    </div>
  );
};

export default Option;
