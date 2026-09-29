import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/font/Satoshi_Complete/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi_Complete/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi_Complete/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi_Complete/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Satoshi_Complete/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "ByteSpace — Get Access to Hundreds of Courses",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of courses.",
  keywords: ["courses", "learning", "online education", "ByteSpace", "skills"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${satoshi.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
