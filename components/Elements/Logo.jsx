import Styles from "../../styles/Logo.module.css";
import Image from "./Image";

const Logo = () => {
  return (
    <>
      <div className={Styles.backgroundLogo}></div>
      <img src="/logo.png" className={Styles.didgahLogo} />
    </>
  );
};

export default Logo;
