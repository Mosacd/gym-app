import { cva } from "class-variance-authority";

export const wrapper = cva(
  "flex flex-col gap-7 justify-center items-center mt-10 sm:mt-16 lg:mt-20 mb-10 sm:mb-16 lg:mb-20",
);

export const heading = cva("text-xl md:text-2xl font-bold dark:text-white");

export const carousel = cva("w-[70%] sm:w-[85%] lg:w-[80%] max-w-5xl");

export const carouselItem = cva("md:basis-1/2 lg:basis-1/3");

export const card = cva(
  "min-h-60 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-900",
);

export const cardContent = cva("flex flex-col items-center p-4");

export const image = cva(
  "h-56 object-contain mb-2 border-spacing-1 border-black border-0 rounded-full",
);

export const productName = cva("text-sm font-medium text-center");

export const productPrice = cva("text-sm font-semibold");
