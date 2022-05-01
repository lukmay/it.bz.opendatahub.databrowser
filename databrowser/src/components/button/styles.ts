import { Size, Tone, Variant } from './types';

export const variantClass: Record<Variant, Record<Tone, String>> = {
  [Variant.solid]: {
    [Tone.primary]:
      'border border-transparent bg-green-500 text-white hover:bg-green-700 focus:bg-green-700',
  },
  [Variant.ghost]: {
    [Tone.primary]:
      'border bg-transparent text-green-500 hover:bg-green-500 focus:bg-green-500 hover:text-white focus:text-white',
  },
};

export const sizeClass: Record<Size, String> = {
  [Size.xs]: 'font-semibold rounded leading-tight',
  [Size.sm]: 'pt-1.5 pb-1.5 px-6 font-semibold rounded leading-tight',
  [Size.md]: 'pt-2.5 pb-3 px-9 font-semibold rounded leading-tight',
};
