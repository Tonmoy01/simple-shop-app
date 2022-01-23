import Banner from '../assets/banner.jpg';
import Banner1 from '../assets/banner1.jpg';
import Banner2 from '../assets/banner2.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Slider() {
  return (
    <Carousel
      showStatus={false}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
    >
      <div>
        <img src={Banner} alt='Banner' />
      </div>
      <div>
        <img src={Banner1} alt='Banner1' />
      </div>
      <div>
        <img src={Banner2} alt='Banner2' />
      </div>
    </Carousel>
  );
}

export default Slider;
