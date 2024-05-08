import { Box, CardMedia } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import Icons from "../components/html/Icons";
import Sections from "../components/html/Sections";
import Roboways from "../components/html/Roboways";
import img from "../assets/images/NCSC_White.webp";
import Home from "../components/html/Home";
import Monitor from "../assets/images/monitor.webp";
import DefDrawer from "./defDrawer";
import Comma from "../components/html/Comma";
import Who from "../components/html/Who";
import OurBlog from "../components/html/OurBlog";
import computer from "../assets/images/computer.webp";
import image from "../assets/images/background.webp";
import { t } from "i18next";

const Cyber = () => {
  document.body.title = "cyber platform";

  let home = {
    title: t("cyber-platform"),
    text: t("cyber-p"),
    icon: Monitor,
    img: computer,
    background: image,
  };
  let [noneOrBlock, setNoneOrBlock] = useState("none");

  return (
    <Box>
      <title>{t("cyber-platform")}</title>
      <Header setNoneOrBlock={setNoneOrBlock} />
      <DefDrawer noneOrBlock={noneOrBlock} setNoneOrBlock={setNoneOrBlock} />
      <Home home={home} />
      <Icons />
      <Sections />
      <Roboways />

      <Comma />
      <Who />
      <OurBlog />
      <Box className="about-image">
        <CardMedia sx={{ margin: "auto" }} component="img" image={img} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Cyber;
