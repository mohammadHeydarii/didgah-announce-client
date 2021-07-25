import { Grid } from "@material-ui/core";
import Styles from "../../styles/Layout.module.css";

import Image from "../Elements/Image";
import ContactWithUs from "../Elements/ContactWithUs";
import Logo from "../Elements/Logo";
import ContentPartial from "../Partials/ContentPartial";

const ContentLayout = () => {
  return (
    <>
      <Grid container direction="row" className={Styles.grid}>
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
        <Grid item xs={12} md={5}>
          <Image img="/images/Onboarding-bro.svg" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContentPartial />
        </Grid>
      </Grid>
    </>
  );
};

export default ContentLayout;
