/* eslint-disable react/prop-types */
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useRef } from "react";

const HomeSectionDetails = ({data , sectionName}) => {

  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  return (
    <div className="relative px-4 lg:px-8 ml-20">
      {/* This is the heading */}
      <h1 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h1>
      <AliceCarousel
        ref={carouselRef}
        items={items}
        responsive={responsive}
        disableDotsControls={true}  
        infinite={true}     
        disableButtonsControls        
      />

      {/* Button Container */}
      <div className="absolute inset-0 flex justify-between items-center">
        
        {/* Previous button */}
        <button 
          onClick={slidePrev} 
          className="pointer-events-auto bg-gray-300  text-black p-2 rounded-full ml-2"
        >
          <ChevronLeftIcon />
        </button>

        {/* Next button */}
        <button 
          onClick={slideNext} 
          className="pointer-events-auto bg-gray-300  text-black p-2 rounded-full mr-2"
        >
          <ChevronLeftIcon className="rotate-180" />
        </button>

      </div>
    </div>
  );
};

export default HomeSectionDetails;


