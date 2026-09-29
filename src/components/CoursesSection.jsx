"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const categoriesRow1 = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

const categoriesRow2 = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];

const categoriesRow3 = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80",
];

const courses = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billing: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=650&q=80",
    categories: [
      "Featured",
      "UI/UX Design",
      "Graphic Design",
      "Drawing & Painting",
      "Digital Illustration",
      "Animation",
      "Crafts",
    ],
  },
  {
    id: 2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billing: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=650&q=80",
    categories: [
      "Featured",
      "Digital Illustration",
      "Graphic Design",
      "Crafts",
      "Animation",
      "UI/UX Design",
      "Web Development",
    ],
  },
  {
    id: 3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billing: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=650&q=80",
    categories: [
      "Featured",
      "Data Science",
      "Web Development",
      "Productivity",
      "Marketing",
      "Freelance & Entrepreneurship",
    ],
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billing: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=650&q=80",
    categories: [
      "Featured",
      "Productivity",
      "Freelance & Entrepreneurship",
      "Social Media",
      "Creative Marketing",
      "Music",
      "Cooking",
    ],
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billing: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=650&q=80",
    categories: [
      "Featured",
      "Freelance & Entrepreneurship",
      "Productivity",
      "Marketing",
      "Data Science",
      "Creative Marketing",
    ],
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: "4.5",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    billing: "/lifetime",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=650&q=80",
    categories: [
      "Featured",
      "Freelance & Entrepreneurship",
      "Marketing",
      "Social Media",
      "Creative Marketing",
      "Film & Video",
      "Photography",
      "Music",
      "Cooking",
    ],
  },
];

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

function CourseCard({ course }) {
  return (
    <div className="group bg-white rounded-[26px] sm:rounded-[28px] p-4 sm:p-4.5 border border-gray-200/90 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Course Image & Frosted Floating Badges */}
      <div className="relative aspect-[16/10.5] rounded-[20px] overflow-hidden bg-gray-100 shrink-0">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Floating Pills at Bottom of Image */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-2 sm:left-2.5 right-2 sm:right-2.5 flex items-center justify-between gap-1">
          <span className="bg-white/80 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-medium text-gray-800 shadow-sm whitespace-nowrap">
            {course.lessons}
          </span>
          <span className="bg-white/80 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-medium text-gray-800 shadow-sm whitespace-nowrap">
            {course.duration}
          </span>
          <span className="bg-white/80 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-medium text-gray-800 shadow-sm whitespace-nowrap">
            {course.comments}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="pt-4 px-1 pb-1 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Star Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-gray-950 heading-xs line-clamp-1">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 text-[14px] text-gray-500 font-medium shrink-0 pt-0.5">
              <span>{course.rating}</span>
              <FaStar className="w-3.5 h-3.5 text-gray-300" />
            </div>
          </div>

          {/* Author */}
          <p className="text-[13px] text-gray-500 mt-1 mb-4">
            by{" "}
            <span className="text-[#2563EB] hover:underline cursor-pointer font-normal">
              {course.author}
            </span>
          </p>

          {/* Level Badge & Students Avatars */}
          <div className="flex items-center justify-start gap-2 pt-0.5">
            <span className="inline-flex items-center gap-1.5 bg-[#F3F4F6] text-gray-700 label-xs px-3 py-1.5 rounded-full">
              <LevelBars />
              {course.level}
            </span>

            {/* Avatars Stack */}
            <div className="flex items-center -space-x-1.5">
              {studentAvatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="Student"
                  className="w-[32px] h-[32px] rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-[32px] h-[32px] rounded-full bg-[#D1F526] text-gray-950 text-[10px] font-bold flex items-center justify-center border-2 border-white shrink-0">
                26+
              </div>
            </div>
          </div>
        </div>

        {/* Price Row */}
        <div className="mt-4 pt-3 flex items-baseline gap-1">
          <span className="heading-xs text-[#003BE2]">
            {course.price}
          </span>
          <span className="body-xs text-gray-400">
            {course.billing}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  // Filter courses based on selected category tab
  const filteredCourses =
    selectedCategory === "Featured" || selectedCategory === "+ More"
      ? courses
      : courses.filter((c) => c.categories.includes(selectedCategory));

  // If a specific tag has no courses, fallback to all courses
  const displayedCourses =
    filteredCourses.length > 0 ? filteredCourses : courses;

  const renderTab = (name) => {
    const isSelected = selectedCategory === name;
    const isMore = name === "+ More";

    return (
      <button
        key={name}
        onClick={() => setSelectedCategory(name)}
        className={`px-[16px] py-[12px] rounded-full label-m transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${isSelected
          ? "bg-[#D1F526] text-gray-950 font-semibold shadow-sm scale-105"
          : isMore
            ? "bg-transparent text-[#003BE2]"
            : "bg-[#F5F5F6] text-[#4B4C53]"
          }`}
      >
        {name}
      </button>
    );
  };

  return (
    <section id="courses" className="py-20 lg:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-10">
          <h2 className="text-gray-950 heading-m">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="text-gray-500 body-l mt-4">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from
            technology to the arts, and make a difference in your career and
            life.
          </p>
        </div>

        {/* Skill Tabs Filter (3 rows matching the reference design) */}
        <div className="flex flex-col items-center gap-2.5 sm:gap-3 mb-14 lg:mb-16 max-w-[1080px] mx-auto">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categoriesRow1.map(renderTab)}
          </div>
          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categoriesRow2.map(renderTab)}
          </div>
          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categoriesRow3.map(renderTab)}
          </div>
        </div>

        {/* Course Cards Grid with Smooth Transition */}
        <div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 animate-fade-in"
        >
          {displayedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
