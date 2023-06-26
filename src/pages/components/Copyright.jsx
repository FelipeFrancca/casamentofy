import React from "react";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import "./Copyright.css"

export default function Copyright(props) {
    return (
      <Typography className="Copyright"
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://exatoconsultoria.com/">
          Exato Consultoria
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }