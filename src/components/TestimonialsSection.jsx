"use client";


const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
    avatarBg: "bg-amber-400",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    avatarBg: "bg-gray-800",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=80",
    avatarBg: "bg-blue-100",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* ========================================================
          Background Mesh Gradient (Identical to reference design)
          - Top/Center-Right vibrant lime-yellow glow
          - Far-right ambient lime spread
          - Bottom-left soft lavender/periwinkle glow
          - Left-edge subtle magenta/pink aura
      ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* 1. Primary Top-Center/Right Lime Glow */}
        <div
          className="absolute -top-[15%] left-[30%] sm:left-[35%] w-[480px] sm:w-[650px] lg:w-[600px] h-[480px] sm:h-[650px] lg:h-[600px] rounded-full blur-[100px] sm:blur-[130px] lg:blur-[160px] opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(203, 252, 1, 1),rgba(203, 252, 1, 0.23),rgba(203, 252, 1, 0.06)),rgba(203, 252, 1, 0)"
          }}
        />

        {/* 2. Far-Right Upper Lime Accent */}
        <div
          className="absolute top-[2%] -right-[15%] w-[360px] sm:w-[480px] lg:w-[600px] h-[360px] sm:h-[480px] lg:h-[600px] rounded-full blur-[100px] lg:blur-[140px] opacity-100"
          style={{
            background:
              "radial-gradient(circle,rgba(203, 252, 1, 1),rgba(203, 252, 1, 0.23),rgba(203, 252, 1, 0.06),rgba(203, 252, 1, 0)",
          }}
        />

        {/* 3. Bottom-Left Soft Lavender / Periwinkle Glow */}
        <div
          className="absolute -bottom-[6%] -left-[10%] sm:-left-[6%] w-[420px] sm:w-[580px] lg:w-[520px] h-[420px] sm:h-[580px] lg:h-[420px] rounded-full blur-[100px] sm:blur-[130px] lg:blur-[150px] opacity-85"
          style={{
            background: 'radial-gradient(rgba(0, 59, 226, 1),rgba(0, 59, 226, 0.23),rgba(0, 59, 226, 0.06),rgba(0, 59, 226, 0))'

          }}
        />
      </div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            Header Section (Side-by-side on desktop)
        ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14 lg:mb-20">
          {/* Left Title */}
          <h2 className="text-gray-950 heading-m">
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          {/* Right Description */}
          <p className="text-[#4F4F4F] body-l max-w-[560px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do.
            Hear directly from those who have experienced the transformative journey of learning and
            creating on our platform. Explore testimonials that reflect the diverse perspectives of
            enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* ========================================================
            Testimonial Cards Grid (3 cards side by side)
        ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-9 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100/60 flex flex-col items-start transition-all duration-300 hover:shadow-[0_14px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              {/* Avatar with circular container */}
              <div
                className={`w-[80px] h-[80px] rounded-full overflow-hidden shrink-0 mb-5 ${item.avatarBg}`}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Author Name */}
              <h3 className="heading-xs text-[rgba(0, 0, 0, 1)] mb-1">
                {item.name}
              </h3>

              {/* Author Role */}
              <p className="text-[#003BE2] body-l mb-6">
                {item.role}
              </p>

              {/* Quote / Review Text */}
              <p className="text-[#4F4F4F] body-l">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
