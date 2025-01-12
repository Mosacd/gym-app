import { cva } from 'class-variance-authority';

export const sectionClass = cva('py-10 sm:py-16 dark:text-white');
export const containerClass = cva('container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center px-4');
export const featureClass = cva('flex flex-col items-center');
export const iconClass = cva('text-4xl sm:mb-4');
export const titleClass = cva('font-bold text-base sm:text-lg mb-2');