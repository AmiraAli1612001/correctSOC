import * as React from 'react';
import {Box , Button, Grid} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RouteIcon from '@mui/icons-material/Route';
import { LuAlertCircle } from "react-icons/lu";

export default function BasicSelect() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className="lan-scanner-section" sx={{width :"98vw"}}>
      <Box className="lan-h1">
        <p><RouteIcon/> <span className="white">  LAN Scanner  </span><span className="gray">Scan your network in seconds</span></p>
      </Box>
      <Grid className="lan-container" container>
        <Grid item xs={12} md = {5} className='select'>
      
          <FormControl fullWidth className='form'>
            
            <Select
              id="demo-simple-select"
             
              // label="Scan Device"
              value='Scan Device'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
       
            </Select>
          </FormControl>

          <Button>ADVANCED</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid className='data'>
            <Grid item xs={3}>
              <p>-</p>
              <p>Adapter</p>
            </Grid>
            <Grid item  xs={3}>
              <p>-</p>
              <p>Subnet</p>
            </Grid>
            <Grid item  xs={3}>
              <p>0</p>
              <p>Scans</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />

      <Box className="start-scan" >
        <Grid container className="start-container">
          <Grid item xs={12} md={3} className="item">
            <Button className='start-scan-btn'>START SCAN</Button>
          </Grid>

          <Grid item xs={6} md={3} className="item">
            <p> <LuAlertCircle className="icon"/>Status Unknown</p>
          </Grid>
          <Grid item  xs={6} md={3} className="item item-2">
               <p>-</p>
            <p><LocationOnIcon/>Device IP</p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}