import "./background-image.css";

import bgImage from "../../assets/images/bg-desktop-light.jpg";

function BackgroundImage() {
  return (
    <div className="bg-image-container">
      <img src={bgImage} alt="Background Image" />
    </div>
  );
}

export default BackgroundImage;
