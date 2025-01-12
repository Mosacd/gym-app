import { cva } from 'class-variance-authority';

export const headerClass = cva('bg-black text-white py-5 fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden');
export const containerClass = cva('lg:max-w-[1024px] xl:max-w-[1280px] mx-auto flex items-center gap-8 justify-between px-3 md:px-6');
export const logoClass = cva('text-3xl md:text-4xl cursor-pointer font-bold italic hover:text-purple-900');
export const rightSectionClass = cva('flex items-center gap-5');
export const languageChangerClass = cva('hidden md:flex');
export const loginButtonClass = cva('hidden md:flex');
