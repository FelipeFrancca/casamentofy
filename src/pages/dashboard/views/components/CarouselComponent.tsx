import React  from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carrossel1 from "../../../../assets/images/carrossel/carrossel1.jpg";
import carrossel2 from '../../../../assets/images/carrossel/carrossel2.jpg';
import carrossel3 from '../../../../assets/images/carrossel/carrossel3.jpg';

const CarouselComponent: React.FC = () => {

    return (
      <div>
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} >
          <div>
            <img src={carrossel1} alt="Imagem 1" width={800} height={600}/>
          </div>
          <div>
            <img src={carrossel2} alt="Imagem 2" width={800} height={600} />
          </div>
          <div>
            <img src={carrossel3} alt="Imagem 3" width={800} height={600}/>
          </div>
        </Carousel>
      </div>
    );
  };

  export default CarouselComponent;