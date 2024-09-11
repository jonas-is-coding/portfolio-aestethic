import { neutralfacebold } from "@/lib/fonts";
import { integralcf } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./index.css";

interface VSCodeTipProps {
  partNumber: number;
}

const VSCode_Tip = ({ partNumber }: VSCodeTipProps) => {
  return (
    <div className="w-[1080px] h-[1350px] bg-black relative">
      <header
        className={cn(
          "absolute top-0 left-0 w-full flex items-center justify-between px-6 pt-8 text-white",
          integralcf.className
        )}
      >
        <p className="text-[16px]">UI UX Design</p>
        <p className="text-[16px] flex items-center justify-end gap-1">
          Tell your friends
          <img src="/arrows.png" className="h-[8px] mt-1" />
        </p>
      </header>
      <div
        className={cn(
          "flex flex-col items-start justify-center absolute top-24 left-6",
          neutralfacebold.className
        )}
      >
        <h3 className="text-[118px] z-40 leading-[1.05] text-white">
          Quick <br />
          <span className="text-[110px]">Vscode</span> <br />
          Tips
        </h3>
        <span className="text-[60px] z-30 text-black text-stroke text-stroke-white">
          Part {partNumber}
        </span>
      </div>
      <div className="w-full h-[210px] absolute bottom-0 left-0 bg-gradient-to-t from-black to-black/0 z-40"></div>
      <p className={cn("absolute bottom-8 left-6 flex flex-col items-start justify-end z-50", integralcf.className)}>
        <span className="text-white text-[16px]">Jonas Brahmst</span>
        <span className="text-white/40 text-[10px]">Developer</span>
      </p>
      <img
        src="/blur.png"
        className="absolute left-0 top-20 size-[370px] z-0 blur-3xl"
      />
      <img src="/save-now.png" className="absolute top-[425px] w-[280px] h-[108px] z-50" />
      <img src="/vscode-logo.png" className="h-[243px] w-[240px] absolute bottom-0 right-2" />
    </div>
  );
};

export default VSCode_Tip;