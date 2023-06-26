import { Box, Button } from "@mui/material";
import React from "react";

function ButtonItem(props) {
  const { sx, ...other } = props;

  return (
    <Button
      sx={{
        width: "150px",
        height: "150px",
        margin: "5px",
        display: "flex",
        textAlign: "center",
        fontWeight: 900,
        transition: "all 0.2s",

        '&:hover': {
          border: "#fff solid 3px",
          transform: "scale(1.1)",
        }
      }}
      variant="contained"
      {...other}
    >
    </Button>
  );
}

const HomeButtom = (props) => {
  const { ...other } = props;
  return (
    <Box>
      {props.disabled ? (
        <ButtonItem disabled >{props.label}</ButtonItem>
      ) : (
        <ButtonItem color={`${props.color}`} {...other} >{props.label}</ButtonItem>
      )}
    </Box>
  );
};

export default HomeButtom;
