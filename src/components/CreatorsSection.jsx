"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";

function LimeSpring() {
  const coilSrc = "/images/hero-section/mask-1.png";
  return (
    <div className="absolute top-40 -left-14 sm:-left-49 z-0 pointer-events-none select-none w-[340px] h-[340px] sm:w-[385px] sm:h-[216px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)]">
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

const checkList = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const happyStudentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80",
];

export default function CreatorsSection() {
  return (
    <section id="creators" className="relative overflow-hidden bg-white pb-10 lg:pb-16">
      {/* ========================================================
          Mesh Gradient Background (Matches Image 2 precisely)
          - Top-left cool lavender / soft blue glow
          - Bottom-left luminous lime glow
          - Bottom-right soft periwinkle ambient glow
      ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">



        {/* Bottom-Left Soft Lavender / Periwinkle Glow */}
        <div
          className="absolute -top-[50%] -left-[10%] w-[420px] sm:w-[600px] lg:w-[720px] h-[420px] sm:h-[600px] lg:h-[720px] rounded-full blur-[100px] sm:blur-[130px] lg:blur-[150px] opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(0, 59, 226, 1),rgba(0, 59, 226, 0.23),rgba(0, 59, 226, 0.06),rgba(0, 59, 226, 0))",
          }}
        />


        {/* Bottom-Left Luminous Lime Glow */}
        <div
          className="absolute -bottom-[25%] -left-[15%] w-[400px] sm:w-[550px] lg:w-[680px] h-[400px] sm:h-[550px] lg:h-[680px] rounded-full blur-[110px] sm:blur-[140px] lg:blur-[40px] opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(203, 252, 1, 1),rgba(203, 252, 1, 0.23), rgba(203, 252, 1, 0.06),rgba(203, 252, 1, 0))",
          }}
        />

        {/* Bottom-Right Soft Lavender / Periwinkle Spread */}
        <div
          className="absolute -bottom-[30%] -right-[14%] w-[420px] sm:w-[580px] lg:w-[720px] h-[420px] sm:h-[580px] lg:h-[720px] rounded-full blur-[100px] sm:blur-[130px] lg:blur-[150px] opacity-75"
          style={{
            background:
              "radial-gradient(circle,rgba(0, 59, 226, 1),rgba(0, 59, 226, 0.23), rgba(0, 59, 226, 0.06),rgba(0, 59, 226, 0))",
          }}
        />
      </div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ========================================================
              Left Column: Visual Composition (Creator + Floating Cards + 3D Spring)
          ======================================================== */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] order-2 lg:order-1">
            {/* Floating Card 1: Total Revenue (Top-Left) */}
            <div className="absolute left-0 sm:left-2 top-2 sm:top-6 z-30 bg-[#1A56DB] text-white rounded-[20px] p-4 sm:p-5 shadow-2xl w-[180px] sm:w-[205px] border border-blue-400/20">
              <p className="text-white text-[13px] font-medium leading-none">Total Revenue</p>
              <p className="text-white/70 text-[11px] mt-1 mb-2">July 1-28</p>
              <p className="font-heading font-bold text-white text-[24px] sm:text-[26px] leading-tight mb-3">
                $120.29
              </p>
              <div className="w-full h-1.5 bg-blue-900/40 rounded-full overflow-hidden">
                <div className="h-full bg-[#D1F526] rounded-full w-[65%]" />
              </div>
            </div>

            {/* Floating Card 2: Year to Date (Middle-Left) */}
            <div className="absolute left-0 sm:left-2 top-[170px] sm:top-[190px] z-30 bg-[#1A56DB] text-white rounded-[20px] p-4 sm:p-5 shadow-2xl w-[170px] sm:w-[190px] border border-blue-400/20">
              <p className="text-white text-[13px] font-medium leading-none">Year to Date</p>
              <p className="text-white/70 text-[11px] mt-1 mb-1.5">2023</p>
              <p className="font-heading font-bold text-white text-[22px] sm:text-[25px] leading-tight mb-2.5">
                $1,200.38
              </p>
              <span className="inline-block bg-[#D1F526] text-gray-950 font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow-sm">
                +12%
              </span>
            </div>

            {/* 3D Lime Spring Behind Creator's Shoulder */}
            <div className="absolute right-8 sm:right-14 top-20 sm:top-24 z-10 animate-float">
              <LimeSpring />
            </div>

            {/* Central Female Creator with Headset & Tablet */}
            <div className="relative z-20 w-[290px] sm:w-[350px] lg:w-[520px]">
              <img
                src="/images/hero-section/woman-two.png"
                alt="Creator with tablet"
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] rounded-[28px]"
                loading="eager"
              />
            </div>

            {/* Floating Card 3: Happy Students (Bottom-Right) */}
            <div className="absolute right-0 sm:right-4 bottom-4 sm:bottom-8 z-30 bg-white rounded-[22px] p-4 sm:p-4.5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100/90 w-[210px] sm:w-[235px]">
              <p className="font-heading font-bold text-gray-950 text-[14px]">
                Happy Students
              </p>
              <div className="flex items-center gap-1 text-[12px] text-gray-600 mt-0.5 mb-2.5">
                <span className="font-semibold text-gray-900">4.5</span>
                <span>(240)</span>
                <FaStar className="w-3 h-3 text-yellow-400" />
              </div>
              <div className="flex items-center -space-x-1.5">
                {happyStudentAvatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt="Student"
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-6 h-6 rounded-full bg-[#D1F526] text-gray-950 text-[10px] font-bold flex items-center justify-center border-2 border-white shrink-0">
                  2K+
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              Right Column: Heading, Subtitle & Checklist
          ======================================================== */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <h2 className="font-heading font-bold text-gray-950 text-[36px] sm:text-[46px] lg:text-[54px] leading-[1.12] tracking-tight">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.7] max-w-[500px] mt-6 mb-8">
              <span className="font-bold text-gray-950">ByteSpace</span> supports individuals or
              entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist with Solid Blue Checkmarks */}
            <div className="space-y-4">
              {checkList.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1A56DB] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="2.5 6 4.8 8.5 9.5 3.5" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900 text-[15px] sm:text-[16px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
