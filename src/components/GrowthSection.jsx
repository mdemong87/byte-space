"use client";

import Image from "next/image";

function LimeSpring() {
  const coilSrc = "/images/hero-section/mask-1.png";
  return (
    <div className="absolute top-14 -left-14 sm:-left-32 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[385px] sm:h-[216px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)]">
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
          Mesh Gradient Background (Matches Image 1 precisely)
          - Top-center luminous lime/yellow glow
          - Bottom-left soft lavender/periwinkle blue glow
          - Clean ambient lighting
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ========================================================
              Left Column: Heading, Subtitle & Stats
          ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="heading-m t">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="body-l max-w-[500px] mt-6 mb-10">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the resources
              you need.
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-10 sm:gap-14 pt-2">
              <div>
                <p className="font-heading font-bold text-[#1A56DB] text-[36px] sm:text-[42px] leading-tight">
                  12K
                </p>
                <p className="text-gray-600 body-l mt-0.5">
                  Students
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-[#1A56DB] text-[36px] sm:text-[42px] leading-tight">
                  70+
                </p>
                <p className="text-gray-600 body-l mt-0.5">
                  Courses
                </p>
              </div>

              <div>
                <p className="font-heading font-bold text-[#1A56DB] text-[36px] sm:text-[42px] leading-tight">
                  16
                </p>
                <p className="text-gray-600 body-l mt-0.5">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================
              Right Column: Layered Collage (Card + Student + 3D Spring + Progress)
          ======================================================== */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
            {/* Layer 1: Back-Left Floating Course Card */}
            <div className="absolute left-0 sm:left-4 top-2 sm:top-6 w-[230px] sm:w-[260px] bg-white rounded-[24px] p-3.5 border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] z-10 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[16/11] rounded-[16px] overflow-hidden bg-gray-100 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80"
                  alt="Learn Figma"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-gray-800 font-medium">
                  <span className="bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full">
                    17 Lessons
                  </span>
                  <span className="bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full">
                    2 hours 16 mins
                  </span>
                </div>
              </div>
              <h4 className="font-heading font-bold text-gray-900 text-[14px] truncate">
                Learn Figma from Basic
              </h4>
              <p className="text-[11px] text-[#2563EB] mb-2.5">by purepearl studio</p>
              <div className="flex items-center justify-between">
                <span className="text-[11px] bg-gray-100 px-2.5 py-0.5 rounded-full text-gray-700">
                  Beginner
                </span>
                <span className="font-bold text-[#2563EB] text-[13px]">$25<span className="text-[10px] text-gray-400 font-normal">/lifetime</span></span>
              </div>
            </div>

            {/* Layer 2: 3D Lime Spring (Behind Student's Shoulder) */}
            <div className="absolute right-6 sm:right-10 top-12 sm:top-16 z-10 animate-float">
              <LimeSpring />
            </div>

            {/* Layer 3: Central Smiling Student with Headphones & Laptop */}
            <div className="relative z-20 w-[300px] sm:w-[360px] lg:w-[510px]">
              <img
                src="/images/hero-section/hero-woman.png"
                alt="Student with laptop"
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] rounded-[28px]"
                loading="eager"
              />
            </div>

            {/* Layer 4: Floating "Learning Progress 55%" Card */}
            <div className="absolute right-0 sm:right-2 bottom-6 sm:bottom-12 z-30 bg-white rounded-[22px] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100/90 w-[190px] sm:w-[215px]">
              <p className="text-gray-600 text-[13px] font-medium mb-1">Learning Progress</p>
              <p className="font-heading font-bold text-gray-950 text-[32px] sm:text-[36px] leading-tight mb-2.5">
                55%
              </p>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#D1F526] rounded-full w-[55%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
