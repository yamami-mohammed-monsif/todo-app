import "./background-image.css";

import bgImageDesktopLight from "../../assets/images/bg-desktop-light.jpg";
import bgImageMobileLight from "../../assets/images/bg-mobile-light.jpg";
import bgImageDesktopDark from "../../assets/images/bg-desktop-dark.jpg";
import bgImageMobileDark from "../../assets/images/bg-mobile-dark.jpg";

function BackgroundImage({ isDarkTheme }) {
  return (
    <div className="bg-image-container">
      <picture>
        <source
          srcSet={isDarkTheme ? bgImageDesktopDark : bgImageDesktopLight}
          media="(min-width: 700px)"
        />
        <img
          src={isDarkTheme ? bgImageMobileDark : bgImageMobileLight}
          alt="Background Image"
        />
      </picture>
    </div>
  );
}

export default BackgroundImage;
