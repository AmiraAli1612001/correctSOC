import { Box } from "@mui/material";
import React from "react";
import SoftwareTab from "./component/software-tab";
import { TbClockExclamation } from "react-icons/tb";
import { PiComputerTowerFill } from "react-icons/pi";
import { LuComputer } from "react-icons/lu";
import HardwareTab from "./component/hardware-tab";
import ComputerIcon from '@mui/icons-material/Computer';
import Header from "./component/header";
const Hardware = () => {
  let data = [
    { h1: "  Windows Hardware         " },
    {
      array: [
        { p: "Servers", icon: <PiComputerTowerFill />, number: 0 },
        { p: "WorkStations", icon: <LuComputer />, number: 4 },
        { p: "EOL OS", icon: <TbClockExclamation />, number: 0 },
      ],
      
    },

    { vendor: "Devices", number: 4 },
    { computer: <ComputerIcon style={{fontSize :"28px" ,  color:"white"}} /> }

  ];
  return (
    <Box>
      <Header/>
      <SoftwareTab data={data} />
     
    </Box>
  );
};

export default Hardware;
