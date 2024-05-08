import React from "react";

import logo from "../../../assets/images/logo-2.png";
import { Box, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Drawer = (props) => {
  let dropdown = [
    {
      parent: "SCANNERS",
      icon: <ArrowDropDownIcon />,
      list: [
        { icon: "", text: "External Scanner", path: "#" },
        { icon: "", text: "LAN Scanner", path: "#" },
      ],
    },
    {
      parent: "DEVICE REPORTS",
      icon: <ArrowDropDownIcon />,
      list: [
        { icon: "", text: "Device Vulnerabilities", path: "#" },
        { icon: "", text: "Antivirus", path: "#" },
        { icon: "", text: "OS Updates", path: "#" },
        { icon: "", text: "Data Disks ", path: "#" },
        { icon: "", text: "Hardware ", path: "#" },
        { icon: "", text: "Software", path: "#" },
      ],
    },
    {
      parent: "MSP",
      icon: <ArrowDropDownIcon />,
      list: [
        { icon: "", text: "Coverage Report", path: "#" },
        { icon: "", text: "Tenancy (Beta)", path: "#" },
      ],
    },
    {
      parent: "CLOUD",
      icon: <ArrowDropDownIcon />,
      list: [{ icon: "", text: "Azure/365 MFA", path: "#" }],
    },
    {
      parent: "AGENT",
      icon: <ArrowDropDownIcon />,
      list: [
        { icon: "", text: "Cyber Heal", path: "#" },
        { icon: "", text: "Management", path: "#" },
        { icon: "", text: "Downloads", path: "#" },
      ],
    },
  ];
  return (
    <Box
      className="drawer-parent"
      sx={{ display: props.drawer ? "block" : "none" }}
      onClick={() => {
        props.setDrawer(!props.drawer);
      }}
    >
      <Box
        className="dash-drawer"
        sx={{ left: props.drawer ? "0px" : "-100%" }}
      >
        <div className="logo">
          <img src={logo} alt="..." />
        </div>

        <Box className="links">
          <Button>DASHBOARD</Button>

          {dropdown.map((item, index) => {
            return (
              <Button key={index}>
                <span> {item.parent} </span>
                <span>{item.icon}</span>
                {/* <Box className="dropdown">
                  {item.list.map((i, indx) => {
                    return (
                      <Button key={indx} sx= {{ position : "absolute" }} >
                        {i.icon} {i.text}
                      </Button>
                    );
                  })}
                </Box> */}
              </Button>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Drawer;
