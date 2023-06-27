import { Box, Button } from "@mui/material";
import React from "react";

function ButtonItem(props) {
  const { sx, ...other } = props;

  return (
    <Button
      sx={{
        width: "400px",
        height: "150px",
        display: "flex",
        textAlign: "center",
        fontWeight: 900,
        transition: "all 0.2s",
        background: "#8c0dac",

        '&:hover': {
          border: "#fff solid 3px",
          transform: "scale(1.1)",
          background: "#a308ca"
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
        <ButtonItem sx={colorStyle} {...other}>
          <IconComponent sx={{ color: "#fff" }} />
          <span style={{ color: "black" }}>{props.label}</span>
        </ButtonItem>
      )}
    </Box>
  );
};

export default HomeButtom;
