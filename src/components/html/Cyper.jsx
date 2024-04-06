import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Cyper = () => {
  const { t } = useTranslation();

  return (
    <Box className="about-discover">
      <Box className="center">
        <p>{t("use")}</p>
        <h1 className="h1" style={{ fontWeight: "lighter" }}>
          <span style={{ fontWeight: "bold" }}>{t("cyber")}</span>{" "}
          {t("platform")}
        </h1>
        <h2 style={{ fontWeight: "lighter" }}>{t("complete")}</h2>
        <Box className="links">
          <Link to="/login" style={{ transform: "translateY(25%)" }}>
            {t("create-small")}
          </Link>
          <Link to="/cyber-platform" style={{ margin: "0px 20px" }}>
            {t("discover-more")}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Cyper;
