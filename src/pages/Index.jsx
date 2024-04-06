import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Footer from "../components/html/Footer";
import Header from "../components/html/Header";
import { Link } from "react-router-dom";
import videos from "../assets/images/h-video.mp4";
import Icons from "../components/html/Icons";
import Sections from "../components/html/Sections";
import Cyper from "../components/html/Cyper";
import img from "../assets/images/NCSC_White.webp";

import Roboways from "../components/html/Roboways";
import DefDrawer from "./defDrawer";
import { useTranslation } from "react-i18next";

const Index = () => {
  document.body.title = "Home";
  const { t } = useTranslation();

  let [noneOrBlock, setNoneOrBlock] = useState("none");
  return (
    <Box>
      <title>Home</title>
      <Header setNoneOrBlock={setNoneOrBlock} />
      <DefDrawer noneOrBlock={noneOrBlock} setNoneOrBlock={setNoneOrBlock} />
      <Box>
        <Box
          className="video"
          sx={{
            overflow: "hidden",
            position: "relative",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "99.5vh",
          }}
        >
          <video
            src={videos}
            autoPlay
            loop
            muted
            style={{ position: "absolute", zIndex: "-1" }}
          ></video>
          <Box className="layer"></Box>

          <Box
            sx={{
              position: "absolute",
              transform: "translateY(-50px)",
              marginTop: { xs: "20px", lg: "0px" },
            }}
          >
            <Typography variant="h1" color="initial">
              {t("cyber-security")}
            </Typography>
            <Typography variant="h5" color="initial" sx={{ fontSize: "18px" }}>
              {t("demy")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
                marginTop: "20px",
              }}
            >
              <Link to="/login" style={{ textTransform: "capitalize" }}>
                {t("create-small")}
              </Link>
              <Link to="/cyber-platform">{t("learn-more")}</Link>
            </Box>
          </Box>
        </Box>
        <Icons />
        <Sections />
        <Box
          className="AI-bg"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              padding: { xs: "50px 0px", md: "30px" },
            }}
          >
            <Grid
              item
              lg={5}
              sx={{ fontSize: "16px", marginLeft: { xs: "10px", md: "90px" } }}
            >
              <p className="one" style={{ fontSize: "48px" }}>
                {" "}
                <span style={{ fontWeight: "900", wordSpacing: "-1px" }}>
                  {t("why")} <span>{t("robo")}</span>
                </span>
                <span style={{ fontWeight: "lighter" }}>{t("shadow")}</span>
              </p>
              <p className="p">{t("why-p-1")}</p>
              <p className="p">{t("why-p-2")}</p>
              <p className="p">{t("why-p-3")}</p>
              <p className="p">{t("why-p-4")}</p>
            </Grid>
          </Grid>
        </Box>
        <Cyper />
        <Roboways />
        <Box
          className="about-image"
          sx={{
            height: { xs: "70vh", md: "40vh" },
          }}
        >
          <CardMedia sx={{ margin: "auto" }} component="img" image={img} />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Index;
