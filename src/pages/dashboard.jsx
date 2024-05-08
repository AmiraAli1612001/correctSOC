import { Box } from "@mui/material";
import React from "react";
import Header from "./back/component/header";
import "../css/dashboard.css";
import "../css/style.css";
import "../css/shares.css";
import FirstSection from "./back/component/firstSection";

const Dashboard = () => {
  return (
    <Box className="dashboard">
      <Header />

      <FirstSection />
    </Box>
  );
};

export default Dashboard;
