import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canvas Agency | Creative Digital Agency",
  description:
    "A full-service creative agency specializing in branding, web development, and digital experiences that captivate and convert.",
  openGraph: {
    title: "Canvas Agency | Creative Digital Agency",
    description:
      "A full-service creative agency specializing in branding, web development, and digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-full flex flex-col antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
