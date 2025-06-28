import Header from "@/components/Header";
import PracticeAreaSection from "@/components/PracticeAreaSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import BiographySection from "@/components/BiographySection";
import EducationBarAdmissionSection from "@/components/EducationBarAdmissionSection";
import CaseStudySection from "@/components/CaseStudySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DotNavigation from "@/components/DotNavigation";

export default function Home() {
  return (
    <div>
      <DotNavigation />
      <div id="home"><Header /></div>
      <div id="practice-area"><PracticeAreaSection /></div>
      <div id="why-choose-us"><WhyChooseUsSection /></div>
      <div id="biography"><BiographySection /></div>
      <div id="education"><EducationBarAdmissionSection /></div>
      <div id="case-study"><CaseStudySection /></div>
      <div id="testimonial"><TestimonialsSection /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </div>
  );
}
