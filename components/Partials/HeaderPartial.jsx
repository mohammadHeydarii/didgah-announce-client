import { Grid } from "@material-ui/core";
import ContactWithUs from "../Elements/ContactWithUs";
import Logo from "../Elements/Logo";

const HeaderPartial = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <ContactWithUs />
      </Grid>
      <Grid item xs={6}>
        <Logo />
      </Grid>
    </Grid>
  );
};

export default HeaderPartial;
