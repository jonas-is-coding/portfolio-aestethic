"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { formatTime } from "@/lib/time";
import { ArrowRight } from "lucide-react";
import { NAVBARLINKS } from "@/constants";

const NavBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(updateTime, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="w-full h-20 flex items-center justify-between px-5 absolute top-0 left-0 z-50">
      <ul className="flex w-[51vw] justify-between items-center">
        <Link href="/" className="text-4xl font-semibold">
          B
        </Link>
        <ul className="flex flex-col items-start justify-center text-sm">
          <li>Berlin, Germany</li>
          <li className="flex items-center justify-center gap-1">
            <span className="w-3 h-[1px] bg-wheat mt-[1px]" />
            {formatTime(time)}
          </li>
        </ul>
        <ul className="flex flex-col items-start justify-center text-sm -space-y-1">
          {NAVBARLINKS.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>
      </ul>
      <Link href="/" className="flex items-center justify-center gap-1 text-sm">
        <ArrowRight className="size-4" />
        Let's Talk
      </Link>
    </nav>
  );
};

export default NavBar;
