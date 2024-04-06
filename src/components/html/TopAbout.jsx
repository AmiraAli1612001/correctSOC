import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TopAbout = () => {
  const { t } = useTranslation();

  return (
    <Box className="about-background">
      <Grid container sx={{ padding: { xs: "30px", md: "100px" } }}>
        <Grid item xs={11} md={4} className="aboutBox">
          <p>
            <span style={{ fontWeight: "bold" }}>{t("about")}</span>{" "}
            {t("about-us")}
          </p>
          <p>{t("about-top-p")}</p>
          <Box className="links">
            <Link
              to="/login"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              {t("create-small")}
            </Link>
            <Link
              to="/cyber-platform"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              style={{ margin: "0px 20px" }}
            >
              {t("discover-more")}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopAbout;
