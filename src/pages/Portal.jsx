import React, { useState } from "react";
import Header from "../components/html/Header";
import Footer from "../components/html/Footer";
import { Box } from "@mui/material";
import "../css/shares.css";
import "../css/style.css";
import LegalTop from "../components/html/legalTop";
import { Link } from "react-router-dom";
import DefDrawer from "./defDrawer";
import { useTranslation } from "react-i18next";

const Portal = () => {
  document.body.title = "portal terms";

  const { t } = useTranslation();

  let legal = {
    title: t("terms-key"),
  };
  let [noneOrBlock, setNoneOrBlock] = useState("none");
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <title>{t("terms-key")}</title>
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
        <h1>{t("terms-p-1")}</h1>
        <p> {t("terms-p-2")}</p>
        <h3> {t("terms-p-3")}</h3>
        <p>{t("terms-p-4")}</p>
        <p>
          {t("terms-p-5")}
          <Link> {t("terms-p-6")}</Link> {t("terms-p-7")}
        </p>
        <h3> {t("terms-p-8")}</h3>
        <p>
          {t("terms-p-9")}
          <Link> {t("terms-p-10")}</Link>
          {/* </Link> */}
          {t("terms-p-11")}
        </p>
        <p>{t("terms-p-12")}</p>
        <p>{t("terms-p-13")}</p>
        <p> {t("terms-p-14")}</p>
        <h3> {t("terms-p-15")}</h3>
        <p>{t("terms-p-16")}</p>
        <p>{t("terms-p-17")}</p>
        <p>{t("terms-p-18")}</p>
        <p>{t("terms-p-19")}</p>
        <p>{t("terms-p-20")}</p>
        <h3> {t("terms-p-21")}</h3>
        <p>{t("terms-p-22")}</p>
        <ul>
          <li>
            {t("terms-p-23")} <Link>{t("terms-p-24")} </Link> {t("terms-p-25")}
          </li>
          <li>
            {t("terms-p-26")} <Link> {t("terms-p-27")}</Link> {t("terms-p-28")}
          </li>
          <li>
            {t("terms-p-29")} <Link> {t("terms-p-30")} </Link>
          </li>
          <li>{t("terms-p-31")}</li>
        </ul>
        <h3> {t("terms-p-32")}</h3>
        <p>{t("terms-p-33")}</p>
        <p>{t("terms-p-34")}</p>
        <p>{t("terms-p-35")}</p>
        <h3> {t("terms-p-36")}</h3>
        <p>{t("terms-p-37")}</p>
        <p>
          {t("terms-p-38")}
          <Link> {t("terms-p-39")}</Link>
        </p>
        <h3> {t("terms-p-40")}</h3>
        <p>{t("terms-p-41")}</p>
        <p>{t("terms-p-42")}</p>
        <p>
          {t("terms-p-43")}
          <Link> {t("terms-p-44")}</Link>
        </p>
        <h3> {t("terms-p-45")}</h3>
        <p>{t("terms-p-46")}</p>
        <p>{t("terms-p-47")}</p>
        <h3> {t("terms-p-48")}</h3>
        <p>{t("terms-p-49")}</p>
        <h3> {t("terms-p-50")}</h3>
        <p>{t("terms-p-51")}</p>
        <p>
          {t("terms-p-52")} <Link> {t("terms-p-53")}</Link> {t("terms-p-54")}
        </p>
        <h3> {t("terms-p-55")}</h3>
        <p>{t("terms-p-56")}</p>
        <p>{t("terms-p-57")}</p>
        <p>{t("terms-p-58")}</p>
        <ul>
          <li> {t("terms-p-59")}</li>
          <li> {t("terms-p-60")}</li>
        </ul>
        <p>{t("terms-p-61")}</p>
        <ul>
          <li>{t("terms-p-62")}</li>
          <li>{t("terms-p-63")}</li>
          <li>{t("terms-p-64")}</li>
          <li>{t("terms-p-65")}</li>
          <li>{t("terms-p-66")}.</li>
        </ul>
        <h3>{t("terms-p-67")}</h3>
        <p>{t("terms-p-68")}</p>
        <h3>{t("terms-p-69")}</h3>
        <p>{t("terms-p-70")}</p>
        <h3> {t("terms-p-71")}</h3>
        <p>{t("terms-p-72")}</p>
        <h3> {t("terms-p-73")}</h3>
        <p>
          {t("terms-p-74")}

          <Link> {t("terms-p-75")}</Link>
        </p>
        <p>{t("terms-p-76")}</p>
        <p>{t("terms-p-77")}</p>
        <p>{t("terms-p-78")}</p>
        <p>{t("terms-p-79")}</p>
        <h3> {t("terms-p-80")}</h3>
        <p>{t("terms-p-81")}</p>
        <p>{t("terms-p-82")}</p>
        <p>{t("terms-p-83")}</p>
        <h3> {t("terms-p-84")}</h3>
        <p>{t("terms-p-85")}</p>
        <p>{t("terms-p-86")}</p>
        <h3> {t("terms-p-87")}</h3>
        <p>
          {t("terms-p-88")}
          <Link> {t("terms-p-89")}</Link> {t("terms-p-90")}
        </p>
        <p>{t("terms-p-91")}</p>
        <h3> {t("terms-p-92")}</h3>
        <p>{t("terms-p-93")}</p>
        <h3> {t("terms-p-94")}</h3>
        <p> {t("terms-p-95")}</p>
        <p>{t("terms-p-96")}</p>
        <p>{t("terms-p-97")}</p>
        <p>{t("terms-p-98")}</p>
        <p>
          {t("terms-p-99")}
          <Link> {t("terms-p-100")} </Link>
        </p>
        <h3> {t("terms-p-101")}</h3>
        <p>{t("terms-p-102")}</p>
        <p>{t("terms-p-103")}</p>
        <p>{t("terms-p-104")}</p>
        <p>{t("terms-p-105")}</p>
        <p>{t("terms-p-107")}</p>
        {/* <h3> {t("terms-p-106")}</h3> */}
        <h3>{t("terms-p-108")}</h3>
        <p>{t("terms-p-109")}</p>
        <p>{t("terms-p-110")}</p>
        <p>{t("terms-p-111")}</p>
        <p> {t("terms-p-112")}</p>
        <h3>{t("terms-p-113")}</h3>
        <p>{t("terms-p-114")}</p>
        <p>{t("terms-p-115")}</p>
        <p>{t("terms-p-116")}</p>
        <p> {t("terms-p-117")}</p>
        <h3>{t("terms-p-118")}</h3>
        <p>{t("terms-p-119")}</p>

        <ul>
          <li>{t("terms-p-120")}</li>
          <li>{t("terms-p-121")}</li>
        </ul>
        <h3>{t("terms-p-122")}</h3>
        <p>{t("terms-p-123")}</p>

        <ul>
          <li>{t("terms-p-124")}</li>
          <li> {t("terms-p-125")}</li>
        </ul>
        <h3>{t("terms-p-126")}</h3>
        <p>{t("terms-p-127")}</p>
        <p>{t("terms-p-128")}</p>
        <h3>{t("terms-p-129")}</h3>
        <p>{t("terms-p-130")}</p>
        <p>{t("terms-p-131")}</p>
        <p> {t("terms-p-132")}</p>
        <h3>{t("terms-p-133")}</h3>
        <p>{t("terms-p-134")}</p>
        <p> {t("terms-p-135")}</p>
        <h3>{t("terms-p-136")}</h3>
        <p> {t("terms-p-137")}</p>
        <h3> {t("terms-p-138")}</h3>
        <p>
          {t("terms-p-139")}
          <Link>{t("terms-p-140")}</Link>
        </p>
        <p> {t("terms-p-141")}</p>
        <h3>{t("terms-p-142")}</h3>
        <p>{t("terms-p-143")}</p>
        <p> {t("terms-p-144")}</p>
        <h3>{t("terms-p-145")}</h3>
        <p> {t("terms-p-146")}</p>
        <h3>{t("terms-p-147")}</h3>
        <p>{t("terms-p-148")}</p>
      </Box>

      <Footer />
    </Box>
  );
};

export default Portal;
