import { services } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
    return (
        <section className="h-screen w-full bg-black text-white lg:p-20 p-10 flex flex-col items-start justify-center gap-10">
            <h3 className="font-semibold text-3xl">
                Services
            </h3>
            <ul className="flex flex-col items-start justify-center w-full">
                {services.map((servcice, index) => (
                    <Link key={index} href={servcice.href} className="flex items-center justify-between border-b py-10 w-full opacity-50 hover:opacity-100 group">
                        <div className="flex items-end justify-center gap-1">
                        <p className="font-medium text-lg md:text-xl lg:text-2xl">
                            0{index + 1}
                        </p>
                        <h4 className="font-semibold text-3xl md:text-5xl lg:text-7xl">
                            {servcice.title}
                        </h4>
                        </div>
                        <ArrowUpRight className="rotate-45 size-10 opacity-0 group-hover:opacity-100 group-hover:rotate-0 duration-500 transition-all" />
                    </Link>
                ))}
            </ul>
        </section>
    )
}