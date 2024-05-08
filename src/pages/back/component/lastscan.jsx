import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataGridDemo from "./DataGridDemo";
import { Grid } from "@mui/material";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DevicesIcon from '@mui/icons-material/Devices';
import InfoIcon from "@mui/icons-material/Info";
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

export default function LastScan() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      
<Grid container>

<Grid item>

  <InfoIcon/>

 <p><span>c</span><span>0</span></p>
 <p><span>H</span><span>0</span></p>
 <p><span>M</span><span>0</span></p>
 <p><span>L</span><span>0</span></p>
 <p><span>N</span><span>0</span></p>


  

  
</Grid>
<Grid item>

  <p className="top">TOP 1000</p>
  <p className="small">Type</p>
  <p><ReportProblemIcon/> <span className="number">15</span></p>
  <p className="small">CVEs</p>
  
  
</Grid>
<Grid item>
  <p className="top">5/1/2024, 11:24:46 AM</p>
  <p className="small">Data Started</p>
  <p><ReportProblemIcon/> <span className="number">103</span></p>
  <p className="small">CVss</p>

  
  
</Grid>
<Grid item>
  <p className="top">about 1 hour</p>
  <p className="small">Duration</p>    
</Grid>
<Grid item>
  <p><DevicesIcon/> <span>12</span></p>
  <p>Online Devices</p>
  
  
</Grid>
<Grid item>
  

  <p>3 days ago</p>
  <p>Scanned</p>
  
</Grid>

</Grid>


      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="LAST SCAN" {...a11yProps(0)} />
          <Tab label="SCAN HIS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DataGridDemo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </Box>
  );
}
