import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "@fontsource/roboto/700.css";
import "./Card.css";

export default function MediaControlCard({img,link,nome,}) {

  return (
    <Card className="cardBody">
      <Box sx={{ display: 'flex', flexDirection: 'column',}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" fontWeight={700}>
          {nome}
          </Typography>
          <a href={link}>Veja aqui</a>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151,}}
        image={img}
        alt="Imagem não encontrada"
      />
    </Card>
  );
}