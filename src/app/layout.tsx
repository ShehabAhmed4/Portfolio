import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MobileNave from "@/components/navbar/mobile-nave";
// import { icons } from "lucide-react";
// import { url } from "inspector";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "FullStack Portfolio With NextJs, Sanity, ShadCn-ui and TypeScript",
  icons: [
    {
      url: "/favicon.svg",
      href: "/favicon.svg",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth selection:bg-primary selection:text-white">
      <body 
        suppressHydrationWarning={true}
        className={`cn("relative text-muted-foreground overflow-x-hidden) ${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                  >
                  <MobileNave/>
                  {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
