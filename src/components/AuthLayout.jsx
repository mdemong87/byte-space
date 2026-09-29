"use client";

import Link from "next/link";

/* 1. Lime 3D Torus / Donut */
function LimeTorusAuth() {
  return (
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      className="absolute -top-6 -left-6 z-30 pointer-events-none drop-shadow-xl select-none animate-float"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="auth-torus-grad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#EAFF6B" />
          <stop offset="50%" stopColor="#D2F627" />
          <stop offset="85%" stopColor="#B0DD05" />
          <stop offset="100%" stopColor="#7FA500" />
        </radialGradient>
      </defs>
      <circle cx="65" cy="65" r="44" stroke="url(#auth-torus-grad)" strokeWidth="24" fill="none" />
      <ellipse cx="60" cy="60" rx="44" ry="44" stroke="#FFFFFF" strokeWidth="6" fill="none" opacity="0.4" />
    </svg>
  );
}

/* 2. Lime 3D Pyramid / Tetrahedron */
function LimePyramidAuth() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      className="absolute -bottom-10 -left-6 z-30 pointer-events-none drop-shadow-2xl select-none animate-float"
      style={{ animationDelay: "1.5s" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="auth-pyr-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5FF90" />
          <stop offset="100%" stopColor="#DBF83C" />
        </linearGradient>
        <linearGradient id="auth-pyr-side" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B4DD04" />
          <stop offset="100%" stopColor="#8DAF00" />
        </linearGradient>
        <linearGradient id="auth-pyr-bot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9F218" />
          <stop offset="100%" stopColor="#A5CE00" />
        </linearGradient>
      </defs>
      <polygon points="65,10 10,75 95,100" fill="url(#auth-pyr-top)" />
      <polygon points="65,10 95,100 110,55" fill="url(#auth-pyr-side)" />
      <polygon points="10,75 95,100 60,115" fill="url(#auth-pyr-bot)" />
    </svg>
  );
}

/* 3. White 3D Zigzag / Spring */
function WhiteZigzagAuth() {
  return (
    <svg
      width="110"
      height="140"
      viewBox="0 0 110 140"
      fill="none"
      className="absolute bottom-6 right-2 z-30 pointer-events-none drop-shadow-xl select-none animate-float"
      style={{ animationDelay: "2s" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="auth-white-coil" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
      <path
        d="M25 15 Q 70 15, 50 38 Q 10 48, 55 70 Q 15 82, 60 102"
        stroke="url(#auth-white-coil)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 15 Q 70 15, 50 38 Q 10 48, 55 70 Q 15 82, 60 102"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
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
              <svg
                width="34"
                height="34"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 transition-transform group-hover:scale-105"
              >
                <rect x="2" y="2" width="6" height="24" rx="3" fill="#D4F636" />
                <path
                  d="M11 11.2C11 10.3 12 9.7 12.8 10.2L22.5 16.1C23.2 16.5 23.2 17.5 22.5 17.9L12.8 23.8C12 24.3 11 23.7 11 22.8V11.2Z"
                  fill="#D4F636"
                />
              </svg>
            </Link>

            {/* Heading & Text */}
            <h2 className="font-heading font-bold text-white text-[28px] sm:text-[32px] leading-tight mb-3">
              {isSignIn ? "Sign in with ease" : "Sign up and come in"}
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.65] max-w-[450px] mb-12">
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
              <div className="absolute left-0 top-12 w-[240px] sm:w-[260px] bg-white rounded-[24px] p-3.5 shadow-xl border border-gray-100 z-10 opacity-95">
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
                <h4 className="font-heading font-bold text-gray-900 text-[13px] truncate">
                  Build Digital Asset
                </h4>
                <p className="text-[10px] text-[#2563EB] mb-2">by purepearl studio</p>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="bg-gray-100 px-2 py-0.5 rounded-full text-gray-700 text-[10px]">
                    Beginner
                  </span>
                  <span className="font-bold text-[#2563EB] text-[12px]">
                    $25<span className="text-[9px] text-gray-400 font-normal">/lifetime</span>
                  </span>
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
                  <h4 className="font-heading font-bold text-gray-950 text-[15px] truncate">
                    the Power of Big Data
                  </h4>
                  <div className="flex items-center gap-0.5 text-[12px] text-gray-600 font-medium shrink-0">
                    <span>4.5</span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#2563EB] mb-2.5">by purepearl studio</p>

                <div className="flex items-center justify-between">
                  <span className="bg-gray-100 text-gray-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                    Beginner
                  </span>
                  <div className="flex items-center -space-x-1.5">
                    {studentAvatars.map((a, i) => (
                      <img
                        key={i}
                        src={a}
                        alt=""
                        className="w-5 h-5 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <span className="w-5 h-5 rounded-full bg-[#D4F636] text-[9px] font-bold text-gray-950 flex items-center justify-center border-2 border-white">
                      26+
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-baseline gap-1">
                  <span className="font-heading font-extrabold text-[17px] text-[#2563EB] leading-none">
                    $25
                  </span>
                  <span className="text-[10px] text-gray-400">/lifetime</span>
                </div>
              </div>

              {/* Floating Lime Card: Happy Students (Bottom-Right) */}
              <div className="absolute right-0 sm:right-2 bottom-0 z-30 bg-[#D4F636] text-gray-950 rounded-[20px] p-3.5 shadow-2xl border border-lime-300 w-[190px] sm:w-[205px]">
                <p className="font-heading font-bold text-[13px] leading-tight text-gray-950">
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
                      className="w-5 h-5 rounded-full border-2 border-[#D4F636] object-cover"
                    />
                  ))}
                  <span className="w-5 h-5 rounded-full bg-gray-950 text-[9px] font-bold text-white flex items-center justify-center border-2 border-[#D4F636]">
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
