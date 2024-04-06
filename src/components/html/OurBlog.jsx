import { Box, CardMedia, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ohh from "../../assets/images/ohh.webp";
import table from "../../assets/images/table.webp";
import { t } from "i18next";
const OurBlog = () => {
  return (
    <Box className="ourBlog">
      <h1>{t("our-blogs")}</h1>
      <Grid
        container
        sx={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <Grid
          item
          xs={11}
          md={5}
          lg={3.2}
          className="item"
          sx={{ paddingBottom: "30px" }}
        >
          <CardMedia component="img" image={ohh} />
          <Link>{t("blog-link-1")}</Link>
          <p className="one">{t("blog-p-1")}</p>
          <p className="two">
            {t("blog-p-2")}
            {/* <Link className="read">{t("blog-link-2")}</Link> */}
          </p>
        </Grid>

        <Grid
          item
          xs={11}
          md={5}
          lg={3.2}
          className="item"
          sx={{ paddingBottom: "30px" }}
        >
          <CardMedia component="img" image={table} />
          <Link>{t("blog-3-link-1")}</Link>
          <p className="one">{t("blog-3-p-1")}</p>
          <p className="two">{t("blog-3-p-2")}</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurBlog;
