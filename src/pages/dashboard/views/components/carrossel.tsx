import React  from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../../../../../assets/imgs/banners/carrossel/carrossel1.jpg'
import image2 from '../../../../../../assets/imgs/banners/carrossel/carrossel2.jpg'
import image3 from '../../../../../../assets/imgs/banners/carrossel/carrossel3.jpg'

const CarouselComponent: React.FC = () => {

    return (
      <div>
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} >
          <div>
            <img src={image1} alt="Imagem 1" width={800} height={600}/>
            <p className="legend">Legenda da imagem 1</p>
          </div>
          <div>
            <img src={image2} alt="Imagem 2" width={800} height={600} />
            <p className="legend">Legenda da imagem 2</p>
          </div>
          <div>
            <img src={image3} alt="Imagem 3" width={800} height={600}/>
            <p className="legend">Legenda da imagem 3</p>
          </div>
        </Carousel>
      </div>
    );
  };

  export default CarouselComponent;