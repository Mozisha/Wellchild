import Image from "next/image";
import FeatureSlider from "./components/FeatureSlider";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import FeaturedTherapists from "./components/FeaturedTherapists";
import FeaturedPsychologists from "./components/FeaturedPsychologists";
import HowItWorks from "./components/HowItWorks";
import TestimonialsAndCare from "./components/TestimonialsAndCare";
import ScreeningServices from "./components/ScreeningServices";
import JoinNetwork from "./components/JoinNetwork";
import CtaSection from "./components/CtaSection";
import LearningCenter from "./components/LearningCenter";
import FaqSection from "./components/FaqSection";
import BabiesSlider from "./components/BabiesSlider";
import Popup from "./components/Popup"; 

export default function Home() {
  return (
    <main>
       <Popup /> 
      <HeroSection />
     <FeatureSlider />
      <AboutSection />
      <ServicesSection />
      <FeaturedTherapists />
      <FeaturedPsychologists /> 
      <HowItWorks />
      <TestimonialsAndCare />
      <ScreeningServices /> 
      <JoinNetwork /> 
       <CtaSection />
        <LearningCenter />
         <FaqSection />
           <BabiesSlider />

      
    </main>
  );
}
