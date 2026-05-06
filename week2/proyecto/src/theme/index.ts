export const COLORS = {
  primary: '#2C3E50',
  secondary: '#3498DB',
  background: '#F8F9FA',
  cardBg: '#FFFFFF',
  text: '#2C3E50',
  textLight: '#7F8C8D',
  pending: '#FF9800',
  inProgress: '#2196F3',
  completed: '#4CAF50',
  border: '#E0E0E0',
  placeholder: '#BDC3C7',
} as const;

export const TYPOGRAPHY = {
  h1: { fontSize: 28, fontWeight: 'bold' as const },
  h2: { fontSize: 22, fontWeight: 'bold' as const },
  body: { fontSize: 16, fontWeight: 'normal' as const },
  caption: { fontSize: 14, fontWeight: 'normal' as const },
  small: { fontSize: 12, fontWeight: 'normal' as const },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const;

export const SHADOW = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
} as const;