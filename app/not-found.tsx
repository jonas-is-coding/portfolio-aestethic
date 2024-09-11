"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); 
  };

  return (
    <main className="max-h-screen w-full flex items-center justify-center gap-20 pb-20">
      <Image src={"/404-ghost.png"} alt="404 Ghost" width={350} height={0} />
      <ul className="flex flex-col items-start justify-center gap-2">
        <h3 className="text-9xl font-semibold text-start">404</h3>
        <p className="text-start opacity-60">We couldn't find the page you were looking for!</p>
        <button
          onClick={handleGoBack}
          className="px-7 h-12 bg-wheat text-black rounded-full mt-10"
        >
          Go back
        </button>
      </ul>
    </main>
  );
};

export default NotFound;