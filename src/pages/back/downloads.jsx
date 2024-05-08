import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "./component/header";
import DownloadingIcon from "@mui/icons-material/Downloading";
import { BsBoxSeam } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { MdDownloading } from "react-icons/md";
import DownloadTabs from "../back/component/download-tab"
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";



const Downloads = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box className="download ">
      <Header />

      <Box className="downloads" sx={{width :"98vw" , margin:"10px auto"}}>
        <h1>Downloads</h1>
        <Grid container>
          <Grid item xs={12} md={6} className="item item-svg">

            <MdDownloading className="md"/>


          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container className="downloads-con">
              <Grid item className="item item-text" xs={12}>
                <Box>
                  <p className="white">
                    {" "}
                    <BsBoxSeam /> RoboShadow Agent
                  </p>
                  <p className="install">
                    <span>
                      <Link to="#">install</Link>
                    </span>{" "}
                    the 'RoboShadow Agent' on all network devices, to collect device
                    statistics.
                  </p>
                </Box>
              </Grid>
            
              <Grid item className="item item-text"  xs={12} >
                <Box>
                  <p className="white">
                    <BsBoxSeam /> Active Directory Connector
                  </p>
                  <p className="install">
                    Install the 'Active Directory Connector' on a single network
                    server , to collect AD statistics. If you're using Azure AD,
                    connect your <GrUpdate/> <Link to="#">Azure account</Link> to collect
                    statistics directly from there.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <DownloadTabs/>

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

export default Downloads;
