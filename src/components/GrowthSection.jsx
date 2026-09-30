"use client";

import Image from "next/image";

function LevelBars() {
  return (
    <svg
      width="12"
      height="12"
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

function LimeSpring() {
  const coilSrc = "/images/hero-section/mask-1.png";
  return (
    <div className="relative pointer-events-none select-none w-[110px] h-[110px] xs:w-[130px] xs:h-[130px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[200px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
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

export default function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-16">
      {/* ========================================================
          Mesh Gradient Background
      ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-Center / Upper-Right Vibrant Lime Glow */}
        <div
          className="absolute -top-[35%] left-[8%] sm:left-[8%] w-[500px] sm:w-[680px] lg:w-[650px] h-[500px] sm:h-[680px] lg:h-[650px] rounded-full blur-[110px] sm:blur-[140px] lg:blur-[130px] opacity-100"
          style={{
            background:
              "radial-gradient(circle,rgba(203, 252, 1, 1), rgba(203, 252, 1, 0.23), rgba(203, 252, 1, 0.06),rgba(203, 252, 1, 0))",
          }}
        />

        {/* Bottom-Left Soft Lavender / Periwinkle Glow */}
        <div
          className="absolute -bottom-[50%] -left-[10%] w-[420px] sm:w-[600px] lg:w-[720px] h-[420px] sm:h-[600px] lg:h-[720px] rounded-full blur-[1000px] sm:blur-[130px] lg:blur-[150px] opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 59, 226, 1),rgba(0, 59, 226, 0.23),rgba(0, 59, 226, 0.06),rgba(0, 59, 226, 0))",
          }}
        />

        {/* Far-Right Ambient Lavender Aura */}
        <div
          className="absolute top-[0%] -right-[10%] w-[350px] lg:w-[500px] h-[400px] rounded-full blur-[120px] opacity-100"
          style={{
            background: "radial-gradient(circle,rgba(0, 59, 226, 1),rgba(0, 59, 226, 0.23),rgba(0, 59, 226, 0.06),rgba(0, 59, 226, 0))",
          }}
        />
      </div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ========================================================
              Left Column: Heading, Subtitle & Stats
          ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="heading-m text-[#242528]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="body-l max-w-[500px] mt-5 sm:mt-6 mb-8 sm:mb-10 text-gray-600">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the resources
              you need.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-8 sm:gap-14 pt-1 sm:pt-2">
              <div>
                <p className="font-heading font-bold text-[#1A56DB] text-[32px] sm:text-[42px] leading-tight">
                  12K
                </p>
                <p className="text-gray-600 body-l mt-0.5 text-sm sm:text-base">
                  Students
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-[#1A56DB] text-[32px] sm:text-[42px] leading-tight">
                  70+
                </p>
                <p className="text-gray-600 body-l mt-0.5 text-sm sm:text-base">
                  Courses
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-[#1A56DB] text-[32px] sm:text-[42px] leading-tight">
                  16
                </p>
                <p className="text-gray-600 body-l mt-0.5 text-sm sm:text-base">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================
              Right Column: Layered Collage (Card + Student + 3D Spring + Progress)
          ======================================================== */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[420px] xs:min-h-[470px] sm:min-h-[530px] lg:min-h-[580px] w-full max-w-[500px] lg:max-w-none mx-auto">
            {/* Layer 1: Back-Left Floating Course Card */}
            <div className="absolute -left-2 xs:left-0 sm:left-2 lg:left-0 top-0 sm:top-2 lg:top-4 w-[170px] xs:w-[200px] sm:w-[270px] lg:w-[310px] bg-white rounded-[18px] sm:rounded-[24px] p-2.5 xs:p-3 sm:p-4 border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] z-10 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[16/10] rounded-[12px] sm:rounded-[16px] overflow-hidden bg-gray-100 mb-2 sm:mb-3">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80"
                  alt="Learn Figma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[8px] xs:text-[9px] sm:text-[10px] text-gray-800 font-medium">
                  <span className="bg-white/80 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                  <span className="bg-white/80 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-full">
                    2h 16m
                  </span>
                </div>
              </div>

              <h4 className="text-gray-950 font-heading font-bold text-[12px] xs:text-[13px] sm:text-[16px] leading-snug truncate">
                Learn Figma from Basic
              </h4>
              <p className="text-[10px] xs:text-[11px] sm:text-[12px] text-[#003BE2] mb-1.5 sm:mb-2.5">
                by purepearl studio
              </p>

              <div className="flex items-center justify-between pt-1 border-t border-gray-100/80">
                <span className="text-[9px] xs:text-[10px] sm:text-[11px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-700 flex items-center gap-1.5">
                  <LevelBars />
                  <span>Beginner</span>
                </span>
                <div className="flex items-baseline gap-0.5">
                  <span className="font-heading font-bold text-[#003BE2] text-[12px] xs:text-[13px] sm:text-[16px]">
                    $25
                  </span>
                  <span className="text-[9px] xs:text-[10px] sm:text-[11px] text-gray-400">
                    /month
                  </span>
                </div>
              </div>
            </div>

            {/* Layer 2: 3D Lime Spring (Behind Student's Right Shoulder) */}
            <div className="absolute right-1 sm:right-4 lg:right-8 top-3 sm:top-8 lg:top-12 z-10 animate-float">
              <LimeSpring />
            </div>

            {/* Layer 3: Central Smiling Student with Headphones & Laptop */}
            <div className="relative z-20 w-[345px] xs:w-[355px] sm:w-[390px] lg:w-[510px]">
              <img
                src="/images/hero-section/hero-woman.png"
                alt="Student with laptop"
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
                loading="eager"
              />
            </div>

            {/* Layer 4: Floating "Learning Progress 55%" Card */}
            <div className="absolute right-0 sm:right-2 lg:right-6 bottom-1 xs:bottom-2 sm:bottom-8 lg:bottom-12 z-30 bg-white rounded-[16px] xs:rounded-[18px] sm:rounded-[22px] p-3 xs:p-3.5 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100/90 w-[138px] xs:w-[158px] sm:w-[195px] lg:w-[215px]">
              <p className="text-gray-500 text-[10px] xs:text-[11px] sm:text-[13px] font-medium mb-0.5 sm:mb-1">
                Learning Progress
              </p>
              <p className="font-heading font-bold text-gray-950 text-[22px] xs:text-[26px] sm:text-[34px] lg:text-[36px] leading-tight mb-1.5 sm:mb-2.5">
                55%
              </p>
              <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#D1F526] rounded-full w-[55%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
