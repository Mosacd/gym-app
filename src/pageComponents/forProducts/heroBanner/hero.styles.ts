import { cva } from "class-variance-authority";

export const banner = cva("relative bg-black text-white");
export const bannerInner = cva(
  "relative flex items-center justify-center bg-cover bg-center bg-no-repeat h-[40vh] sm:h-[50vh]",
);
export const overlay = cva("absolute inset-0 bg-black opacity-50");
export const content = cva("relative z-10 text-center p-5  sm:p-20 md:p-32");
export const heading = cva(
  "text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider max-w-6xl font-mono",
);
