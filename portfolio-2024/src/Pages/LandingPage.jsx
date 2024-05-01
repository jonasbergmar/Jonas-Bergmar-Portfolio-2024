import Hero from "../Components/Hero";
import CtaButton from "../Components/CtaButtons";
import ImageSlider from "../Components/ImageSlider";

const LandingPage = () => {
  // Define an array of image paths
  const images = [
    "src/Assets/Bild 01.png",
    "src/Assets/Bild 02.png",
    "src/Assets/Bild 03.png",
    "src/Assets/Bild 04.png",
  ];

  return (
    <>
      <div className="max-w-[1120px] flex flex-col w-full gap-8 ">
        <div>
          <div className=" items-start text-2xl flex flex-col overflow-hidden gap-4 z-10 lg:flex-row">
            <Hero
              display={"Hello!"}
              display2={
                "My Name Is Jonas. A UI/UX Designer From Stockholm, Sweden."
              }
            />
          </div>
          <div className="ctaContainer overflow-visible flex mt-4 gap-4">
            <CtaButton />
          </div>
        </div>
        <div className="imageSliderContainer flex items-center justify-center">
          {/* Pass the images array as a prop to ImageSlider */}
          <ImageSlider images={images} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
