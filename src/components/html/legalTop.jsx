import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const LegalTop = (props) => {
  const { t } = useTranslation();

  return (
    <Box className="legal-top">
      <Box sx={{ width: { xs: "90vw", md: "80vw" }, margin: "auto" }}>
        <h1>{t(props.legal.title)}</h1>
      </Box>
    </Box>
  );
};

export default LegalTop;
