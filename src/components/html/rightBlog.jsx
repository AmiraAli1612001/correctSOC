import { CardMedia, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/blogform.webp";
import { t } from "i18next";

const RightBlog = () => {
  return (
    <Grid item xs={10} lg={2} className="right">
      <form>
        <label>
          {t("email")}
          <span>*</span>
        </label>
        <input type="text" name="" id="" />
        <input type="submit" className="sub" value={t("submit")} />
      </form>
      <h2>{t("don't-miss")}</h2>
      <CardMedia component="img" image={img} />
      <h2>{t("cate")}</h2>
      <ul>
        <li>
          <Link to="/blog">{t("CorrectSOC")}</Link>
        </li>
        <li>
          <Link to="/cyber-platform">{t("cyber-security")}</Link>
        </li>
      </ul>
    </Grid>
  );
};

export default RightBlog;
