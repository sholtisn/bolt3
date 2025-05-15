import {style, globalStyle} from '@vanilla-extract/css';
import {createTheme} from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    secondary: '#4f46e5',
    secondaryDark: '#4338ca',
    background: '#f9fafb',
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  space: {
    none: '0',
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  font: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.body,
  backgroundColor: vars.color.background,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 40,
  display: 'flex',
  height: '64px',
  alignItems: 'center',
  backgroundColor: vars.color.white,
  padding: '0 1rem',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
});

export const footer = style({
  marginTop: 'auto',
  backgroundColor: vars.color.gray[900],
  padding: vars.space.medium,
});

export const footerMenu = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: vars.space.medium,
});

export const footerLink = style({
  color: vars.color.white,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const errorContainer = style({
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.background,
});

export const errorContent = style({
  backgroundColor: vars.color.white,
  padding: vars.space.large,
  borderRadius: '0.5rem',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
});

export const errorTitle = style({
  marginBottom: vars.space.medium,
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#dc2626',
});

export const errorStatus = style({
  marginBottom: vars.space.medium,
  fontSize: '1.25rem',
});

export const errorMessage = style({
  border: `1px solid ${vars.color.gray[300]}`,
  padding: vars.space.medium,
  whiteSpace: 'pre-wrap',
  fontSize: '0.875rem',
  color: vars.color.gray[600],
});