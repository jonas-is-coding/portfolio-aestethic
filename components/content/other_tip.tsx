import { sfcompactdisplaybold, sfprotextregular, sfprotextsemibold } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./index.css";

interface OtherTipProps {
  title: string;
}

const Other_Tip = ({ title }: OtherTipProps) => {
  return (
    <div className="w-[1080px] h-[1350px] bg-black relative">
      <div className="absolute left-6 bottom-24 flex flex-col items-start justify-end gap-2">
        <img src="/save-swipe.png" className="w-[143px] h-[98px]" />
        <h3 className={cn("text-[92px] z-40 leading-[0.9] uppercase bg-gradient-to-br from-gray-50 via-amber-500 to-gray-50 bg-clip-text text-transparent", sfcompactdisplaybold.className)}>
          {title}
        </h3>
      </div>
      <footer className={cn("w-full absolute bottom-10 flex items-center justify-between px-6", sfprotextsemibold.className)}>
        <div className="flex items-center justify-start gap-2">
          <div className="size-5 bg-red-500 rounded-full" />
          <span className="text-white/60 text-[16px] normal-case">@jonasbrahmst</span>
        </div>
        <p className="px-2 py-1 bg-white/20 text-white/60 text-[12px] rounded-full">
          01 of 06
        </p>
      </footer>
    </div>
  );
};

export default Other_Tip;