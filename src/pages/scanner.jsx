import { Box, CardMedia, Grid } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import Roboways from "../components/html/Roboways";
import img from "../assets/images/NCSC_White.webp";
import Home from "../components/html/Home";
import { Link } from "react-router-dom";
import imgOne from "../assets/images/grid-one.webp";
import "../css/shares.css";
import "../css/style.css";
import DefDrawer from "./defDrawer";
import Comma from "../components/html/Comma";
import Who from "../components/html/Who";
import Monitor from "../assets/images/monitor.webp";
import computer from "../assets/images/computer.webp";
import { useTranslation } from "react-i18next";

import OurBlog from "../components/html/OurBlog";
import image from "../assets/images/background.webp";
const Scanner = () => {
  const { t } = useTranslation();
  document.body.title = "vulnerability scanner";

  let home = {
    title: t("vulnerability-scanner"),
    text: t("scanner-back-p"),
    icon: Monitor,
    img: computer,
    background: image,
  };
  let [noneOrBlock, setNoneOrBlock] = useState("none");
  return (
    <Box>
      <title>vulnerability scanner</title>
      <Header setNoneOrBlock={setNoneOrBlock} />
      <DefDrawer
        noneOrBlock={noneOrBlock}
        setNoneOrBlock={setNoneOrBlock}
        // PermanentOrTemporary={PermanentOrTemporary}
        // setPermanentOrTemporary={setPermanentOrTemporary}
        // drawerDir={drawerDir}
      />
      <Home home={home} />
      <Box className="sections">
        <Grid
          container
          className="one"
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "40px 20px",
            alignItems: "center",
          }}
        >
          <Grid
            container
            className="one"
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "40px 20px",
              alignItems: "center",
            }}
          >
            <Grid item xs={10} md={5}>
              <CardMedia
                sx={{
                  maxWidth: { xs: "300px", md: "380px" },
                  height: { xs: "310px", md: "390px" },
                  margin: "auto",
                }}
                component="img"
                image={imgOne}
              />
            </Grid>
            <Grid item xs={10} md={5} sx={{ color: "white" }}>
              <h1>{t("section-vulnerability-h1")}</h1>
              <h2>{t("section-vulnerability-h2")}</h2>
              <ul>
                <li>{t("section-li-1")}</li>
                <li>{t("section-li-2")}</li>
                <li>{t("section-li-3")}</li>
                <li>{t("section-li-4")}</li>
                <li>{t("section-li-5")}</li>
              </ul>
              <p>{t("section-p-one")}</p>
              <p>{t("section-p-two")}</p>
              <i className="small">
                {t("section-i")}
                <ins>{t("section-ins")}</ins>
              </i>
              <Link>{t("create-small")}</Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Roboways />
      <Comma />
      <Who />
      <OurBlog />

      <Box className="about-image">
        <CardMedia
          sx={{ transform: "translateX(50px)" }}
          component="img"
          image={img}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Scanner;
