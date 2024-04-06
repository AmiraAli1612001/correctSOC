import { Box, Grid, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import imgOne from "../../assets/images/grid-one.webp";
import imgTwo from "../../assets/images/grid-two.webp";
import { t } from "i18next";

const Sections = () => {
  return (
    <Box className="sections">
      <Grid
        container
        className="one"
        id="vulnerability-scanner"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px 10px", lg: "100px 0px" },
          alignItems: "center",
        }}
      >
        <Grid item xs={10} md={5}>
          <CardMedia
            sx={{
              maxWidth: { xs: "300px", md: "380px" },
              height: { xs: "310px", md: "390px" },
              margin: "30px auto",
            }}
            component="img"
            image={imgOne}
          />
        </Grid>
        <Grid item xs={10} md={5} sx={{ color: "white" }}>
          <h1>{t("section-vulnerability-h1")}</h1>
          <h2>{t("section-vulnerability-h2")}</h2>
          <ul>
            <li>{t("section-li-1")}</li>
            <li>{t("section-li-2")}</li>
            <li>{t("section-li-3")}</li>
            <li>{t("section-li-4")}</li>
            <li>{t("section-li-5")}</li>
          </ul>
          <p>{t("section-p-one")}</p>
          <p>{t("section-p-two")}</p>
          <i className="small">
            {t("section-i")}
            <ins>{t("section-ins")}</ins>
          </i>
          <Link to="/login">{t("create-small")}</Link>
        </Grid>
      </Grid>
      <Grid
        container
        className="two"
        id="Defender"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px 10px", lg: "100px 0px" },
          alignItems: "center",
        }}
      >
        <Grid item xs={10} md={5} sx={{ color: "white" }}>
          <h1>{t("section-Defender-h1")}</h1>
          <h2>{t("section-Defender-h2")}</h2>
          <ul>
            <li>{t("section-Defender-li-1")}</li>
            <li>{t("section-Defender-li-2")}</li>
            <li>{t("section-Defender-li-3")}</li>
            <li>{t("section-Defender-li-4")}</li>
          </ul>
          <p>{t("section-Defender-p-one")}</p>
          <p>{t("section-Defender-p-two")}</p>
          <i className="small">
            {t("section-Defender-i")}
            <ins>{t("section-Defender-ins")}</ins>
          </i>
          <Link to="/login">{t("create-small")}</Link>
        </Grid>
        <Grid
          item
          xs={10}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{
              maxWidth: { xs: "300px", md: "380px" },
              height: { xs: "310px", md: "390px" },
              margin: "30px auto",

              display: { xs: "none", md: "block" },
            }}
            component="img"
            image={imgTwo}
          />
        </Grid>
      </Grid>

      <Grid
        container
        className="one"
        id="cyber-coverage"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px 10px", lg: "100px 0px" },
          alignItems: "center",
        }}
      >
        <Grid item xs={10} md={5}>
          <CardMedia
            sx={{
              maxWidth: { xs: "300px", md: "380px" },
              height: { xs: "310px", md: "390px" },
              margin: "30px auto",
            }}
            component="img"
            image={imgOne}
          />
        </Grid>
        <Grid item xs={10} md={5} sx={{ color: "white" }}>
          <h1>{t("section-CyberCoverage-1")}</h1>
          <h2>{t("section-CyberCoverage-2")}</h2>
          <ul>
            <li>{t("section-CyberCoverage-3")}</li>
            <li>{t("section-CyberCoverage-4")}</li>
            <li>{t("section-CyberCoverage-5")}</li>
            <li>{t("section-CyberCoverage-6")}</li>
          </ul>
          <p>{t("section-CyberCoverage-7")}</p>

          <i className="small">
            {t("section-Defender-i")}
            <ins>{t("section-Defender-ins")}</ins>
          </i>
          <Link to="/login">{t("create-small")}</Link>
        </Grid>
      </Grid>

      <Grid
        container
        className="two"
        id="encryption"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px 10px", lg: "100px 0px" },
          alignItems: "center",
        }}
      >
        <Grid item xs={10} md={5} sx={{ color: "white" }}>
          <h1>{t("section-en-1")}</h1>
          <h2>{t("section-en-2")}</h2>
          <ul>
            <li>{t("section-en-1")}</li>
            <li>{t("section-en-2")}</li>
            <li>{t("section-en-3")}</li>
            <li>{t("section-en-4")}</li>
          </ul>
          <p>{t("section-en-7")}</p>
          <p>{t("section-en-8")}</p>
          <i className="small">
            {t("section-update-i")}

            <ins> {t("section-update-ins")}</ins>
          </i>
          <Link to="/login"> {t("create-small")}</Link>
        </Grid>
        <Grid item xs={10} md={5}>
          <CardMedia
            sx={{
              maxWidth: "380px",
              height: { xs: "310px", md: "390px" },
              margin: "30px auto",
            }}
            component="img"
            image={imgTwo}
          />
        </Grid>
      </Grid>

      <Grid
        container
        className="one"
        id="device-security"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px 10px", lg: "100px 0px" },
          alignItems: "center",
        }}
      >
        <Grid item xs={10} md={5}>
          <CardMedia
            sx={{
              maxWidth: { xs: "300px", md: "380px" },
              height: { xs: "310px", md: "390px" },
              margin: "30px auto",
              display: { xs: "none", md: "block" },
            }}
            component="img"
            image={imgOne}
          />
        </Grid>
        <Grid item xs={10} md={5} sx={{ color: "white" }}>
          <h1>{t("section-update-h1")}</h1>
          <h2>{t("section-update-h2")}</h2>
          <ul>
            <li>{t("section-update-li-1")}</li>
            <li>{t("section-update-li-2")}</li>
            <li>{t("section-update-li-3")}</li>
            <li>{t("section-update-li-4")}</li>
          </ul>
          <p>{t("section-update-p-one")}</p>
          <p>{t("section-update-p-two")}</p>
          <i className="small">
            {t("section-update-i")}

            <ins> {t("section-update-ins")}</ins>
          </i>
          <Link to="/login"> {t("create-small")}</Link>
        </Grid>
      </Grid>
      <Grid
        container
        id="MFA"
        className="two"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px 10px", lg: "100px 0px" },
          alignItems: "center",
        }}
      >
        <Grid item xs={10} md={5} sx={{ color: "white" }}>
          <h1>{t("MFA-h1")}</h1>
          <h2>{t("MFA-h2")}</h2>
          <ul>
            <li>{t("MFA-li-1")}</li>
            <li>{t("MFA-li-2")}</li>
            <li>{t("MFA-li-3")}</li>
            <li>{t("MFA-li-4")}</li>
            <li>{t("MFA-li-5")}</li>
          </ul>
          <p>{t("MFA-p-one")}</p>
          <p>{t("MFA-p-two")}</p>
          <i className="small">
            {t("section-MFA-i")}

            <ins>{t("section-MFA-ins")}</ins>
          </i>
          <Link to="/login">{t("create-small")}</Link>
        </Grid>
        <Grid item xs={10} md={5}>
          <CardMedia
            sx={{
              maxWidth: { xs: "300px", md: "380px" },
              margin: "30px auto",
              display: { xs: "none", md: "block" },
            }}
            component="img"
            image={imgTwo}
          />
        </Grid>
      </Grid>
      <Grid
        container
        id="certified-support"
        className="one"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px 10px", lg: "100px 0px" },
          alignItems: "center",
        }}
      >
        <Grid item xs={10} md={5}>
          <CardMedia
            sx={{
              maxWidth: { xs: "300px", md: "380px" },
              height: { xs: "310px", md: "390px" },
              margin: "30px auto",
            }}
            component="img"
            image={imgOne}
          />
        </Grid>
        <Grid item xs={10} md={5} sx={{ color: "white" }}>
          <h1>{t("support-h1")}</h1>
          <h2>{t("support-h2")}</h2>
          <ul>
            <li>{t("support-li-1")}</li>
            <li>{t("support-li-2")}</li>
            <li>{t("support-li-3")}</li>
            <li>{t("support-li-4")}</li>
          </ul>
          <p>{t("support-p-one")}</p>
          <i className="small">
            {t("section-support-i")}

            <ins> {t("section-support-ins")}</ins>
          </i>
          <Link to="/login">{t("create-small")}</Link>
        </Grid>
      </Grid>
      <Grid
        container
        id="cyber-heal"
        className="two"
        sx={{
          display: "flex",
          justifyContent: "center",

          padding: { xs: "20px 10px", lg: "100px 0px" },
          alignItems: "center",
        }}
      >
        <Grid item xs={10} md={5} sx={{ color: "white" }}>
          <h1>{t("heal-h1")}</h1>
          <p>{t("heal-p-one")}</p>
          <p>{t("heal-p-two")}</p>
          <ul>
            <li>{t("section-heal-i")}</li>
            <li>{t("heal-li-2")}</li>
            <li>{t("heal-li-3")}</li>
          </ul>
          <p>{t("heal-p-three")}</p>
          <p>{t("heal-p-four")}</p>
          <i className="small">
            {t("section-heal-i")}
            <ins>{t("section-heal-ins")}</ins>
          </i>
          <Link to="/login">{t("create-small")}</Link>
        </Grid>
        <Grid item xs={10} md={5}>
          <CardMedia
            sx={{
              maxWidth: { xs: "300px", md: "380px" },
              height: { xs: "310px", md: "390px" },
              margin: "30px auto",

              display: { xs: "none", md: "block" },
            }}
            component="img"
            image={imgTwo}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sections;
