import {useNavigate} from 'react-router-dom';
import {Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";


const Index = () => {
  const navigate = useNavigate();
  const handleClickImage = (_, e) => {
    navigate(e.key);
  }

  return (
    <Carousel
      autoPlay
      showArrows={true}
      showThumbs={false}
      showStatus
      showIndicators
      infiniteLoop
      useKeyboardArrows
      stopOnHover
      swipeable
      dynamicHeight
      emulateTouch
      selectedItem={0}
      interval={2000}
      transitionTime={500}
      swipeScrollTolerance={5}
      onClickItem={handleClickImage}
    >
      <div key="vozol-10000">
        <img src="/static/images/slider1.png" alt=""/>
      </div>
      <div key="elf-bar-bc-5000">
        <img src="/static/images/slider2.png" alt=""/>
      </div>
    </Carousel>
  );
};

export default Index;
