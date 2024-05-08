import { Box } from '@mui/material';
import React from 'react';
import DataDisksTab from './component/data-disks-tab';
import { PiComputerTowerFill } from "react-icons/pi";
import { LuComputer } from "react-icons/lu";
import { MdComputer } from "react-icons/md";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdUsb } from "react-icons/md";
import { CiHardDrive } from "react-icons/ci";

const DataDisks = () => {
  let data = [
    { h1: "Windows Data / Disks" },
    {
      array: [
        { p: "Unencrypted Servers", icon: <PiComputerTowerFill className="svg-1" />, percentage: 0 },
        { p: "Unencrypted Workstations", icon:  <LuComputer className="svg-1" />, percentage: 4 },
        { p: "Unencrypted Laptops", icon: <MdComputer className="svg-1" />, percentage: 0 },
      ],
      share : [
        {p: "Shared Folders" , icon : <HiOutlineDesktopComputer className="small-svg" /> , number :0},
        {p: "Disks with Low Space" , icon :<CiHardDrive  className="small-svg"/> , number :0},
        {p: "USB Disks" , icon : <MdUsb  className="small-svg"/> , number :0},

      ]
    },

    { vendor: "Devices", number: 4 , span : 5 },
  ];
    return (
      <Box>
        <DataDisksTab data={data}/>
      </Box>
    );
}

export default DataDisks;
