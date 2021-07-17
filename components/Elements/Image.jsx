import Styles from "../../styles/Image.module.css";

const Image = ({ img }) => {
  return <img className={Styles.imageResponsive} src={img} />;
};

export default Image;
