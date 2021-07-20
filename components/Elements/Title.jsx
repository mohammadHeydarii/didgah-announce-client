import { Grid } from "@material-ui/core";
import Styles from "../../styles/Title.module.css";
const Title = ({ text }) => {
  return <h2 className={Styles.heading}>{text}</h2>;
};

export default Title;
