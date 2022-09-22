import classes from "./Button.module.css";
import rightArrow from '../../../assets/rightArrow.png'

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {`${props.label}`} <img src={rightArrow}></img>
    </button>
  );
};

export default Button;
