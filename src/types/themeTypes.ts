export type Color =
  | 'Primary'
  | 'Secondary'
  | 'Success'
  | 'Error'
  | 'Info'
  | 'Warning';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface Theme {
  Colors: Record<Color, string>;
  Sizes: Record<Size, string>;
}
