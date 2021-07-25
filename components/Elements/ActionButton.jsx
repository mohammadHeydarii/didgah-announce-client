import Styles from "../../styles/ActionButton.module.css";

import { Grid } from "@material-ui/core";

const ActionButton = () => {
  return (
    <Grid item>
      <button className={Styles.customBtn}>
        میخوام اولین نفری باشم که خبر دار میشم
      </button>
    </Grid>
  );
};

export default ActionButton;
