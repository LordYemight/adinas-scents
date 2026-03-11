import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading" 
});
const body = Inter({ 
  subsets: ["latin"],
  variable: "--font-body" 
});

export const metadata: Metadata = {
  title: "Adinas Scents | Premium Unboxed Fragrances",
  description: "Experience true olfactory luxury in the heart of Abuja. Long-lasting premium unboxed perfumes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-sans bg-primary text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}