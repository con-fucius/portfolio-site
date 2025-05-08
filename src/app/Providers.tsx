'use client';

import { ThemeProvider, type ThemeProviderProps } from 'next-themes';
import { useState, useEffect } from 'react';

export function Providers({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return null or a loading skeleton to avoid hydration mismatch, 
    // or children directly if ThemeProvider handles this gracefully (docs suggest it does for basic usage)
    // For now, returning children as ThemeProvider itself should handle initial render.
    // If issues arise, might need to return null until mounted.
    return <>{children}</>; 
  }

  return <ThemeProvider {...props}>{children}</ThemeProvider>;
} 