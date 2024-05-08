import { DataGrid } from "@mui/x-data-grid";

import * as React from "react";
import Box from "@mui/material/Box";
import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

import InfoIcon from "@mui/icons-material/Info";

import CircleIcon from "@mui/icons-material/Circle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Button } from "bootstrap";
import { BsBoxSeam } from "react-icons/bs";
import ReplayIcon from "@mui/icons-material/Replay";
import DescriptionIcon from "@mui/icons-material/Description";

export default function DownloadTable() {
  return (
    <Box className="download-table">
      <p className="info-p">
        <InfoIcon />
        The software agents listed below will collect statistics for the
        organisation romoz .
      </p>
      <Table>
        <TableHead>
          <TableCell>Products</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell >
              <p className="td">
                <BsBoxSeam />
                Active Directory Connector
              </p>
            </TableCell>
            <TableCell> Not Generated</TableCell>
            <TableCell>
              <button className="btn">
                <ReplayIcon />
                GENERATE
              </button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <p className="td">
                <BsBoxSeam />
                Active Directory Connector
              </p>
            </TableCell>
            <TableCell>
              <button className="badge-yellow">Coming soon</button>
            </TableCell>
            <TableCell>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell >
              <p className="td">
                <BsBoxSeam /> RoboShadow Agent (Linux)
              </p>
            </TableCell>
            <TableCell >
              <button className="badge-green">(Beta) Available</button>
            </TableCell>
            <TableCell>
              <button className="btn">
                <DescriptionIcon />
                DOCUMENT
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}
