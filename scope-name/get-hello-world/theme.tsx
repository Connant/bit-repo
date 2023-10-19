import type { CSSProperties } from 'react';
import { createTheme } from '@teambit/base-react.theme.theme-provider';
/* import the default tokens from the file generated in the previous step */
import { defaultDesignTokenValues } from './design-tokens';
import './style.scss'


/* generate a theme using the design token default values */
export const Theme = createTheme({
  theme: defaultDesignTokenValues,
});

/* create a theme schema to standardize future theme extensions */
export type ThemeSchema = typeof defaultDesignTokenValues;

export const Button = ({ children }) => {
  const {
    primaryColorText,
    buttonPaddingMedium,
    buttonFontWeight,
    font
  } = Theme.useTheme();
  const style: CSSProperties = {
    color: primaryColorText,
    padding: buttonPaddingMedium,
    fontWeight: buttonFontWeight,
    border: 'none',
    borderRadius: '15px'
  };
  return <button className='button' style={style}>{children}</button>;
};