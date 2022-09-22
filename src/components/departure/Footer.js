import classes from "./Departure.module.css";
import Label from "./Label";
import Button from "../UI/button/Button";


const Footer = (props) => {

return (
    <div className={`${classes.flex} ${classes['m-3']} ${classes.center}`}>
    <div className={classes['ml-2']}>
      <Label isSummary = {props.isSummary}></Label>
    </div>
    <div className={classes.push}>
      <Button label={props.label}></Button>
    </div>
  </div>
)
}
export default Footer