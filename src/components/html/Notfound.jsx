import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  let navigate = useNavigate();
  return (
    <Box
      className="error"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#00326D" }}>Page not found.</h1>
      <Button
        className="err-btn"
        sx={{
          marginTop: "20px",
          backgroundColor: "rgba(0, 198, 171, 1.0)",
          color: "white",
          padding: "10px 30px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </Button>
    </Box>
  );
};

export default Notfound;
