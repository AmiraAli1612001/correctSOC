import { Box } from "@mui/material";
import React from "react";
import Header from "./header";
import Lanscannersection from "./lanscannersection";
import BasicTabs from "./BasicTabs";
const Lanscanner = () => {
  return (
    <Box className="lan">
      <Header />
      <Lanscannersection />
      <BasicTabs />
    </Box>
  );
};

export default Lanscanner;
