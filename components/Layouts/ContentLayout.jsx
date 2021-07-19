import { Grid } from "@material-ui/core";

import Image from "../Elements/Image";
import ContactWithUs from "../Elements/ContactWithUs";
import Logo from "../Elements/Logo";

const ContentLayout = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <ContactWithUs />
        </Grid>
        <Grid item xs={6}>
          <Logo />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <Image img="/images/Onboarding-bro.svg" />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </>
  );
};

export default ContentLayout;
