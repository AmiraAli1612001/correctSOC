import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "../../../assets/images/logo-2.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "./drawer";



const Header = () => {
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
  let [drawer, setDrawer] = useState(false);
  return (
    <Box className="dash-header">
      <Drawer drawer={drawer} setDrawer={setDrawer} />
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <section>
          <MenuIcon
            onClick={() => {
              setDrawer(!drawer);
            }}
          />
        </section>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <section>
          <img src={logo} alt="..." />
        </section>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <section>
          <Button>DASHBOARD</Button>

          {dropdown.map((item, index) => {
            return (
              <Button key={index}>
                {item.parent} {item.icon}
                <Box className="dropdown">
                  {item.list.map((i, indx) => {
                    return (
                      <Button key={indx} sx={{ position: "absolute" }}>
                        {i.icon} {i.text}
                      </Button>
                    );
                  })}
                </Box>
              </Button>
            );
          })}
        </section>
      </Box>










    </Box>
  );
};

export default Header;
