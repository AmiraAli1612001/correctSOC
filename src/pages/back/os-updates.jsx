import { Box } from "@mui/material";
import React from "react";
import SoftwareTab from "./component/software-tab";
import { TbClockExclamation } from "react-icons/tb";
import { PiComputerTowerFill } from "react-icons/pi";
import { LuComputer } from "react-icons/lu";
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ShieldIcon from '@mui/icons-material/Shield';
import { AiOutlineSetting } from "react-icons/ai";
import { TbSettingsExclamation } from "react-icons/tb";
import DataDisksTab from './component/data-disks-tab';



const OsUpdates = () => {
  let data = [
      { h1: "  Windows Updates " },
      {
        array: [
          { p: "Critical Updates", icon: <ChangeHistoryIcon className="svg-1" />, percentage: 0 },
          { p: "Security Updates", icon:  <ShieldIcon className="svg-1" />, percentage: 4 },
          { p: "Reboots Needed", icon: <RestartAltIcon className="svg-1" />, percentage: 0 },
        ],
        share : [
          {p: "RollUps" , icon : <AiOutlineSetting className="small-svg" /> , number :0},
          {p: "Drivers" , icon :<TbSettingsExclamation  className="small-svg"/> , number :0},

        ]
      },

      { vendor: "Devices", number: 4 , span : 5 },
    ];
  return (
    <Box>
      <DataDisksTab data={data}/>
    </Box>
  );
};

export default OsUpdates;
