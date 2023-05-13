import React from 'react';
import { useTheme } from 'hooks/useTheme/useTheme';
import { mergeClasses } from 'utils/mergeClasses';
import { Color, Size } from 'types/themeTypes';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color?: string;
  size?: string;
}

export default function Button(props: ButtonProps) {
  const classList: string[] = ['text-white', 'font-bold', 'rounded'];
  const theme = useTheme();
  const color = (props.color || 'Primary') as Color;
  const size = (props.size || 'M') as Size;
  const classes = mergeClasses(
    classList,
    theme.Colors[color],
    theme.Sizes[size],
    props.className
  );
  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
}
