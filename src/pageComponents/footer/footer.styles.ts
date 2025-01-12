import { cva } from 'class-variance-authority';

export const footerClass = cva('bg-black text-white p-8');
export const containerClass = cva('max-w-7xl mx-auto');
export const flexContainerClass = cva('flex flex-col md:flex-row justify-between items-center sm:items-start gap-8');
export const flexItemClass = cva('flex-1');
export const headingClass = cva('font-bold text-3xl sm:text-4xl');
export const navClass = cva('grid grid-cols-1 sm:grid-cols-3 gap-4 gap-x-20 md:gap-x-4 text-center sm:text-start');
export const linkClass = cva('text-sm hover:underline hover:text-purple-900 transition');
export const borderClass = cva('mt-8 pt-8 border-t border-gray-800');
export const socialContainerClass = cva('flex items-center justify-center sm:justify-start gap-4');
export const socialLinkClass = cva('text-white hover:text-gray-300 transition');
export const socialLabelClass = cva('text-sm');
