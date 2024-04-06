import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Grid,
  Toolbar,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../assets/images/logo-2.png";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Logindrawer from "./logindrawer";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  document.body.title = "pricing";

  let [lang, setLang] = useState(false);

  let [noneOrBlock, setNoneOrBlock] = useState("none");
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  let accordion = [
    {
      summary: t("ask-1"),
      details: t("ans-1"),
    },
    {
      summary: t("ask-2"),
      details: t("ans-2"),
    },
    {
      summary: t("ask-3"),
      details: t("ans-3"),
    },
    {
      summary: t("ask-4"),
      details: t("ans-4"),
    },
    {
      summary: t("ask-5"),
      details: t("ans-5"),
    },
    {
      summary: t("ask-6"),
      details: t("ans-6"),
    },
    {
      summary: t("ask-7"),
      details: t("ans-7"),
    },
  ];

  return (
    <Box className="price">
      <title>pricing</title>
      <Logindrawer setNoneOrBlock={setNoneOrBlock} noneOrBlock={noneOrBlock} />
      <AppBar sx={{ backgroundColor: "#222" }}>
        <Toolbar>
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Grid
              item
              sx={{ display: "flex", alignItems: "center", gap: "30px" }}
            >
              <Button
                sx={{ color: "white", display: { xs: "flex", md: "none" } }}
                onClick={() => {
                  setNoneOrBlock("block");
                }}
              >
                <MenuIcon />
              </Button>
              <CardMedia
                component="img"
                image={logo}
                sx={{ width: "220px", height: "50px" }}
              />
              <Typography
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    fontSize: "25px",
                    color: "white",
                  },
                }}
                variant="h1"
                color="initial"
              >
                <span
                  style={{
                    fontWeight: "bold",
                    marginRight: "8px",
                    marginLeft: "8px",
                  }}
                >
                  {t("cyber")}
                </span>{" "}
                {t("s-portal")}
              </Typography>
            </Grid>

            <Grid
              item
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Box className="lang" sx={{ cursor: "pointer" }}>
                <LanguageIcon
                  className="icon"
                  onClick={() => {
                    setLang(!lang);
                  }}
                />
                <Box className="drop" sx={{ display: lang ? "block" : "none" }}>
                  <p
                    onClick={() => {
                      i18n.changeLanguage("en");
                      document.body.style.direction = "ltr";
                    }}
                  >
                    English
                  </p>
                  <p
                    onClick={() => {
                      i18n.changeLanguage("ar");
                      document.style.direction = "rtl";
                    }}
                  >
                    عربي
                  </p>
                </Box>
              </Box>

              <Button
                sx={{ color: "white" }}
                onClick={() => {
                  navigate("/contact");
                }}
              >
                <SupportAgentIcon />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid
        container
        className="container"
        sx={{ paddingTop: "150px", paddingBottom: "50px" }}
      >
        <Grid
          item
          className="box"
          xs={10}
          md={3.5}
          lg={2.5}
          sx={{ paddingTop: "20px" }}
        >
          <p className="one">{t("free")}</p>
          <p className="two">{t("cyber")}</p>
          <h1>{t("community")}</h1>
          <p className="three">{t("price-p-one")}</p>
          <h2>{t("free")}</h2>
          <p className="three"> {t("comm-p-two")} </p>
          <p className="three"> {t("comm-p-three")} </p>
          <p className="three"> {t("comm-p-four")} </p>
          <Link className="signup" to="/login">
            {" "}
            {t("sign-up")}{" "}
          </Link>
          <p className="four">
            {t("feature")}
            <ErrorOutlineIcon sx={{ fontSize: "15px", fontWeight: "bold" }} />
          </p>
          <p className="five">
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />{" "}
            {t("comm-h-1")}
          </p>
          <p className="five">
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />{" "}
            {t("comm-h-2")}
          </p>
          <p className="five">
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />{" "}
            {t("comm-h-3")}
          </p>
          <p className="five">
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />{" "}
            {t("comm-h-4")}
          </p>
          <p className="five">
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />{" "}
            {t("comm-h-5")}
          </p>
          <p className="five">
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />{" "}
            {t("comm-h-6")}
          </p>
          <p className="five">
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />{" "}
            {t("comm-h-7")}
          </p>
          <p className="five">
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />{" "}
            {t("comm-h-8")}
          </p>
          <p className="five">
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />{" "}
            {t("comm-h-9")}
          </p>
          <Link className="all">
            {t("comm-h-10")}
            <ArrowForwardIcon
              sx={{
                marginLeft: "5px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            />
          </Link>
        </Grid>
        <Grid item className="box" xs={10} md={3.5} lg={2.5}>
          <p className="zero"> {t("most-pop")} </p>
          <p className="one"> {t("discount")} </p>
          <p className="two"> {t("cyber")} </p>
          <h1> {t("prof")} </h1>
          <p className="three">{t("prof-p-one")}</p>
          <h2>{t("prof-price")}</h2>
          <p className="three"> {t("comm-p-two")} </p>
          <p className="three">{t("comm-p-three")}</p>
          <p className="three">{t("comm-p-five")}</p>
          <Link className="signup" to="/login">
            {t("sign-up")}
          </Link>
          <p className="four">
            {t("feature")}

            <ErrorOutlineIcon sx={{ fontSize: "15px", fontWeight: "bold" }} />
          </p>
          <p className="bold">
            <AddIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-1")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
                marginRight: "5px",
              }}
            />
            {t("prof-h-2")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-3")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-4")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-4")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-5")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-6")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-7")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-8")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-9")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-10")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-11")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-12")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-13")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-14")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("prof-h-15")}
          </p>
          <Link className="all">
            {t("comm-h-10")}
            <ArrowForwardIcon
              sx={{
                marginLeft: "5px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            />
          </Link>
        </Grid>
        <Grid
          item
          className="box"
          xs={10}
          md={3.5}
          lg={2.5}
          sx={{ paddingTop: "20px" }}
        >
          <p className="one">{t("discount")}</p>
          <p className="two">{t("cyber")}</p>
          <h1>{t("enter")}</h1>
          <p className="three">{t("enter-p-one")}</p>
          <h2>{t("enter-price")}</h2>
          <p className="three"> {t("comm-p-two")} </p>
          <p className="three">{t("comm-p-three")}</p>
          <p className="three">{t("comm-p-five")}</p>
          <Link to="/login" className="signup">
            {t("sign-up")}
          </Link>
          <p className="four">
            {t("feature")}

            <ErrorOutlineIcon sx={{ fontSize: "15px", fontWeight: "bold" }} />
          </p>
          <p className="bold">
            <AddIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("enter-h-1")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("enter-h-2")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("enter-h-3")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("enter-h-4")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("enter-h-5")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("enter-h-6")}
          </p>
          <p className="five">
            {" "}
            <CheckIcon
              sx={{
                marginRight: "5px",
                color: "#81c784",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
            {t("enter-h-7")}
          </p>
          <Link className="all">
            {t("comm-h-10")}
            <ArrowForwardIcon
              sx={{
                marginLeft: "5px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            />
          </Link>
        </Grid>
      </Grid>
      <Box className="asks">
        <h1 style={{ fontSize: "25px", marginTop: "30px" }}>{t("ask")}</h1>
        <Grid container sx={{ margin: "auto" }}>
          {accordion.map((item) => {
            return (
              <Grid item xs={10} md={8} sx={{ margin: "auto" }}>
                <Accordion sx={{ backgroundColor: "#111" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ backgroundColor: "#222", color: "white" }}
                  >
                    {item.summary}
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#333",
                      color: "lightgray",
                      marginBottom: "20px",
                    }}
                  >
                    {item.details}
                  </AccordionDetails>
                </Accordion>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        className="ask-footer"
        sx={{
          marginTop: "40px",
          padding: "5px",
          backgroundColor: "#222",
          textAlign: "center",
        }}
      >
        <p>
          {t("foot-price")}
          <span>
            <AdbIcon />{" "}
          </span>{" "}
          <Link>{t("foot-get")}</Link>
        </p>
      </Box>
    </Box>
  );
};

export default Pricing;
