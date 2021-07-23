import { Grid } from "@material-ui/core";
import Styles from "../../styles/ContentPartial.module.css";
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
      >
        <Grid item>
          <Title text="به دیدگاه خوش آمدید" />
        </Grid>
        <Grid item md={5}>
          <Description text="دیدگاه یک پلتفرم جامع تحلیل و برسی رفتار مشتریان شماست. دیدگاه این امکان رو بهتون میده که رفتار مخاطبینتون رو در سایت متناسب با کانال ورودی تحلیل و برسی کنید " />
        </Grid>
      </Grid>
    </>
  );
};

export default ContentPartial;
