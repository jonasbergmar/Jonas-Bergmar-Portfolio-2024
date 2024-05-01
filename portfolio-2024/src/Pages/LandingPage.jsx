import Hero from "../Components/Hero";
import CtaButton from "../Components/CtaButtons";

const LandingPage = () => {
  return (
    <>
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
    </>
  );
};

export default LandingPage;
