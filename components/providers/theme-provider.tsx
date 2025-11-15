"use client";

import React, { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark"
}: ThemeProviderProps) {
  React.useEffect(() => {
    const theme = defaultTheme || "dark";
    document.documentElement.classList.add(theme);
  }, [defaultTheme]);

  return <>{children}</>;
}
