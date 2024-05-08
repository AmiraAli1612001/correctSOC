import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DownloadTable from "./download-table";
import { Grid } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const percentage = 100;

export default function DataDisksTab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // console.log(props.data[0]);

  return (
    <Box className="download-tab data-disks" sx={{ margin: "auto" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "95.9vw",
          margin: "auto",
          backgroundColor: "#272727",
        }}
        className="grid-container"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="WINDOWS" {...a11yProps(0)} />
          <Tab label="MAC" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel
        value={value}
        index={0}
        className="tab"
        sx={{ width: "98vw" }}
      >
        <Grid
          container
          sx={{ display: "flex", gap: "20px" }}
          className="grid-container"
        >
          <Grid item xs={12} md={10.5} className="separate">
            <h1>
              {/* <RiLayoutGrid2Fill /> */}
              <span> {props.data[0].h1} </span>
            </h1>
            <Grid container>
              {

                props.data[1].array.map((item, index)=> {

                  return(
                    <Grid item xs={12} md={4} className="grid">
                      <p>{item.p}</p>
                      <Box className="item">
                      {item.icon}
                        <CircularProgressbar
                          value={item.percentage}
                          text={`${item.percentage}%`}
                          className="svg"
                        />
                      </Box>
                    </Grid>
                  )
                })
              }



            </Grid>
            <Grid container>


              {
                  props.data[1].share.map((item, index)=> {

                    return (

                      <Grid item className="grid"  xs={12} md={4} className="box">
              <p>{item.p}</p>

              <Box className="p">
              {item.icon} <span>{item.number}</span>
              </Box>
            </Grid>

                    )




              }
            )
          }


            </Grid>
          </Grid>
          <Grid item xs={12} md={1.3} className="v-number">
            <h1>
              {/* <RiLayoutGrid2Fill /> */}
              <span>Devices</span>
            </h1>
            <p className="number">8</p>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="tab">
        <DownloadTable />
      </CustomTabPanel>
    </Box>
  );
}
