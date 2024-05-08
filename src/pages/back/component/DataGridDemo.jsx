import { DataGrid } from "@mui/x-data-grid";

import * as React from "react";
import Box from "@mui/material/Box";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

import InfoIcon from "@mui/icons-material/Info";

import CircleIcon from "@mui/icons-material/Circle";

const columns = [
  {
    field: "OS",
    headerName: "OS",
    valueGetter: (value, row) => `${row.os || ""}  `,
  },
  {
    field: "IP Address",
    headerName: "IP Address",
    valueGetter: (value, row) => `${row.ip || ""}  `,
  },

  {
    field: "Hostname",
    headerName: "Hostname",
    valueGetter: (value, row) => `${row.host || ""} `,
  },
  {
    field: "Mac Address",
    headerName: "Mac Address",

    valueGetter: (value, row) => ` ${row.mac || ""}   `,
  },
  {
    field: "Vendor",
    headerName: "Vendor",
    sortable: false,
    valueGetter: (value, row) => ` ${row.vendor || ""}   `,
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
    field: "Online",
    headerName: "Online",
    sortable: false,

    valueGetter: (value, row) => `${row.online || ""}  `,
  },

  {
    field: "Status",
    headerName: "Status",
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

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
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
