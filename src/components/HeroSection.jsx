"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";

/* 1. Far-Left Lime Coiled Tube */
function LimeSpringLeft() {
  const coilSrc = "/images/hero-section/mask-1.png";
  return (
    <div className="hidden md:block absolute top-125 lg:top-24 -left-14 md:-left-40 lg:-left-24 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[385px] sm:h-[385px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-float">
      {/* Container masked strictly to the 3D coil silhouette */}
      <div
        className="relative w-full h-full isolate"
        style={{
          WebkitMaskImage: `url('${coilSrc}')`,
          maskImage: `url('${coilSrc}')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* Layer 1: Base vibrant lime color from style guide */}
        <div className="absolute inset-0 bg-[#D4FB20]" />

        {/* Layer 2: 3D greyscale shading applied via Color Burn */}
        <Image
          src={coilSrc}
          alt="Lime Spring Coil"
          width={1000}
          height={1000}
          className="w-full h-full object-contain mix-blend-color-burn"
          priority
        />

        {/* Layer 3: Subtle glossy highlight specular reflection */}
        <Image
          src={coilSrc}
          alt=""
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-contain mix-blend-screen opacity-50"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* 2. Left White Zigzag */
function WhiteZigzagLeft() {
  const coilSrc = "/images/hero-section/mask-3.png";
  return (
    <div
      className="hidden lg:block absolute top-[42%] left-10 sm:left-48 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[175px] sm:h-[175px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-blob"
      aria-hidden="true"
    >

      {/* Container masked strictly to the 3D coil silhouette */}
      <div
        className="relative w-full h-full isolate"
        style={{
          WebkitMaskImage: `url('${coilSrc}')`,
          maskImage: `url('${coilSrc}')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* Layer 1: Base vibrant lime color from style guide */}
        <div className="absolute inset-0 bg-[#F5F5F6]" />

        {/* Layer 2: 3D greyscale shading applied via Color Burn */}
        <Image
          src={coilSrc}
          alt="Lime Spring Coil"
          width={1000}
          height={1000}
          className="w-full h-full object-contain mix-blend-color-burn"
          priority
        />

        {/* Layer 3: Subtle glossy highlight specular reflection */}
        <Image
          src={coilSrc}
          alt=""
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-contain mix-blend-screen opacity-50"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* 3. Bottom-Left White 3D Torus / Donut */
function WhiteTorusLeft() {
  const coilSrc = "/images/hero-section/mask-5.png";
  return (
    <div
      width="220"
      height="220"
      className="hidden xl:block absolute bottom-6 -left-12 sm:bottom-12 sm:-left-4 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[343px] sm:h-[343px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-float"
      style={{ animationDelay: "1s" }}
      aria-hidden="true"
    >

      {/* Container masked strictly to the 3D coil silhouette */}
      <div
        className="relative w-full h-full isolate"
        style={{
          WebkitMaskImage: `url('${coilSrc}')`,
          maskImage: `url('${coilSrc}')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* Layer 1: Base vibrant lime color from style guide */}
        <div className="absolute inset-0 bg-[#F5F5F6]" />

        {/* Layer 2: 3D greyscale shading applied via Color Burn */}
        <Image
          src={coilSrc}
          alt="Lime Spring Coil"
          width={1000}
          height={1000}
          className="w-full h-full object-contain mix-blend-color-burn"
          priority
        />

        {/* Layer 3: Subtle glossy highlight specular reflection */}
        <Image
          src={coilSrc}
          alt=""
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-contain mix-blend-screen opacity-50"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* 4. Top-Right Lime 3D Cylinder */
function LimeCylinderRight() {
  const coilSrc = "/images/hero-section/mask-2.png";
  return (
    <div
      className="hidden md:block absolute top-115 lg:top-28 -right-10 md:-right-50 lg:-right-32 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[371px] sm:h-[371px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-float"
    >
      {/* Container masked strictly to the 3D coil silhouette */}
      <div
        className="relative w-full h-full isolate"
        style={{
          WebkitMaskImage: `url('${coilSrc}')`,
          maskImage: `url('${coilSrc}')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* Layer 1: Base vibrant lime color from style guide */}
        <div className="absolute inset-0 bg-[#D4FB20]" />

        {/* Layer 2: 3D greyscale shading applied via Color Burn */}
        <Image
          src={coilSrc}
          alt="Lime Spring Coil"
          width={1000}
          height={1000}
          className="w-full h-full object-contain mix-blend-color-burn"
          priority
        />

        {/* Layer 3: Subtle glossy highlight specular reflection */}
        <Image
          src={coilSrc}
          alt=""
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-contain mix-blend-screen opacity-50"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* 5. Right White 3D Tetrahedron / Pyramid */
function WhitePyramidRight() {
  const coilSrc = "/images/hero-section/mask-4.png";
  return (
    <div
      className=" hidden lg:block absolute top-[40%] right-[8%] sm:right-[14%] lg:right-[20%] z-0 pointer-events-none select-none w-[340px] h-[188px] sm:w-[188px] sm:h-[385px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-blob"
      style={{ animationDelay: "2s" }}
      aria-hidden="true"
    >
      {/* Container masked strictly to the 3D coil silhouette */}
      <div
        className="relative w-full h-full isolate"
        style={{
          WebkitMaskImage: `url('${coilSrc}')`,
          maskImage: `url('${coilSrc}')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* Layer 1: Base vibrant lime color from style guide */}
        <div className="absolute inset-0 bg-[#F5F5F6]" />

        {/* Layer 2: 3D greyscale shading applied via Color Burn */}
        <Image
          src={coilSrc}
          alt="Lime Spring Coil"
          width={1000}
          height={1000}
          className="w-full h-full object-contain mix-blend-color-burn"
          priority
        />

        {/* Layer 3: Subtle glossy highlight specular reflection */}
        <Image
          src={coilSrc}
          alt=""
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-contain mix-blend-screen opacity-50"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/* 6. Bottom-Right White 3D Spring */
function WhiteSpringBottomRight() {
  const coilSrc = "/images/hero-section/mask-6.png";
  return (
    <div
      className="hidden xl:block absolute bottom-6 -right-6 sm:right-2 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[331px] sm:h-[331px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-float"
      style={{ animationDelay: "1.5s" }}
    >
      {/* Container masked strictly to the 3D coil silhouette */}
      <div
        className="relative w-full h-full isolate"
        style={{
          WebkitMaskImage: `url('${coilSrc}')`,
          maskImage: `url('${coilSrc}')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* Layer 1: Base vibrant lime color from style guide */}
        <div className="absolute inset-0 bg-[#F5F5F6]" />

        {/* Layer 2: 3D greyscale shading applied via Color Burn */}
        <Image
          src={coilSrc}
          alt="Lime Spring Coil"
          width={1000}
          height={1000}
          className="w-full h-full object-contain mix-blend-color-burn"
          priority
        />

        {/* Layer 3: Subtle glossy highlight specular reflection */}
        <Image
          src={coilSrc}
          alt=""
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-contain mix-blend-screen opacity-50"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

const happyAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=80&h=80&q=80",
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0A4BF5] pt-[100px] sm:pt-[125px] lg:pt-[135px] pb-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
      }}
    >
      {/* 3D Floating Elements around the perimeter */}
      <LimeSpringLeft />
      <WhiteZigzagLeft />
      <WhiteTorusLeft />
      <LimeCylinderRight />
      <WhitePyramidRight />
      <WhiteSpringBottomRight />

      {/* Main Content Area */}
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-white heading-l text-center max-w-[935px] animate-fade-in-up">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="text-[#E5E6E8] max-w-[620px] mx-auto text-center mt-5 mb-8 body-l animate-fade-in-up delay-100">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        {/* Search Bar + Button */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 max-w-[580px] mx-auto w-full px-2 sm:px-0 mb-12 sm:mb-16 z-20 animate-fade-in-up delay-200"
        >
          <div className="relative w-full sm:w-[380px] md:w-[420px]">
            <HiSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full h-[52px] sm:h-[56px] pl-12 pr-6 rounded-full bg-white text-gray-900 placeholder:text-gray-400 text-[15px] shadow-lg shadow-black/10 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto h-[52px] sm:h-[56px] px-8 sm:px-9 rounded-full bg-[#D4F636] hover:bg-[#c2e820] active:scale-95 text-gray-950 font-medium text-[15px] sm:text-[16px] transition-all shadow-lg shadow-black/10 shrink-0 cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Central Person + Lime Backdrop Arc + Floating Cards */}
        <div className="relative w-full max-w-[1000px] flex justify-center items-end mt-4 sm:mt-6 overflow-visible">

          {/* Giant Lime Arc/Circle behind student */}
          <div
            className="absolute bottom-0 left-2/3 -translate-x-1/6 w-full sm:w-full md:w-[800px] lg:w-[1149px] h-[500px] sm:h-[600px] md:h-[860px] lg:h-[1149px] bg-[#D2F627] rounded-full z-0 shadow-2xl"
            style={{
              transform: "translate(-50%, 65%)",
            }}
          />

          {/* Central Smiling Student */}
          <div className="relative z-10 w-[380px] sm:w-[430px] md:w-[550px] lg:w-[490px] flex justify-center">
            <img
              src="/images/hero-section/hero-woman.png/"
              alt="Student with laptop"
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.2)]"
              loading="eager"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Left of student's shoulder) */}
          <div className="hidden lg:block absolute left-[0%] sm:left-[4%] lg:left-[18%] top-[30%] sm:top-[20%] z-20 bg-white rounded-[20px] px-5 py-3.5 shadow-2xl border border-gray-100/80 transition-transform duration-300 hover:-translate-y-1">
            <p className="label-m text-gray-950">
              UI/UX Design
            </p>
            <p className="text-gray-400 text-[11px] sm:text-[12px] mt-0.5">
              200 Courses • 1000+ Students
            </p>
          </div>

          {/* Floating Card 2: Learning Progress 55% (Right of student's shoulder) */}
          <div className="absolute right-[0%] sm:right-[4%] lg:right-[12%] top-[24%] md:top-[33%] lg:top-[28%] z-0 md:z-20 bg-white rounded-[22px] p-4 sm:p-5 shadow-2xl border border-gray-100/80 w-[170px] sm:w-[200px] lg:w-[220px] transition-transform duration-300 hover:-translate-y-1">
            <p className="text-gray-500 label-s mb-1">Learning Progress</p>
            <p className="font-heading font-bold text-gray-950 text-[28px] sm:text-[38px] leading-tight mb-2.5">
              55%
            </p>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#D1F526] rounded-full w-[55%]" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Bottom-Left) */}
          <div className="absolute -left-[2%] sm:left-[2%] lg:left-[10%] bottom-[6%] sm:bottom-[10%] z-20 bg-white rounded-[22px] p-3.5 sm:p-[16px] shadow-2xl border border-gray-100/80 transition-transform duration-300 hover:-translate-y-1">
            <p className="label-m text-gray-950]">
              Happy Students
            </p>
            <div className="flex items-center gap-1 body-xs text-gray-600 mt-0.5 mb-2">
              <span className="body-xs text-gray-900">4.5</span>
              <span>(240)</span>
              <FaStar className="w-3 h-3 text-[#D1F526]" />
            </div>
            <div className="flex items-center -space-x-1.5">
              {happyAvatars.slice(0, 5).map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="Student"
                  className="w-[43x] h-[43px] rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-[43px] h-[43px] rounded-full bg-[#D1F526] text-gray-950 text-[9px] sm:text-[10px] font-bold flex items-center justify-center border-2 border-white shrink-0">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
