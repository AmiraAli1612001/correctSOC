import {
  AppBar,
  Box,
  Toolbar,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/images/logo-2.png";
import { Link, useNavigate } from "react-router-dom";
import "../../css/shares.css";
import "../../css/style.css";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import eye from "../../assets/images/eye.svg";
import hand from "../../assets/images/hand.svg";
import scanner from "../../assets/images/scanner.svg";
import computer from "../../assets/images/computer.webp";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  let [lang, setLang] = useState(false);
  // var dropdown = document.getElementById("dropdown")
  document.body.dir = window.localStorage.getItem("dir");
  let [drop, setDrop] = useState(false);
  let [nav, setNav] = useState(false);
  window.onscroll = function () {
    if (window.scrollY > 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const { t, i18n } = useTranslation();

  let navigate = useNavigate();
  let links = [
    { text: t("abt-us"), path: "/about" },
    { text: t("price"), path: "/pricing" },
    { text: t("blog"), path: "/blog" },
    { text: t("contact"), path: "/contact" },
    { text: t("login"), path: "/login" },
  ];
  let boxes = [
    {
      icon: eye,
      title: t("cyber-platform"),
      p: t("cyber-header-p"),
      link: t("learn-more"),
      path: "/cyber-platform",
    },

    {
      icon: scanner,

      title: t("vulnerability-scanner"),
      p: t("cyber-header-p-2"),
      link: t("learn-more"),
      path: "/vulnerability-scanner",
    },
    {
      icon: hand,

      title: t("Mobile-Network-Scanner"),
      p: t("mobile-network-p"),
      link: t("learn-more"),
      path: "/mobile-network",
    },

    {
      // icon: "",
      title: "",
      p: "",
      link: "",
      path: "",
    },
  ];
  return (
    <Box className={nav ? "header active" : "header"}>
      <AppBar sx={{ display: "flex" }}>
        <Toolbar>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Grid
              item
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              <CardMedia
                sx={{ width: { xs: "160px", lg: "230px" }, height: "85px" }}
                component="img"
                image={Logo}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              />
            </Grid>
            <Grid
              item
              sx={{ display: { xs: "block", lg: "none", cursor: "pointer" } }}
            >
              <Button
                sx={{ color: "white" }}
                onClick={() => {
                  props.setNoneOrBlock("block");
                }}
              >
                <MenuIcon />
              </Button>
            </Grid>
            <Grid
              className="hed"
              item
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              <Box
                className="menu"
                onClick={() => {
                  setDrop(!drop);
                }}
              >
                <Link
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {t("products")}
                  <KeyboardArrowDownIcon />
                </Link>
                <Grid
                  container
                  className="dropdown"
                  id="dropdown"
                  sx={{ display: drop ? "flex" : "none" }}
                >
                  {boxes.map((item) => {
                    return (
                      <Grid
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
                          {item.icon && (
                            <CardMedia
                              className="img"
                              sx={{ width: "40px", height: "40px" }}
                              component="img"
                              image={item.icon}
                            />
                          )}
                          <Typography variant="h4" color="inherit">
                            {item.title}
                          </Typography>
                          <p>{item.p}</p>
                          <Link
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            onClick={() => {
                              window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            {item.link}{" "}
                          </Link>
                        </Box>
                      </Grid>
                    );
                  })}

                  <Grid item sx={{ display: "flex", marginTop: "20px" }}>
                    <Box>
                      <CardMedia
                        sx={{ width: "300px" }}
                        component="img"
                        image={computer}
                      />
                    </Box>
                    <Box
                      sx={{ display: "flex", flexDirection: "column" }}
                      className="row-tow"
                    >
                      <p>{t("use")}</p>
                      <Typography
                        variant="h4"
                        color="inherit"
                        sx={{ fontWeight: "bold" }}
                      >
                        {t("cyber-platform")}
                      </Typography>
                      <Typography variant="h4" color="inherit">
                        {t("complete")}
                      </Typography>
                      <Box className="links">
                        <Link
                          onClick={() => {
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }}
                          to="/login"
                        >
                          {t("create-account")}
                        </Link>
                        <Link
                          onClick={() => {
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }}
                          to="/cyber-platform"
                        >
                          {t("discover-more")}
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              {links.map((item) => {
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

              <Link to="/login" className="createA">
                {t("create-account")}
              </Link>
            </Grid>
            <Grid item>
              <Box
                className="lang"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setLang(!lang);
                }}
              >
                <LanguageIcon className="icon" />
                <Box className="drop" sx={{ display: lang ? "block" : "none" }}>
                  <p
                    onClick={() => {
                      i18n.changeLanguage("en");
                      document.body.style.direction = "ltr";
                      window.localStorage.setItem("dir", "ltr");
                      window.location.reload();
                    }}
                  >
                    En
                  </p>
                  <p
                    onClick={() => {
                      i18n.changeLanguage("ar");
                      document.body.style.direction = "rtl";

                      window.localStorage.setItem("dir", "rtl");

                      window.location.reload();
                    }}
                  >
                    Ar
                  </p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
