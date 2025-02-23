"use client";

import * as React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import baseMuiTheme from "@/theme/baseMuiTheme";
import { QueryProvider } from "@/Providers/QueryProvider";
import Sidebar from "@/components/Sidebar/Siderbar";
import Navbar from "@/components/Navbar/Navbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mainContainerStyles = {
  flexGrow: 1,
  p: { xs: 2, sm: 3 },
  pt: { xs: 8, sm: 9 },
  pl: { xs: 9, sm: 3 },
  minHeight: "100vh",
  overflow: "auto",
  background: "#e0e8f3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.StrictMode>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <QueryProvider>
            <ThemeProvider theme={baseMuiTheme}>
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
                <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
                <Box sx={mainContainerStyles}>{children}</Box>
              </Box>
            </ThemeProvider>
          </QueryProvider>
        </body>
      </html>
    </React.StrictMode>
  );
}
