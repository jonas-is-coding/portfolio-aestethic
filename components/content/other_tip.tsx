import { sfcompactdisplaybold, sfprotextregular, sfprotextsemibold } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./index.css";

interface OtherTipProps {
  title: string;
}

const Other_Tip = ({ title }: OtherTipProps) => {
  return (
    <div className="w-[1080px] h-[1350px] bg-black relative">
      <div className="absolute left-12 bottom-48 flex flex-col items-start justify-end gap-4">
        <img src="/save-swipe.png" className="w-[286px] h-[196px]" />
        <h3 className={cn("text-[184px] z-40 leading-[0.9] uppercase bg-gradient-to-br from-gray-50 via-amber-500 to-gray-50 bg-clip-text text-transparent", sfcompactdisplaybold.className)}>
          {title}
        </h3>
      </div>
      <footer className={cn("w-full absolute bottom-20 flex items-center justify-between px-12", sfprotextsemibold.className)}>
        <div className="flex items-center justify-start gap-4">
          <div className="size-10 bg-red-500 rounded-full" /> 
          <span className="text-white/60 text-[32px] normal-case">@jonasbrahmst</span>
        </div>
        <p className="px-4 py-2 bg-white/20 text-white/60 text-[24px] rounded-full">
          01 of 06
        </p>
      </footer>
    </div>
  );
};

export default Other_Tip;