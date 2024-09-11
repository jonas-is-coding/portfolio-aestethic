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
          "absolute top-0 left-0 w-full flex items-center justify-between px-12 pt-16 text-white",
          integralcf.className
        )}
      >
        <p className="text-[32px]">UI UX Design</p>
        <p className="text-[32px] flex items-center justify-end gap-2">
          Tell your friends
          <img src="/arrows.png" className="h-[12px] mt-2" />
        </p>
      </header>
      <div
        className={cn(
          "flex flex-col items-start justify-center absolute top-48 left-12",
          neutralfacebold.className
        )}
      >
        <h3 className="text-[236px] z-40 leading-[1.05] text-white">
          Quick <br />
          <span className="text-[220px]">Vscode</span> <br />
          Tips
        </h3>
        <span className="text-[140px] z-30 text-black text-stroke text-stroke-white">
          Part {partNumber}
        </span>
      </div>
      <div className="w-full h-[420px] absolute bottom-0 left-0 bg-gradient-to-t from-black to-black/0 z-40"></div>
      <p className={cn("absolute bottom-16 left-12 flex flex-col items-start justify-end z-50", integralcf.className)}>
        <span className="text-white text-[32px]">Jonas Brahmst</span>
        <span className="text-white/40 text-[20px]">Developer</span>
      </p>
      <img
        src="/blur.png"
        className="absolute left-0 top-40 size-[740px] z-0 blur-3xl"
      />
      <img src="/save-now.png" className="absolute top-[850px] w-[560px] h-[216px] z-50" />
      <img src="/vscode-logo.png" className="h-[450px] w-[447px] absolute bottom-4 right-8" />
    </div>
  );
};

export default VSCode_Tip;