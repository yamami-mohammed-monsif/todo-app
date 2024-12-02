import "./background-image.css";

import bgImageDesktopLight from "../../assets/images/bg-desktop-light.jpg";
import bgImageMobileLight from "../../assets/images/bg-mobile-light.jpg";

function BackgroundImage() {
  return (
    <div className="bg-image-container">
      <picture>
        <source srcSet={bgImageDesktopLight} media="(min-width: 700px)" />
        <img src={bgImageMobileLight} alt="Background Image" />
      </picture>
    </div>
  );
}

export default BackgroundImage;
