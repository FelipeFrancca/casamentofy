/**
 * @name homeButtom.jsx
 * @type Button
 * @description Componente para botao da page view home.
 * 
 */

// Begin Default Imports
import { Box, Button } from "@mui/material";
import React from "react";
// End Default Imports

function ButtonItem(props) {
  const { sx, ...other } = props;

  return (
    <Button
      sx={{
        display: 'flex',
        marginRight: '30px',
        borderRadius: '40px !important',
        background: 'linear-gradient(315deg, #cacaca, #f0f0f0)',
        boxShadow: '-32px -32px 63px #bebebe, 32px 32px 63px #ffffff',
      }}
      variant="contained"
      {...other}
    >
    </Button>
  );
}

const homeButton = (props) => {
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

export default homeButton;
