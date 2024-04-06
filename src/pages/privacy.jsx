import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import "../css/shares.css";
import "../css/style.css";
import LegalTop from "../components/html/legalTop";
import { Link } from "react-router-dom";
import DefDrawer from "./defDrawer";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  document.body.title = "privacy policy";

  const { t } = useTranslation();

  let legal = {
    title: t("privacy"),
  };
  let [noneOrBlock, setNoneOrBlock] = useState("none");
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <title>privacy policy</title>
      <Header setNoneOrBlock={setNoneOrBlock} />
      <DefDrawer noneOrBlock={noneOrBlock} setNoneOrBlock={setNoneOrBlock} />
      <LegalTop legal={legal} />
      <Box
        className="data"
        sx={{
          color: "white",
          width: { xs: "90vw", md: "80vw" },
          margin: "auto",
          padding: "50px 20px",
        }}
      >
        <p>{t("privacy-p-1")}</p>
        <p>{t("privacy-p-2")}</p>
        <p>{t("privacy-p-3")}</p>
        <h3>{t("privacy-h1-1")}</h3>
        <p>
          {t("privacy-p-1-1")}
          <Link style={{ padding: "0px 10px" }}>{t("terms-p-10")}</Link>{" "}
          {t("privacy-p-1-2")}
        </p>
        <p>{t("privacy-p-2-2")}</p>
        <p>{t("privacy-p-3-3")}</p>

        <h3>{t("privacy-p-4")}</h3>
        <p>{t("privacy-p-5")}</p>
        <p>
          <span style={{ fontWeight: "bold" }}>{t("name")}</span>{" "}
          {t("privacy-p-6")}
        </p>
        <p>{t("privacy-p-7")}</p>
        <p>
          <span style={{ fontWeight: "bold" }}>{t("privacy-p-8")}</span>{" "}
          {t("privacy-p-9")}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>{t("privacy-p-11")}</span>{" "}
          {t("cookie-link")}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>{t("privacy-p-12")}</span>
          {t("privacy-p-13")}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>{t("privacy-p-14")} </span>
          {t("privacy-p-15")}
        </p>
        <p>{t("privacy-p-16")}</p>
        <p>{t("privacy-p-17")}</p>

        <h3>{t("privacy-p-18")}</h3>
        <p>{t("privacy-p-19")}</p>
        <h3>{t("privacy-p-20")}</h3>
        <p>{t("privacy-p-21")}</p>
        <h3> {t("privacy-p-22")}</h3>
        <p>{t("privacy-p-23")}</p>
        <p>{t("privacy-p-24")}</p>
        <ul>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}> {t("privacy-p-25")}</span>
            {t("privacy-p-26")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}> {t("privacy-p-27")}</span>
            {t("privacy-p-28")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>{t("privacy-p-29")}</span>
            {t("privacy-p-30")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>{t("privacy-p-31")}</span>
            {t("privacy-p-32")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>{t("privacy-p-33")}</span>
            {t("privacy-p-34")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>{t("privacy-p-35")}</span>
            {t("privacy-p-36")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>{t("privacy-p-37")}</span>
            {t("privacy-p-38")}
          </li>
        </ul>
        <p>{t("privacy-p-39")}</p>
        <p>
          {t("privacy-p-40")}
          <span style={{ fontWeight: "bold" }}> {t("privacy-p-41")}</span>{" "}
          {t("privacy-p-42")}
        </p>
        <p>
          {t("privacy-p-43")}
          <span style={{ fontWeight: "bold" }}>{t("privacy-p-44")}</span>{" "}
          {t("privacy-p-45")}
        </p>
        <h3> {t("privacy-p-46")}</h3>
        <p>{t("privacy-p-47")}</p>
        <h3> {t("privacy-p-48")}</h3>
        <p>{t("privacy-p-49")}</p>
        <p>
          <span style={{ fontWeight: "bold" }}> {t("privacy-p-50")}</span>
          {t("privacy-p-51")}
        </p>
        <ul>
          <li> {t("privacy-p-52")}</li>
          <li> {t("privacy-p-53")}</li>
          <li> {t("privacy-p-54")}</li>
          <li> {t("privacy-p-55")}</li>
          <li> {t("privacy-p-56")}</li>
        </ul>
        <h3>{t("privacy-p-57")}</h3>
        <p>
          {t("privacy-p-58")}
          <Link> {t("privacy-p-59")}</Link>
          {t("privacy-p-60")}
        </p>
        <h3>{t("privacy-p-61")}</h3>
        <p>{t("privacy-p-62")}</p>
        <ul>
          <li>{t("privacy-p-63")}</li>
          <li>{t("privacy-p-64")}</li>
          <li>{t("privacy-p-65")}</li>
        </ul>
        <p>
          <span style={{ fontWeight: "bold" }}>{t("privacy-p-66")}</span>
          {t("privacy-p-67")}{" "}
        </p>
        <p>
          {t("privacy-p-68")}
          <Link>{t("privacy-p-69")} </Link>
        </p>
        <h3>{t("privacy-p-70")} </h3>
        <p>{t("privacy-p-71")}</p>

        <Table sx={{ display: { xs: "none", lg: "block" } }}>
          <TableHead>
            <TableRow>
              <TableCell className="bold">{t("privacy-p-72")} </TableCell>
              <TableCell className="bold">{t("privacy-p-73")} </TableCell>
              <TableCell className="bold">{t("privacy-p-74")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{t("privacy-p-75")} </TableCell>
              <TableCell>{t("privacy-p-76")} </TableCell>
              <TableCell>{t("privacy-p-77")} </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-78")} </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t("privacy-p-79")}</TableCell>
              <TableCell>{t("privacy-p-80")} </TableCell>
              <TableCell>{t("privacy-p-81")} </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{t("privacy-p-82")} </TableCell>
              <TableCell>{t("privacy-p-83")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{t("privacy-p-84")} </TableCell>
              <TableCell>{t("privacy-p-85")} </TableCell>
              <TableCell>{t("privacy-p-86")}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-87")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{t("privacy-p-88")}</TableCell>
              <TableCell>{t("privacy-p-89")} </TableCell>
              <TableCell>{t("privacy-p-90")} </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{t("privacy-p-91")}</TableCell>
              <TableCell>{t("privacy-p-92")} </TableCell>
              <TableCell>{t("privacy-p-93")}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-94")} </TableCell>
              <TableCell>{t("privacy-p-95")}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-96")} </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{t("privacy-p-97")}</TableCell>
              <TableCell>{t("privacy-p-98")} </TableCell>
              <TableCell>{t("privacy-p-99")}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-100")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-101")} </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-102")} </TableCell>
              <TableCell>
                {" "}
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>{t("privacy-p-103")}</TableCell>
                </TableRow>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{t("privacy-p-104")}</TableCell>
              <TableCell>{t("privacy-p-105")} </TableCell>
              <TableCell>{t("privacy-p-106")}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-107")} </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-108")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-109")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-110")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-111")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{t("privacy-p-112")}</TableCell>
              <TableCell>{t("privacy-p-113")} </TableCell>
              <TableCell>{t("privacy-p-114")}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-115")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{t("privacy-p-116")}</TableCell>
              <TableCell>{t("privacy-p-117")} </TableCell>
              <TableCell>{t("privacy-p-118")}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-119")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-120")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-121")} </TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t("privacy-p-122")} </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h3>{t("privacy-p-123")} </h3>
        <p>{t("privacy-p-124")}</p>
        <p>
          <i>{t("privacy-p-125")} </i>
        </p>
        <p>{t("privacy-p-126")}</p>
        <p>{t("privacy-p-127")}</p>
        <p>
          <i>{t("privacy-p-128")} </i>
        </p>
        <p>{t("privacy-p-129")}</p>
        <p>
          <i>{t("privacy-p-130")} </i>
        </p>
        <p>
          {t("privacy-p-131")}
          <Link>
            <i>{t("privacy-p-132")} </i>
          </Link>{" "}
          {t("privacy-p-133")}
        </p>
        <p>{t("privacy-p-134")}</p>
        <h3>{t("privacy-p-135")} </h3>
        <p>
          {t("privacy-p-136")}
          <Link>{t("privacy-p-137")} </Link>
        </p>
        <h3>{t("privacy-p-138")} </h3>
        <p>{t("privacy-p-139")}</p>
        <p>{t("privacy-p-140")}</p>
        <p>{t("privacy-p-141")} </p>
        <p>{t("privacy-p-142")}</p>
        <h3>{t("privacy-p-143")} </h3>
        <p>{t("privacy-p-144")}</p>
        <ul>
          <li>{t("privacy-p-145")} </li>
          <li>{t("privacy-p-146")}</li>
          <li>{t("privacy-p-147")}</li>
          <li>{t("privacy-p-148")}</li>
          <li>{t("privacy-p-149")}</li>
        </ul>
        <p>{t("privacy-p-150")}</p>
        <h3> {t("privacy-p-151")}</h3>
        <p>{t("privacy-p-152")}</p>
        <p>{t("privacy-p-153")}</p>
        <h3> {t("privacy-p-154")}</h3>
        <p>{t("privacy-p-155")}</p>
        <p>{t("privacy-p-156")}</p>
        <p>{t("privacy-p-157")}</p>
        <p>{t("privacy-p-158")}</p>
        <p>{t("privacy-p-159")}</p>
        <h3>{t("privacy-p-160")}</h3>
        <p>{t("privacy-p-161")}</p>
        <p> {t("privacy-p-162")}</p>
        <ul>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {t("privacy-p-163")}
            </span>{" "}
            {t("privacy-p-164")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {t("privacy-p-165")}
            </span>{" "}
            {t("privacy-p-166")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {t("privacy-p-167")}
            </span>{" "}
            {t("privacy-p-168")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {t("privacy-p-169")}
            </span>{" "}
            {t("privacy-p-170")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              {t("privacy-p-171")}
            </span>{" "}
            {t("privacy-p-172")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {t("privacy-p-173")}{" "}
            </span>{" "}
            {t("privacy-p-174")}
          </li>
          <li>
            {" "}
            <span style={{ fontWeight: "bold" }}>
              {t("privacy-p-175")}
            </span>{" "}
            {t("privacy-p-176")}
          </li>
        </ul>
        <p>
          {t("privacy-p-177")}
          <Link> {t("privacy-p-178")} </Link>
        </p>
        <h3> {t("privacy-p-179")} </h3>
        <p>{t("privacy-p-180")}</p>
        <h3> {t("privacy-p-181")} </h3>
        <p>{t("privacy-p-182")}</p>
        <h3> {t("privacy-p-183")} </h3>
        <p>{t("privacy-p-184")}</p>
        <p>
          {t("privacy-p-185")}
          <Link> {t("privacy-p-186")} </Link>
        </p>
      </Box>
      <Footer />
    </Box>
  );
};

export default Privacy;
