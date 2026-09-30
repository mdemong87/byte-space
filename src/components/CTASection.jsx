"use client";

import Image from "next/image";
import Link from "next/link";

/* 1. */
function LimeSpringTopLeft() {
  const coilSrc = "/images/hero-section/mask-1.png";
  return (
    <div className="hidden lg:block absolute -top-36 -left-32 sm:-left-24 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[385px] sm:h-[385px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-float">
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

/* 4. */
function WhiteZigzag() {
  const coilSrc = "/images/hero-section/mask-5.png";
  return (
    <div
      className="hidden xl:block absolute top-[65%] left-0 sm:left-48 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[280px] sm:h-[280px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-float"
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

/* 2. Bottom-Left White 3D Cone */
function WhiteCone() {
  const coilSrc = "/images/hero-section/mask-3.png";
  return (
    <div
      width="220"
      height="220"
      className="hidden xl:block absolute top-9 left-60 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[143px] sm:h-[143px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-blob"
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

/* 6. Bottom-Left Lime 3D Torus / Donut */
function LimeTorus() {
  const coilSrc = "/images/hero-section/mask-2.png";
  return (
    <div
      className="hidden lg:block absolute top-60 xl:top-5 -right-10 sm:-right-35 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[300px] sm:h-[300px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-float"
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



/* 5. Top-Right Lime 3D Pyramid / Tetrahedron */
function LimePyramidtwo() {
  const coilSrc = "/images/hero-section/mask-4.png";
  return (
    <div
      className="hidden xl:block absolute -top-[12%] right-[8%] sm:right-[10%] lg:right-[16%] z-0 pointer-events-none select-none w-[340px] h-[188px] sm:w-[188px] sm:h-[385px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-blob"
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



/* 3. Top-Right Lime 3D Pyramid / Tetrahedron */
function LimePyramid() {
  const coilSrc = "/images/hero-section/mask-4.png";
  return (
    <div
      className="hidden xl:block absolute top-[23%] left-[8%] sm:left-[14%] lg:left-[0%] z-0 pointer-events-none select-none w-[340px] h-[188px] sm:w-[188px] sm:h-[385px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-blob"
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

/* 7. Top-Right White 3D Cylinder */
function WhiteCylinder() {
  const coilSrc = "/images/hero-section/mask-6.png";
  return (
    <div
      className="hidden xl:block absolute -bottom-30 -right-6 sm:right-2 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[331px] sm:h-[331px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-float"
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


export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden bg-[#003be2] py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
      }}
    >
      {/* 3D Floating Elements Matching the Reference Image */}
      <LimeSpringTopLeft />
      <WhiteZigzag />
      <WhiteCone />
      <LimeTorus />
      <LimePyramidtwo />
      <LimePyramid />
      <WhiteCylinder />

      {/* Main Center Content */}
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-white heading-m max-w-[850px]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-white/85 body-l max-w-[964px] mx-auto mt-6 mb-9">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and international
          creators. Utilize our Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* Join Button */}
        <Link
          href="/signup"
          className="bg-[#D4F636] hover:bg-[#c2e820] active:scale-95 text-gray-950 label-l px-8 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-lg shadow-black/15 cursor-pointer inline-flex items-center justify-center select-none"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
