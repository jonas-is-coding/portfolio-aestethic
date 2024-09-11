import { NUMBERS } from "@/constants";
import Image from "next/image";
import Count from "../ui/count";

const About = () => {
  return (
    <main className="max-h-screen flex items-start justify-between pt-16">
      <p className="text-xl">About</p>
      <ul className="md:pl-[35vw] md:pr-0 flex flex-col items-start">
        <p className="text-3xl normal-case font-light">
          Elevating businesses through expertise in creating{" "}
          <br className="md:block hidden" /> remarkable digital user
          experiences, driving innovation <br className="md:block hidden" /> and
          delivering impeccable design solutions.
        </p>
        <Image
          src={"/dark-face.png"}
          alt="Dark Face"
          height={80}
          width={80}
          className="mt-10"
        />
        <div className="flex items-center justify-between w-full mt-32">
          {NUMBERS.map((number, index) => (
            <Count key={index} count={number.count} topic={number.topic} />
          ))}
        </div>
      </ul>
    </main>
  );
};

export default About;
