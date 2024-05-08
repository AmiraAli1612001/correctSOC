import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataGridDemo from "./DataGridDemo";
import ScanHistory from "./scan-history";
import DownloadTable from "./download-table";
import DownloadsTab from "./downloads-tab";
import { Grid } from "@mui/material";
// import { RiLayoutGrid2Fill } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { FaStarOfLife } from "react-icons/fa";
import { SiWindows } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";
import { FaApple } from "react-icons/fa6";
import HardwareTab from "./hardware-tab"
import { LuComputer } from "react-icons/lu";


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


export default function SoftwareTab(props) {
  let [device , setDevice] = React.useState(true)
  const columns = [
    {
        width: 150,

        renderCell: (params) => {

            return <LuComputer style={{ fontSize: "27px" }} />   //<-- Mui icons should be put this way here.
        },
    },
    {
        field: "Name",
        headerName: "Name",
        width: 150,
        valueGetter: (value, row) => `${row.Name || ""}  `,
    },

    {
        field: "OS",
        width: 150,

        headerName: "OS",
        valueGetter: (value, row) => `${row.os || ""} `,
    },
    {
        field: "OS Version",
        width: 150,

        headerName: "OS Version",

        valueGetter: (value, row) => ` ${row.version || ""}   `,
    },
    {
        field: "Manufacturer",
        headerName: "Manufacturer",
        sortable: false,
        width: 150,

        valueGetter: (value, row) => ` ${row.manfacturer || ""}   `,
    },

    {
        field: "Model",
        width: 150,

        headerName: "Model",
        sortable: false,
        valueGetter: (value, row) => ` ${row.model || ""}  `,
    },

    {
        field: "Serial",
        width: 150,

        headerName: "Serial",
        sortable: false,
        valueGetter: (value, row) => ` ${row.serial || ""} `,
    },

    {
        field: "Processor",
        width: 150,

        headerName: "Processor",
        sortable: false,
        valueGetter: (value, row) => ` ${row.processor || ""}   `,
    },

    {
        field: "Memory",
        width: 150,

        headerName: "Memory",
        sortable: false,
        valueGetter: (value, row) => ` ${row.memory || ""}   `,
    },

    {
        field: "User",
        headerName: "User",
        width: 150,

        sortable: false,
        valueGetter: (value, row) => ` ${row.user || ""}  `,
    },

    {
        field: "Last Seen By Agent",
        headerName: "Last Seen By Agent",
        width: 150,

        sortable: false,
        valueGetter: (value, row) => ` ${row.last_seen || ""} `,
    },

];

const rows = [
    {
        id: 1,
        // os: ${(<FaLinux />)},

        Name: "DESKTOP-47BAJTS",
        os: "Microsoft Windows 11 Home Single Language",
        version: "10.0.19045",
        manfacturer: "Dell Inc.",
        model: "Latitude E5570",
        serial: "HXJ6ZF2",
        processor: "Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz",
        memory: "15 GB",
        user: "DELL",
        last_seen: "5/1/2024, 4:56:47 AM",

    },

];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="download-tab" sx={{ margin: "auto" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "98vw",
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
          <Tab label="WINDOWS" {...a11yProps(0)}   onClick={()=> {
            setDevice(true)
          }}/>
          <Tab label="MAC" {...a11yProps(1)}  onClick={()=> {
            setDevice(false)
          }}/>
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
          sx={{ display: "flex", gap: "20px", width: "98vw", margin: "auto" }}
          className="grid-container"
        >
          <Grid item xs={12} md={10.5} className="separate">
            <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }} >
              {props.data[3].computer}
              <span> {props.data[0].h1} </span>
            </h1>
            <Grid container>
              {props.data[1].array.map((item, index) => {
                return (
                  <Grid item xs={12} md={4} className="grid">
                    <p>{item.p}</p>
                    <Box className="item">
                      {item.icon}
                      <span className="number">{item.number}</span>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={12} md={1.3} className="v-number">
            <h1>
              {/* <RiLayoutGrid2Fill /> */}
              <span>{props.data[2].vendor} </span>
            </h1>
            <p className="number">{props.data[2].number}</p>
          </Grid>
        </Grid>
        <HardwareTab/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="tab">
        <Grid
          container
          sx={{ display: "flex", gap: "20px", width: "98vw", margin: "auto" }}
          className="grid-container"
        >
          <Grid item xs={12} md={12} className="separate">
            <h1 style={{ display: "flex", alignItems: "center", gap: "10px" }} >
              <FaApple />

              <span>   Mac Hardware  </span>
            </h1>

            <Box sx={{ overflow: "auto" }}>
                  <DataGrid
                    style={{ border: "none" }}
                    className="table-data"
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 5,
                        },
                      },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                  />
              {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="LAST SCAN" {...a11yProps(0)} />
                    <Tab label="SCAN HISTORY" {...a11yProps(1)} />
                </Tabs>
            </Box> */}
             
              {/* <CustomTabPanel value={value} index={1}>
                <ScanHistory />
            </CustomTabPanel> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={1.3} className="v-number" sx={{display:  device ? "block" : "none"}}>
            <h1>
              {/* <RiLayoutGrid2Fill /> */}
              <span>{props.data[2].vendor} </span>
            </h1>
            <p className="number">{props.data[2].number}</p>
          </Grid>
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}
