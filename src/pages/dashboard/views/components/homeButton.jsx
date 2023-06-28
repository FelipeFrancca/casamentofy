import { Box, Button } from "@mui/material";
import React from "react";

function ButtonItem(props) {
  const { sx, ...other } = props;

  return (
    <Button
      sx={{
        display: "flex",
        textAlign: "center",
        fontWeight: 900,
        fontSize: "18px",
        transition: "all 0.2s",
        background: "#B189D9",
        

        '&:hover': {
          border: "#fff solid 3px",
          transform: "scale(1.1)",
          background: "#4F328C"
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
        <ButtonItem {...other} >{props.label}{props.CardGiftcardIcon}</ButtonItem>
      )}
    </Box>
  );
};

export default HomeButtom;
