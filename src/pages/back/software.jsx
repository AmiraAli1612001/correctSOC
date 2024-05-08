import { Box } from '@mui/material';
import React from 'react';
import SoftwareTab from './component/software-tab';
import SoftwareTable from './component/software-table';
import { BsBoxSeam } from "react-icons/bs";
import { FaStarOfLife } from "react-icons/fa";
import { SiWindows } from "react-icons/si";
import ComputerIcon from '@mui/icons-material/Computer';


const Software = () => {

    let data = [
        { h1: "Windows Software " },
        { array: [{ p: "Applications", icon: <BsBoxSeam />, number: 105 }, { p: "Uncommon Apps", icon: <FaStarOfLife />, number: 45 }, { p: "Non Microsoft Apps", icon: <SiWindows />, number: 45 }] },

        { vendor: "Vendors", number: 37 },

    ]
    return (
        <Box >
            <SoftwareTab data={data} />
            <SoftwareTable />
        </Box>
    );
}

export default Software;
