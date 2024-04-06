import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import {
  Box,
  CardMedia,
  Divider,
  Drawer,
  Grid,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import eye from "../assets/images/eye.svg";
import hand from "../assets/images/hand.svg";
import scanner from "../assets/images/scanner.svg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "../css/shares.css";
import "../css/style.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useTranslation } from "react-i18next";

const DefDrawer = (props) => {
  const { t } = useTranslation();

  //
  let navigate = useNavigate();
  let drawerWidth = 280;
  const list = [
    { text: t("about-us"), path: "/about" },
    { text: t("price"), path: "/pricing" },
    { text: t("blog"), path: "/blog" },
    { text: t("contact"), path: "/contact" },
    { text: t("login"), path: "/login" },
  ];
  var drop = document.getElementById("drop");
  let boxes = [
    {
      icon: eye,
      title: t("cyber-platform"),
      p: "Demystify Cyber Security is baked into everything we do, our platform is the perfect vehicle to help us deliver Cyber Serenity.",
      link: "LEARN MORE",
      path: "/cyber-platform",
    },
    {
      icon: scanner,

      title: t("vulnerability-scanner"),
      p: "Manage Internal & External Vulnerabilities, all reconciled against the Global Cyber Security Databases.",
      link: "LEARN MORE",
      path: "/vulnerability-scanner",
    },
    {
      icon: hand,

      title: t("Mobile-Network-Scanner"),
      p: "Our Mobile Network scanner is the most advanced Cyber Utility in the Play Store and a top 10 common organic result for many Cyber Security.",
      link: "LEARN MORE",
      path: "/mobile-network",
    },
  ];

  let [dropy, setDropy] = useState(false);

  return (
    <Drawer
      className="drawer"
      variant="temporary"
      anchor="left"
      smooth="true"
      sx={{
        display: props.noneOrBlock,
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      open="true"
      onClose={() => {
        props.setNoneOrBlock("none");
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#663cb1",
          padding: "10px",
          textAlign: "right",
        }}
      >
        <Close
          sx={{ cursor: "pointer" }}
          onClick={() => {
            props.setNoneOrBlock("none");
            setDropy(false);
          }}
        />
        <p style={{ display: dropy ? "flex" : "none" }}>{t("Produtcs")}</p>

        <KeyboardArrowLeftIcon
          sx={{ cursor: "pointer", display: dropy ? "flex" : "none" }}
          onClick={() => {
            setDropy(false);
          }}
        />
      </Box>

      <Divider />

      <Box
        className="menu"
        onClick={() => {
          setDropy(!dropy);
        }}
      >
        <Link
          className="pro"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            drop.style.width = "240px";
            console.log("hello");
          }}
        >
          {t("products")}
          <NavigateNextIcon />
        </Link>
        <Grid
          container
          className="dropdown"
          id="drop"
          sx={{ display: dropy ? "flex" : "none", flexDirection: "column" }}
        >
          {boxes.map((item) => {
            return (
              <Grid
                sx={{ color: "white", fontSize: "25px", border: "none" }}
                item
                className="item"
                onClick={() => {
                  navigate(item.path);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Box>
                  <CardMedia
                    sx={{ width: "40px", height: "40px" }}
                    component="img"
                    image={item.icon}
                  />
                  <Typography variant="h4" color="inherit">
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {list.map((item) => {
        return (
          <Link
            to={item.path}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {item.text}
          </Link>
        );
      })}
      <Link
        style={{
          textAlign: "center",
          width: "210px",
          padding: "10px",
          display: "block",
          margin: "auto",
        }}
        className="createA"
        to="/login"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {t("create-account")}
      </Link>
    </Drawer>
  );
};

export default DefDrawer;
