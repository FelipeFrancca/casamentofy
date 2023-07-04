import React  from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carrossel1 from '../../../../assets/images/carrossel/carrossel1.jpg';
import carrossel2 from '../../../../assets/images/carrossel/carrossel2.jpg';
import carrossel3 from '../../../../assets/images/carrossel/carrossel3.jpg';
import { Box } from '@mui/material';

const CarouselComponent: React.FC = () => {

    return (
      <Box
      sx={{
        display: "flex",
        alignItems: "end",
        width: "100vw",
        height: "70vh",  
        overflow: "hidden",
        backgroundSize: "cover",
        "@media (max-width: 768px)": {
          alignItems: "start",
          width: "100%",
          height: "400px",
        },
      }}
    >
        <Carousel autoPlay interval={8000} infiniteLoop showThumbs={false} >
          <Box sx={{ width: "100%", height: "50%" }}>
            <img src={carrossel1} alt="Imagem 1"/>
          </Box>
          <Box sx={{ width: "100%", height: "50%" }}>
            <img src={carrossel2} alt="Imagem 2" />
          </Box>
          <Box sx={{ width: "100%", height: "50%" }}>
            <img src={carrossel3} alt="Imagem 3"/>
          </Box>
        </Carousel>
      </Box>
    );
  };

  export default CarouselComponent;