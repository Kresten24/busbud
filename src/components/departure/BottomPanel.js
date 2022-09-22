import classes from "./BottomPanel.module.css";
import Option from "../UI/Option";

const TopPanel = (props) => {
  return (
    <div className={classes.bottom}>
      {props.children}
      <Option
        option="Regular"
        label="45"
      ></Option>
      <hr></hr>
      <Option
        option="First Class"
        label="95"
      ></Option>
    </div>
  );
};

export default TopPanel;
