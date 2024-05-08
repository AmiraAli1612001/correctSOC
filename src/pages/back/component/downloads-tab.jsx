import { Box, Button, Grid } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import { VscTerminalLinux } from "react-icons/vsc";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const DownloadsTab = () => {
  return (
    <Box className="download">
      <p className="info-p">
        {" "}
        <InfoIcon className="svg" /> Access the legacy pre-built downloads from the{" "}
        <Link to="#"> Legacy Downloads</Link> section. The 'AD Connector' is
        currently only available from there.
      </p>

      <Grid container className="text">
        <Grid item xs={4}>
          <p>Products</p>
        </Grid>
        <Grid item xs={4}>
          <p>Details</p>
        </Grid>
        <Grid item xs={4}>
          <p>Action</p>
        </Grid>
      </Grid>


<hr />
      <Grid container className="text">
        <Grid item xs={4}>
        <p className="white-box">
                    <BsBoxSeam /> RoboShadow Agent
                  </p>
        </Grid>
        <Grid item xs={4} className="icon-con">
          <FaWindows/>
          <FaApple/>
          <VscTerminalLinux/>
        </Grid>
        <Grid item xs={4} >
          <Button className="btn-green"><FaArrowUpRightFromSquare className="svg"/>  DOWNLOAD & INSTALL</Button>
        </Grid>
      </Grid>


    </Box>
  );
};

export default DownloadsTab;
