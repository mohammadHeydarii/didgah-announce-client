import { Grid } from "@material-ui/core";
import Styles from "../../styles/ContentPartial.module.css";
import ActionButton from "../Elements/ActionButton";
import Description from "../Elements/Description";
import Title from "../Elements/Title";

const ContentPartial = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        className={Styles.grid}
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Title text="به دیدگاه خوش آمدید" />
        </Grid>
        <Grid item md={7}>
          <Description text="دیدگاه یک پلتفرم جامع تحلیل و برسی رفتار مشتریان شماست. دیدگاه این امکان رو بهتون میده که رفتار مخاطبینتون رو در سایت متناسب با کانال ورودی تحلیل و برسی کنید " />
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          xs={6}
          md={6}
        >
          <ActionButton />
          <ActionButton />
          {/* <ActionButton />
          <ActionButton />
          <ActionButton />
          <ActionButton />
          <ActionButton /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default ContentPartial;
