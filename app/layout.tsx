import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jonasbrahmst.vercel.app"),
  keywords: [
    "Jonas Brahmst",
    "Webdesign",
    "Webentwicklung",
    "Frontend Entwicklung",
    "Backend Entwicklung",
    "Portfolio",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Responsive Design",
    "UI/UX Design",
    "SEO",
    "Web Applikationen",
    "Web Projekte",
    "Moderne Webentwicklung",
    "JavaScript Entwickler",
    "Full Stack Entwickler"
  ],
  title: "Jonas Brahmst | Portfolio",
  description: "Hello and welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
