import {useNavigate} from 'react-router-dom';
import {Carousel} from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "src/components/image/index.jsx";


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
      <div key="category/vozol-gear-10000">
        <Image src="images/slider1" preview={false} />
      </div>
      <div key="category/elf-bar-bc-5000">
        <Image src="images/slider2" preview={false} />
      </div>
    </Carousel>
  );
};

export default Index;
