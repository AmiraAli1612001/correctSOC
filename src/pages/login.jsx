import { Box, Button, CardMedia } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/images/logo-2.png";
import { Link } from "react-router-dom";
import google from "../assets/images/google.svg";
import micro from "../assets/images/microsoft.svg";
import email from "../assets/images/email.svg";
import "../css/shares.css";
import "../css/style.css";
import { useTranslation } from "react-i18next";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import BadgeIcon from "@mui/icons-material/Badge";
const Login = () => {
  document.body.title = "login";

  const { t } = useTranslation();
  var [signin, setSignin] = useState(false);
  var [trouble, setTrouble] = useState(false);
  var [register, setRegister] = useState(false);

  return (
    <Box className="login">
      <title>{t("login")}</title>
      <Box className="box" sx={{ width: { xs: "90vw", md: "50vw" } }}>
        <CardMedia component="img" image={logo}  sx={{height:"100px"}}/>
        <p className="one">{t("login-p-one")}</p>

        <Box className="model-one" sx={{ display: signin ? "block" : "none" }}>
          <form>
            <h1>{t("sign-in")}</h1>
            <Box className="div">
              <EmailIcon />

              <input type="email" placeholder={t("enter-email")} />
            </Box>
            <Box className="div">
              <PasswordIcon />

              <input type="password" placeholder={t("enter-password")} />
            </Box>
            <Box className="div" sx={{ justifyContent: "space-between" }}>
              <Box className="left">
                <Link
                  onClick={() => {
                    setTrouble(!trouble);
                    setSignin(false);
                  }}
                >
                  {t("tro-link")}
                </Link>
              </Box>
              <Box className="right">
                <input
                  type="button"
                  onClick={() => {
                    setSignin(false);
                    setTrouble(false);
                  }}
                  value={t("cancel")}
                />
                <input type="submit" value={t("sign-in")} />
              </Box>
            </Box>
          </form>
        </Box>
        <Box
          className="trouble model-one"
          sx={{ display: trouble ? "block" : "none" }}
        >
          <h2>{t("recover-pass")}</h2>
          <p>{t("recover-p-1")}</p>
          <p>{t("recover-p-2")}</p>
          <Box className="div">
            <EmailIcon />

            <input type="email" placeholder={t("enter-email")} />
          </Box>
          <Box className="right">
            <input
              type="button"
              onClick={() => {
                setTrouble(false);
              }}
              value={t("cancel")}
            />
            <input type="submit" value={t("sign-in")} />
          </Box>
        </Box>

        <Box className="model-one" sx={{ display: register ? "flex" : "none" }}>
          <form>
            <h1>{t("sign-in")}</h1>
            <Box className="div">
              <BadgeIcon />

              <input type="text" placeholder={t("user-name")} />
            </Box>
            <Box className="div">
              <EmailIcon />

              <input type="email" placeholder={t("enter-email")} />
            </Box>
            <Box className="div">
              <PasswordIcon />

              <input type="password" placeholder={t("enter-password")} />
            </Box>

            <Box className="div" sx={{ justifyContent: "flex-start" }}>
              <input type="checkbox" style={{ width: "25px" }} />
              <p>
                {t("agree")} <Link to="/portal"> {t("login-terms-o")}</Link>
              </p>
            </Box>
            <Box className="div">
              <Box className="right">
                <input
                  type="button"
                  onClick={() => {
                    setRegister(false);
                  }}
                  value={t("cancel")}
                />
                <input type="submit" value={t("sign-in")} />
              </Box>
            </Box>
          </form>
        </Box>
        <Box sx={{ display: signin || trouble || register ? "none" : "block" }}>
          <Box className="btn">
            <Button
              onClick={() => {
                setSignin(!signin);
              }}
            >
              <CardMedia component="img" image={email} />
              <span
                style={{
                  margin: "0px 1px",
                  textAlign:
                    localStorage.getItem("i18nextLng") === "ar"
                      ? "right"
                      : "left",
                }}
              >
                {t("login-email")}
              </span>
            </Button>

            <Button>
              <CardMedia component="img" image={google} />
              <span
                style={{
                  margin: "0px 1px",
                  textAlign:
                    localStorage.getItem("i18nextLng") === "ar"
                      ? "right"
                      : "left",
                }}
              >
                {t("login-google")}
              </span>
            </Button>
            <Button>
              <CardMedia component="img" image={micro} />
              <span
                style={{
                  margin: "0px 1px",
                  textAlign:
                    localStorage.getItem("i18nextLng") === "ar"
                      ? "right"
                      : "left",
                }}
              >
                {t("login-micro")}
              </span>
            </Button>

            <p className="mid">
              {t("login-p-two-o")}{" "}
              <Link
                onClick={() => {
                  setRegister(true);
                }}
              >
                {t("login-p-two-l")}
              </Link>{" "}
              {t("login-p-two-t")}
            </p>
          </Box>
        </Box>

        <p className="two">{t("login-two")}</p>
        <p className="two">
          <Link to="/portal">{t("login-terms-o")}</Link> {t("login-terms-m")}
          <Link to="/privacy" style={{ margin: "0px 3px" }}>
            {t("login-terms-l")}{" "}
          </Link>{" "}
          .
        </p>
      </Box>
      <p className="two">© 2017 - 2024 {t("login-last")} Ltd. v1.56.22</p>
    </Box>
  );
};

export default Login;
