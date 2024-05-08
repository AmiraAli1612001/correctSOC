import { Box, Grid } from "@mui/material";
import React from "react";

import { CgServer } from "react-icons/cg";
import ComputerIcon from "@mui/icons-material/Computer";
import { PiComputerTowerFill } from "react-icons/pi";
import { LuComputer } from "react-icons/lu";
import { TbClockExclamation } from "react-icons/tb";

const HardwareDevice = () => {
  return (
    <Box className="hardware">
      <Grid container>
        <Box className="h1">
          <Grid item xs={12} md={6}>
            <Grid container>
              <h1>
                <ComputerIcon/> <span> Windows Hardware </span>
              </h1>
              <Grid item>
                <p>Servers</p>
                <p>
                  <span>
                    <LuComputer  />
                  </span>
                  <span>0</span>
                </p>
              </Grid>
              <Grid item>
                <p>Workstations</p>
                <p>
                  <span>
                    <PiComputerTowerFill  />
                  </span>
                  <span>0</span>
                </p>
              </Grid>

              <Grid item>
                <p>EOL OS</p>
                <p>
                  <span>
                    <TbClockExclamation   />
                  </span>
                  <span>0</span>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default HardwareDevice;
