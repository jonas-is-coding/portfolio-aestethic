import About from "@/components/pages/about";
import Work from "@/components/pages/work";
import Resume from "@/components/pages/resume";
import Contact from "@/components/pages/contact";

import Picture1 from '../public/1.jpeg';
import Picture2 from '../public/2.jpeg';
import Picture3 from '../public/3.jpg';
import Picture4 from '../public/4.jpg';
import Picture5 from '../public/5.jpg';
import Picture6 from '../public/6.jpg';
import Picture7 from '../public/7.jpeg';

import { useTransform } from 'framer-motion';
import { MotionValue } from 'framer-motion';

export const NAVBARLINKS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Resume",
    href: "/resume",
  },
];

export const SLUGROUTES = [
  {
    label: "about",
    component: About,
  },
  {
    label: "work",
    component: Work,
  },
  {
    label: "resume",
    component: Resume,
  },
  {
    label: "contact",
    component: Contact,
  }
];

export const NUMBERS = [
  {
    count: 20,
    topic: "Total Projects",
  },
  {
    count: 4,
    topic: "Years of Experience",
  },
];

export const PICTURES = (scrollYProgress: MotionValue<number>) => [
    { src: Picture1, scale: useTransform(scrollYProgress, [0, 1], [1, 4]) },
    { src: Picture2, scale: useTransform(scrollYProgress, [0, 1], [1, 5]) },
    { src: Picture3, scale: useTransform(scrollYProgress, [0, 1], [1, 6]) },
    { src: Picture4, scale: useTransform(scrollYProgress, [0, 1], [1, 5]) },
    { src: Picture5, scale: useTransform(scrollYProgress, [0, 1], [1, 6]) },
    { src: Picture6, scale: useTransform(scrollYProgress, [0, 1], [1, 8]) },
    { src: Picture7, scale: useTransform(scrollYProgress, [0, 1], [1, 9]) },
];

export const SERVICES = [
  {
    title1: "UI/UX",
    title2: "Design",
    src: "11.jpg",
  },
  {
    title1: "Web",
    title2: "Development",
    src: "8.jpeg",
  },
  {
    title1: "Backend",
    title2: "Services",
    src: "9.jpg",
  },
  {
    title1: "App",
    title2: "Development",
    src: "10.jpg",
  },
];