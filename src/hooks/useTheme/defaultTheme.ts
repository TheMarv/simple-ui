import { Color, Size } from 'types/themeTypes';

const defaultColors: Record<Color, string> = {
  Primary: 'bg-blue-600 hover:bg-blue-700',
  Secondary: 'bg-red-400 hover:bg-red-500',
  Success: 'bg-green-600 hover:bg-green-700',
  Error: 'bg-red-700 hover:bg-red-800',
  Info: 'bg-blue-300 hover:bg-blue-400',
  Warning: 'bg-yellow-500 hover:bg-yellow-600',
};

const defaultSizes: Record<Size, string> = {
  XS: 'px-0.5',
  S: 'px-1 py-0.5',
  M: 'px-2 py-1',
  L: 'px-4 py-1.5',
  XL: 'px-6 py-2',
};

export default {
  Colors: defaultColors,
  Sizes: defaultSizes,
};
