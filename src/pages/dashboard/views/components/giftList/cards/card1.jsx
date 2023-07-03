import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Torradeira"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Torradeira
        </Typography>
        <Typography variant="h4" color="text.secondary">
          R$: 100,00
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Presentear</Button>
      </CardActions>
    </Card>
  );
}