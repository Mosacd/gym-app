import { cva } from "class-variance-authority";

export const heroSectionClass = cva(
  "relative bg-black text-white h-[90vh] flex items-center",
);
export const overlayClass = cva("absolute inset-0 bg-black bg-opacity-50");
export const contentClass = cva(
  "relative z-10 container mx-auto px-6 text-center md:text-left",
);
export const headingClass = cva("text-4xl md:text-6xl font-bold font-mono");
export const paragraphClass = cva("mt-4 text-lg md:text-xl");
export const buttonContainerClass = cva(
  "mt-6 flex justify-center md:justify-start gap-4",
);
export const buttonClass = cva("px-8 py-6 border border-purple-900 font-bold");
export const ghostButtonClass = cva(
  "px-8 py-6 border font-bold hover:bg-white dark:border-neutral-800 hover:text-black",
);
