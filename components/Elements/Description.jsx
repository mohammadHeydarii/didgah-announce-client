import Styles from "../../styles/Description.module.css";

const Description = ({ text }) => {
  return <span className={Styles.desc}>{text}</span>;
};

export default Description;
