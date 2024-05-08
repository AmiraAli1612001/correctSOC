import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataGridDemo from "./DataGridDemo";
import ScanHistory from "./scan-history";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { FaApple } from "react-icons/fa6";

import InfoIcon from "@mui/icons-material/Info";

import CircleIcon from "@mui/icons-material/Circle";
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

export default function BasicTabs() {

    let icon;

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
        <Box sx={{ width: "97vw", margin: "auto" }} className="lanScan">
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
            <CustomTabPanel value={value} index={0}>
                <Box sx={{overflow:"auto" }}>
                    <DataGrid
                    style={{border:"none"}}
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
                </Box>
            </CustomTabPanel>
            {/* <CustomTabPanel value={value} index={1}>
                <ScanHistory />
            </CustomTabPanel> */}
        </Box>
    );
}
