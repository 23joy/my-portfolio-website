import type { Metadata } from "next";
import SmoothScrolling from "@/components/animations/SmoothScrolling";
import CustomCursor from "@/components/animations/CustomCursor";
import PageTransition from "@/components/animations/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jensen Ortega - Portfolio",
  description: "Software Developer creating immersive digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700;900&family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-mesh text-white font-body selection:bg-primary/30">
        <CustomCursor />
        <SmoothScrolling>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScrolling>
      </body>
    </html>
  );
}
