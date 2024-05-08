import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import SecurityIcon from "@mui/icons-material/Security";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FiAlertTriangle } from "react-icons/fi";
import { GiMonoWheelRobot } from "react-icons/gi";
import { GoCodescanCheckmark } from "react-icons/go";
import { Close } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { TbMapSearch } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import nmap from "../../../assets/images/dashboard/nmap_48.png";
import OWASP from "../../../assets/images/dashboard/owasp_48.png";
import shodan from "../../../assets/images/dashboard/shodan_48_grey.png";
import robo from "../../../assets/images/dashboard/RoboAi-Logo-48-Grey.png";
import Gaurd from "../../../assets/images/dashboard/RoboGuard-Mask-Shield-48-Grey.png";
import Button from "@mui/material/Button";
// import ScanHistory from "./scanHistory";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/dashboard/download.png";
import background from "../../../assets/images/dashboard/background.png";
import LastScan from "./lastscan";

const FirstSection = () => {
  const { t, i18n } = useTranslation();

  let enable = [
    {
      img: nmap,
      icon: <CheckCircleIcon />,
      enordis: "enable",
      p: "NMAP IP Scanner",
    },
    {
      img: OWASP,
      icon: <CheckCircleIcon />,
      enordis: "enable",
      p: "OWASP Web Scanner ",
    },
    {
      img: shodan,
      icon: <Close />,
      enordis: "disable",
      p: "SHODAN IP Cache",
      upgrade: "UPGRADE",
    },
    {
      img: robo,
      icon: <Close />,
      enordis: "disable",
      p: "ROBOAI Scanner ",
      upgrade: "UPGRADE",
    },
    {
      img: Gaurd,
      icon: <Close />,
      enordis: "disable",
      p: "ROBOGUARD Automation",
      upgrade: "UPGRADE",
    },
  ];
  return (
    <Box className="first-section">
      <Box
        className="background-section"
        sx={{ width: { xs: "95vw", md: "98vw" }, margin: "15px auto" }}
      >
        <img src={background} alt="" />
        <Box className="link">
          <Button className="button">
            <img src={logo} alt="..." className="logo" /> GET CYBER REPORT
          </Button>
        </Box>
      </Box>
      <Grid
        container
        className="section"
        sx={{ width: { xs: "95vw", md: "98vw" }, margin: "15px auto" }}
      >
        <Grid item className="header" xs={12}>
          <h1>
            {" "}
            <SecurityIcon /> External Vulnerability Scanner{" "}
          </h1>
        </Grid>
        <Grid item xs={12} md={6} lg={4} className="item">
          <h2>0</h2>
          <h3>Scans Performed</h3>
        </Grid>

        <Grid item xs={12} md={6} lg={4} className="item">
          <h2>0</h2>
          <h3>Scheduled Scans</h3>
        </Grid>

        <Grid item xs={12} md={6} lg={4} className="item">
          <h2>0</h2>
          <h3>Hosts</h3>
        </Grid>
      </Grid>

      <Grid
        container
        className="last-5 section"
        sx={{ width: { xs: "95vw", md: "98vw" }, margin: "15px auto" }}
      >
        <Grid item xs={12} md={6} lg={4} sx={{ backgroundColor: "#1e1e1e" }}>
          <p className="header one">
            IP Addresses
            <span className="two">Last 5 Scanned</span>
          </p>
          <Grid container className="section between">
            <Grid item className="one " xs={1}>
              <LocationOnIcon />
            </Grid>
            <Grid item xs={11}>
              <p className="one"> 154.178.41.115</p>
            </Grid>

            <Grid item xs={11}>
              <Grid container className="section">
                <Grid item xs={3}>
                  <p className="one">
                    <span className="two">0</span> CVEs
                  </p>
                </Grid>
                <Grid item xs={3}>
                  <p className="one">
                    <span className="two">0</span> Ports
                  </p>
                </Grid>
                <Grid item xs={2.5}>
                  <p className="one">
                    <span className="two">0</span> Apps
                  </p>
                </Grid>
                <Grid item xs={1}>
                  <p className="orange">0</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ backgroundColor: "#1e1e1e" }}>
          <p className="header one">
            Websites/Domains
            <span className="two">Last 5 Scanned</span>
          </p>

          <p className="green">
            {" "}
            <CheckCircleIcon /> No new hosts
          </p>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ backgroundColor: "#1e1e1e" }}>
          <p className="header one">
            Vulnerabilities
            <span className="two">Last 5 Detected</span>
          </p>

          <Grid
            container
            className="section"
            sx={{ backgroundColor: "#1e1e1e" }}
          >
            <Grid item xs={2}>
              <FiAlertTriangle className="alert" />
            </Grid>
            <Grid item xs={8}>
              <p className="one">CVE-2019-7659</p>
              <p className="two">41.236.161.241 | Genivia gSOAP 2.7.x..</p>
            </Grid>
            <Grid item xs={2}>
              <p className="orange">0</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className="blue"
        sx={{ width: { xs: "95vw", md: "98vw" }, margin: "15px auto" }}
      >
        <Grid item className="btn" xs={12} md={0.5}>
          <span>Go Pro+</span>
        </Grid>
        <Grid item xs={12} md={9.5}>
          <span>
            Professional features including <GiMonoWheelRobot />
            Robo Guard scan automation & <GoCodescanCheckmark /> Attack Surface
            Mapping
          </span>
        </Grid>
        <Grid item xs={12} md={1}>
          <span className="upgrade">UPGRADE</span>
        </Grid>
        <Grid item xs={12} md={0.5}>
          <span>
            <Close className="close" />
          </span>
        </Grid>
      </Grid>

      <Grid
        container
        className="flex"
        sx={{ width: { xs: "95vw", md: "98vw" }, margin: "15px auto" }}
      >
        {enable.map((item, index) => {
          return (
            <Grid item xs={12} md={2.3} className="item">
              <img src={item.img} alt="..." />
              <hr />
              <Box className="box">
                <p>
                  <span>{item.icon}</span>{" "}
                  <span className="dis">
                    <span>{item.enordis}</span>
                  </span>
                </p>
                <p>
                  <span className="p">{item.p}</span>{" "}
                  {item.upgrade ? (
                    <span className="upgrade">{item.upgrade}</span>
                  ) : undefined}
                </p>
              </Box>
            </Grid>
          );
        })}

        <Grid item xs={11.7} className="item item-12">
          <Grid container className="disable-con">
            <Grid item xs={1}>
              <TbMapSearch />
            </Grid>
            <Grid item xs={1}>
              {" "}
              <span className="disable">Disabled </span>{" "}
            </Grid>
            <Grid item xs={2}>
              <span className="bold"> Attack Surface Discovery</span>{" "}
            </Grid>
            <Grid item xs={7}>
              <span className="small">
                {" "}
                Discover IP addresses and hostnames on your network
                automatically.
              </span>
            </Grid>
            <Grid item xs={1}>
              {" "}
              <span className="btn upgrade">UPGRADE</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11.7} className="item item-12">
          <Grid container className="disable-con">
            <Grid item xs={1}>
              <TbMapSearch />
            </Grid>
            <Grid item xs={1}>
              {" "}
              <span className="disable">Disabled</span>{" "}
            </Grid>
            <Grid item xs={2}>
              <span className="bold"> Attack Surface Mapper </span>{" "}
            </Grid>
            <Grid item xs={7}>
              {" "}
              <span className="small">
                {" "}
                Monitor threats on your most vulnerable public hosts and
                services.
              </span>
            </Grid>
            <Grid item xs={1}>
              <span className="btn upgrade">UPGRADE</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* accordion */}

      {/* <Box
        sx={{ width: { xs: "95vw", md: "98vw" }, margin: "15px auto" }}
        className="acc"
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h1> Video Tutorial & Written Guides</h1>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container className="base">
              <Grid item xs={12} md={5.8}>
                <p className="title">
                  {" "}
                  <VideocamIcon /> Video Tutorial
                </p>
                <Grid container className="container">
                  <Grid item xs={12} md={6}>
                    <iframe
                      src="https://www.youtube.com/embed/oGT-K4YZbfM"
                      style={{ border: "0" }}
                    ></iframe>
                  </Grid>
                  <Grid item xs={12} md={5.5} className="content">
                    <h2>Upgrade features in RoboShadow 2023 (walkthrough)</h2>
                    <p>
                      In this video, Terry discusses RoboShadow's upgrade
                      features, highlighting its use of RoboGuard and Shodan to
                      detect previously unknown vulnerabilities through advanced
                      scanning capabilities.
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5.8}>
                <p className="title">
                  {" "}
                  <LibraryBooksIcon /> Recommended Blogs
                </p>
                <Grid container className="container">
                  <Grid item xs={12} md={6} className="background">
                    <img
                      src="https://www.roboshadow.com/hubfs/imresizer-1695212313374.jpg"
                      alt=".."
                    />
                  </Grid>
                  <Grid item xs={12} md={5.5} className="content">
                    <h2>AUG 22, 2023 2:30:35 PM</h2>
                    <p>
                      As cyber-attacks grow in complexity and frequency, so must
                      the tools we use to detect and combat them. Within our
                      Premium Tier, we offer upgrades to
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box> */}

      <LastScan />
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
            <AddIcon />{" "}
          </span>{" "}
          <Link>{t("foot-get")}</Link>
        </p>
      </Box>
    </Box>
  );
};

export default FirstSection;
