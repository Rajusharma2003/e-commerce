/* eslint-disable react/jsx-key */
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';



const items = MainCarouselData.map((item) => <img className='cursor-pointer w-full h-[500px] object-fill ' role='presentation' src={item.image} alt='img'/>)

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
);

export default MainCarousel