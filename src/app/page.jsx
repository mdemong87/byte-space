import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import CoursesSection from "@/components/CoursesSection";
import CategoriesSection from "@/components/CategoriesSection";
import GrowthSection from "@/components/GrowthSection";
import CreatorsSection from "@/components/CreatorsSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <CoursesSection />
        <CategoriesSection />
        <GrowthSection />
        <CreatorsSection />
        <CTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
