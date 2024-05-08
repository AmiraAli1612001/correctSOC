import { DataGrid } from "@mui/x-data-grid";

import * as React from "react";
import Box from "@mui/material/Box";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

import InfoIcon from "@mui/icons-material/Info";

import CircleIcon from "@mui/icons-material/Circle";
import { Grid } from "@mui/material";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DevicesIcon from '@mui/icons-material/Devices';
const columns = [
  {
    field: "Type",
    headerName: "Type",
    valueGetter: (value, row) => `${row.os || ""}  `,
  },
  {
    field: "Scan Device",
    headerName: "Scan Device",
    valueGetter: (value, row) => `${row.ip || ""}  `,
  },

  {
    field: "Data Started",
    headerName: "Data Started",
    valueGetter: (value, row) => `${row.host || ""} `,
  },
  {
    field: "Data Ended",
    headerName: "Data Ended",
    type: "number",
    valueGetter: (value, row) => ` ${row.mac || ""}   `,
  },
  

  {
    field: "Open Ports",
    headerName: "Open Ports",
    sortable: false,
    valueGetter: (value, row) => ` ${row.port || ""}  `,
  },

  {
    field: "Cvss",
    headerName: "Cvss",
    sortable: false,
    valueGetter: (value, row) => ` ${row.cvss || ""} `,
  },

  {
    field: "CVEs",
    headerName: "CVEs",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (value, row) => ` ${row.cves || ""}   `,
  },

  {
    field: "Critical",
    headerName: "Critical",
    sortable: false,
    valueGetter: (value, row) => ` ${row.critical || ""}   `,
  },

  {
    field: "High",
    headerName: "High",
    sortable: false,
    valueGetter: (value, row) => ` ${row.high || ""}  `,
  },

  {
    field: "M/L/N",
    headerName: "M/L/N",
    sortable: false,
    valueGetter: (value, row) => ` ${row.mln || ""} `,
  },
 

  {
    field: "Status",
    headerName: "Status",
    sortable: false,
    valueGetter: (value, row) => `${row.status || ""}  `,
  },
  
  {
    field: "Include in Ultimate Report",
    headerName: "Include in Ultimate Report",
    sortable: false,
    valueGetter: (value, row) => `${row.status || ""}  `,
  },
];

const rows = [
  {
    id: 1,
    os: <FaLinux />,
    ip: "192.168.1.133",
    host: "OPPO-A17.home",
    mac: "40:ed:00:a5:11:08",
    vendor: "TP-Link Corporation Limited	",
    port: 2,
    cvss: 3,
    cves: 5,
    critical: 3,
    high: 2,
    mln: "8/0/0",
    online: <CircleIcon />,
    status: <InfoIcon />,
  },
  {
    id: 2,
    os: <FaWindows />,
    ip: "192.168.1.250	",
    host: "Samsung.home",
    mac: "3c:52:82:4f:e3:c4",
    vendor: "Hewlett Packard",
    port: 2,
    cvss: 3,
    cves: 5,
    critical: 3,
    high: 2,
    mln: "8/0/0",
    online: <CircleIcon />,
    status: <InfoIcon />,
  },
];

export default function ScanHistory() {
  return (
    <Box >
      <DataGrid
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
  );
}
