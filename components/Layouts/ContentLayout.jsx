import { Grid } from "@material-ui/core";

import Image from "../Elements/Image";
import ContactWithUs from "../Elements/ContactWithUs";
import Logo from "../Elements/Logo";
import ContentPartial from "../Partials/ContentPartial";

const ContentLayout = () => {
  return (
    <>
      <Grid container direction="row">
        <Grid item xs={6}>
          <Logo />
        </Grid>
        <Grid item xs={6}>
          <ContactWithUs />
        </Grid>
      </Grid>

      <Grid
        container
        direction="row-reverse"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={5}>
          <Image img="/images/Onboarding-bro.svg" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContentPartial />
        </Grid>
      </Grid>
    </>
  );
};

export default ContentLayout;
