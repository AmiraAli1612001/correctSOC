import { Box, CardMedia, Grid } from "@mui/material";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import img from "../assets/images/NCSC_White.webp";
import TopAbout from "../components/html/TopAbout";
import Cyper from "../components/html/Cyper";
import DefDrawer from "./defDrawer";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  document.body.title = "about us";

  const { t } = useTranslation();

  let [noneOrBlock, setNoneOrBlock] = useState("none");
  // let persons = [
  //     {img : pOne , title :"CEO" , name : "Terry Lewis"},
  //     {img : pTwo , title : "HEAD OF OPERATIONS" ,name : "James Edwards"},
  //     {img : pThree , title :"HEAD OF SALES", name :"Jonathan Collins"},
  //     {img : pFour ,  title : "CHIEF TECHNOLOGY OFFICER" , name : "Mark Hobart"},
  //     {img : pFive , title :"CHIEF FINANCE OFFICER" , name : "Hayley Lewis"},
  //     {img : pSix , title :"CHIEF MARKETING OFFICER" , name :"Liz Gill"},

  // ]
  return (
    <Box>
      <title>{t("abt-us")}</title>

      <Header setNoneOrBlock={setNoneOrBlock} />
      <DefDrawer noneOrBlock={noneOrBlock} setNoneOrBlock={setNoneOrBlock} />
      <TopAbout />
      <Box className="paragraph">
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          <Grid item xs={10} md={5}>
            <p>{t("about-p-one")}</p>
          </Grid>
          <Grid item xs={10} md={5}>
            <p>{t("about-p-two")}</p>
          </Grid>
        </Grid>
      </Box>

      <Box className="driven">
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid item xs={10} md={5} lg={3}>
            <h1>
              <span style={{ fontWeight: "bold", display: "block" }}>
                {t("driven")}
              </span>{" "}
              {t("driven-by")}
            </h1>
            <p>{t("driven-p-one")}</p>
          </Grid>
          <Grid item xs={10} md={4}>
            <h1>
              <span style={{ fontWeight: "bold", display: "block" }}>
                {t("driven")}
              </span>{" "}
              {t("accomplish-by")}
            </h1>
            <p>{t("driven-p-two")}</p>
          </Grid>
        </Grid>
      </Box>
      <Cyper />

      <Box className="about-image">
        <CardMedia
          sx={{ margin: { xs: "0px auto" }, marginLeft: { lg: "200px" } }}
          component="img"
          image={img}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
