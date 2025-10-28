import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Career Navigators | Discover Top Colleges, Global Career Opportunities & Academic Success",
  description: "Career Navigator helps you explore colleges, courses, scholarships, and build a global career path.",
  icons: {
    icon: [
      { url: "/logo-removebg-preview.png", type: "image/png" },
    ],
    shortcut: ["/logo-removebg-preview.png"],
    apple: ["/logo-removebg-preview.png"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
