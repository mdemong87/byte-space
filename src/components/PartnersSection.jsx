"use client";

function LogoWave() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="logo-wave-circle">
          <circle cx="16" cy="16" r="15" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-wave-circle)">
        {/* Top Wave 1 */}
        <path
          d="M-2 7.5 C6 2.5 10 2.5 16 7.5 C22 12.5 26 12.5 34 7.5"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Top Wave 2 */}
        <path
          d="M-2 13.5 C6 8.5 10 8.5 16 13.5 C22 18.5 26 18.5 34 13.5"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Top Wave 3 */}
        <path
          d="M-2 19.5 C6 14.5 10 14.5 16 19.5 C22 24.5 26 24.5 34 19.5"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Solid Bottom Wave Area */}
        <path
          d="M-2 23 C6 18 10 18 16 23 C22 28 26 28 34 23 V34 H-2 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function LogoSunburst() {
  const spokes = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      {spokes.map((deg) => (
        <line
          key={deg}
          x1="16"
          y1="3"
          x2="16"
          y2="9.5"
          stroke="currentColor"
          strokeWidth="2.7"
          strokeLinecap="round"
          transform={`rotate(${deg} 16 16)`}
        />
      ))}
    </svg>
  );
}

function LogoLightning() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" fill="currentColor" />
      <polygon
        points="17.2,6.5 9.5,17 15,17 14,25.5 22.5,14.5 16.8,14.5"
        fill="white"
      />
    </svg>
  );
}

function LogoClover() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" fill="currentColor" />
      <circle cx="11.8" cy="11.8" r="2.8" fill="white" />
      <circle cx="20.2" cy="11.8" r="2.8" fill="white" />
      <circle cx="11.8" cy="20.2" r="2.8" fill="white" />
      <circle cx="20.2" cy="20.2" r="2.8" fill="white" />
      <circle cx="16" cy="16" r="1.8" fill="white" />
    </svg>
  );
}

function LogoRipple() {
  const rings = [4.5, 6.5, 8.5, 10.5, 12.5, 14.5, 16.5, 18.5, 20.5];
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="logo-ripple-circle">
          <circle cx="16" cy="16" r="15" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-ripple-circle)">
        <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <circle cx="11.5" cy="11.5" r="2.2" fill="currentColor" />
        {rings.map((r, i) => (
          <circle
            key={i}
            cx="11.5"
            cy="11.5"
            r={r}
            stroke="currentColor"
            strokeWidth="0.85"
            fill="none"
          />
        ))}
      </g>
    </svg>
  );
}

const partnerLogos = [
  { id: 1, Icon: LogoWave },
  { id: 2, Icon: LogoSunburst },
  { id: 3, Icon: LogoLightning },
  { id: 4, Icon: LogoClover },
  { id: 5, Icon: LogoRipple },
];

export default function PartnersSection() {
  return (
    <section className="bg-[#F8F9FA] border-y border-gray-100/80 py-10 sm:py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between gap-8 sm:gap-10 lg:gap-6 justify-items-center">
          {partnerLogos.map(({ id, Icon }) => (
            <div
              key={id}
              className="group flex items-center gap-3 text-[#5A6578] hover:text-gray-900 transition-colors duration-200 cursor-pointer select-none"
            >
              <Icon />
              <span className="font-heading font-extrabold text-[18px] sm:text-[19px] tracking-tight">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
