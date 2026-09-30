"use client";

import Image from "next/image";
import Link from "next/link";

/* 1. Lime 3D Torus / Donut */
function LimeTorusAuth() {
  const coilSrc = "/images/hero-section/mask-5.png";
  return (
    <div
      className="absolute -top-[10%] left-0 sm:-left-[5%] z-50 pointer-events-none select-none w-[340px] h-[340px] sm:w-[200px] sm:h-[200px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-float"
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

/* 3. Lime 3D Pyramid / Tetrahedron */
function LimePyramidAuth() {
  const coilSrc = "/images/hero-section/mask-3.png";
  return (
    <div
      width="220"
      height="220"
      className="absolute bottom-3 left-90 z-50 pointer-events-none select-none w-[340px] h-[340px] sm:w-[143px] sm:h-[143px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-blob"
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

/* 2. White 3D Zigzag / Spring */
function WhiteZigzagAuth() {
  const coilSrc = "/images/hero-section/mask-4.png";
  return (
    <div
      className="absolute top-[50%] left-[1%] z-50 pointer-events-none select-none w-[340px] h-[188px] sm:w-[188px] sm:h-[385px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] animate-blob"
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




function LevelBars() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 12 12"
      fill="currentColor"
      className="shrink-0 text-gray-700"
      aria-hidden="true"
    >
      <rect x="1" y="7" width="2.2" height="5" rx="0.5" />
      <rect x="5" y="4" width="2.2" height="8" rx="0.5" />
      <rect x="9" y="1" width="2.2" height="11" rx="0.5" />
    </svg>
  );
}


const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
];

export default function AuthLayout({ children, variant = "signin" }) {
  const isSignIn = variant === "signin";

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-[#0A4BF5] flex items-center justify-center py-10 sm:py-14 lg:py-16"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "120px 120px",
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 max-w-[1240px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ========================================================
              Left Column: Branding, Messaging & 3D Cards Collage
          ======================================================== */}
          <div className="hidden lg:flex lg:col-span-6 flex-col justify-center pr-4">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 mb-10 group">
              <Image className="h-[31px] w-[28.88px]" src="/logo.png" alt="Logo" width={1000} height={1000} priority />
            </Link>

            {/* Heading & Text */}
            <h2 className="text-[#F5F5F6] heading-xs mb-3">
              {isSignIn ? "Sign in with ease" : "Sign up and come in"}
            </h2>
            <p className="body-l text-[#F5F5F6] max-w-[450px] mb-12">
              {isSignIn
                ? "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
                : "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."}
            </p>

            {/* Collage Area with 3D elements & Course Cards */}
            <div className="relative w-full max-w-[460px] h-[380px] flex items-center justify-center">
              {/* 3D Shapes */}
              <LimeTorusAuth />
              <LimePyramidAuth />
              <WhiteZigzagAuth />

              {/* Back Card: Build Digital Asset (Peeking on left) */}
              <div className="absolute left-0 top-25 w-[240px] sm:w-[260px] bg-white rounded-[24px] p-3.5 shadow-xl border border-gray-100 z-10 opacity-95">
                <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden bg-gray-100 mb-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                    alt="Build Digital Asset"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 left-1.5 bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-medium text-gray-800">
                    17 Lessons
                  </span>
                </div>
                <h4 className="heading-xs text-gray-900">
                  Build Digital Asset
                </h4>
                <p className="body-xs text-[#003BE2] mb-2">by purepearl studio</p>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="bg-gray-100 px-2 py-0.5 rounded-full text-gray-700 text-[10px] flex items-center gap-2">
                    <LevelBars />
                    Beginner
                  </span>
                  <div className="flex items-center -space-x-1.5">
                    {studentAvatars.map((a, i) => (
                      <img
                        key={i}
                        src={a}
                        alt=""
                        className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <span className="w-5 h-5 rounded-full bg-[#D4F636] text-[9px] font-bold text-gray-950 flex items-center justify-center border-2 border-white">
                      26+
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-baseline gap-1">
                  <span className="font-heading font-extrabold text-[18px] text-[#003BE2] leading-none">
                    $25
                  </span>
                  <span className="body-xs text-gray-400">/lifetime</span>
                </div>
              </div>

              {/* Front Card: the Power of Big Data */}
              <div className="relative left-10 sm:left-14 top-0 w-[270px] sm:w-[295px] bg-white rounded-[26px] p-4 shadow-2xl border border-gray-100/90 z-20">
                <div className="relative aspect-[16/10] rounded-[18px] overflow-hidden bg-gray-950 mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=450&q=80"
                    alt="Power of Big Data"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[9px] text-gray-800 font-medium">
                    <span className="bg-white/80 backdrop-blur-md px-1.5 py-0.5 rounded-full">
                      17 Lessons
                    </span>
                    <span className="bg-white/80 backdrop-blur-md px-1.5 py-0.5 rounded-full">
                      2 hours 16 mins
                    </span>
                    <span className="bg-white/80 backdrop-blur-md px-1.5 py-0.5 rounded-full">
                      59 Comments
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-0.5">
                  <h4 className="heading-xs text-gray-950">
                    the Power of Big Data
                  </h4>
                  <div className="flex items-center gap-0.5 text-[12px] text-gray-600 font-medium shrink-0">
                    <span>4.5</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </div>

                <p className="body-xs text-[#003BE2] mb-2.5">by purepearl studio</p>

                <div className="flex items-center justify-between">
                  <span className="bg-gray-100 px-2 py-0.5 rounded-full text-gray-700 text-[10px] flex items-center gap-2">
                    <LevelBars />
                    Beginner
                  </span>
                  <div className="flex items-center -space-x-1.5">
                    {studentAvatars.map((a, i) => (
                      <img
                        key={i}
                        src={a}
                        alt=""
                        className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <span className="w-5 h-5 rounded-full bg-[#D4F636] text-[9px] font-bold text-gray-950 flex items-center justify-center border-2 border-white">
                      26+
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-baseline gap-1">
                  <span className="font-heading font-extrabold text-[18px] text-[#003BE2] leading-none">
                    $25
                  </span>
                  <span className="body-xs text-gray-400">/lifetime</span>
                </div>
              </div>

              {/* Floating Lime Card: Happy Students (Bottom-Right) */}
              <div className="absolute right-0 sm:right-2 bottom-0 z-30 bg-[#D4F636] text-gray-950 rounded-[20px] p-3.5 shadow-2xl border border-lime-300 w-[190px] sm:w-[205px]">
                <p className="font-heading font-semibold text-[13px] leading-tight text-[#242528]">
                  Happy Students
                </p>
                <div className="flex items-center gap-1 text-[11px] text-gray-900 font-medium mt-0.5 mb-2">
                  <span>4.5 (240)</span>
                  <span className="text-blue-600">★</span>
                </div>
                <div className="flex items-center -space-x-1.5">
                  {studentAvatars.map((a, i) => (
                    <img
                      key={i}
                      src={a}
                      alt=""
                      className="w-[43px] h-[43px] rounded-full border-2 border-[#D4F636] object-cover"
                    />
                  ))}
                  <span className="w-[43px] h-[43px] rounded-full bg-gray-950 text-[9px] font-bold text-white flex items-center justify-center border-2 border-[#D4F636]">
                    2K+
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              Right Column: Floating White Card Container (Form)
          ======================================================== */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[500px] bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/40">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
