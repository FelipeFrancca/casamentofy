import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/NotFound.css";


const NotFound = (props) => {
  return (
    <div>
      <h1 className="error404">Erro 404</h1>
      <h2 className="textNotfound">Vish, página não encontrada</h2>
      <h3 className="textNotfound">Talvez você tenha inserido um link faltando informações ou que não existe neste site.</h3>
      <Button variant="contained" component={Link} to="/" >Voltar a tela inicial</Button>
    </div>
  );
};

export default NotFound;
