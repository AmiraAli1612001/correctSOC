import { Box, Grid, Typography, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../css/style.css";
import "../../css/shares.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = (props) => {
  const { t } = useTranslation();

  let [back, setBack] = useState("");
  useEffect(() => {
    setBack(props.home.background);
  });
  return (
    <Box
      className="home"
      sx={{ padding: "50px 30px", backgroundImage: `url(${back})` }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid
          item
          xs={10}
          md={5}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <CardMedia
            sx={{ width: "90px", marginBottom: "25px" }}
            component="img"
            image={props.home.icon}
          />
          <Typography
            variant="h1"
            color="inherit"
            sx={{ color: "white", marginBottom: "25px", fontSize: "50px" }}
          >
            {props.home.title}
          </Typography>
          <Typography variant="p" color="white" sx={{ lineHeight: "30px" }}>
            {props.home.text}
          </Typography>
          <Link to="/login" className="create">
            {t("create-small")}
          </Link>
        </Grid>
        <Grid item xs={10} md={5}>
          <CardMedia
            component="img"
            image={props.home.img}
            sx={{ marginTop: { xs: "50px" } }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
