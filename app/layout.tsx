import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cn } from "@/utils";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],

});
export const metadata: Metadata = {
  title: "UnityAlgo - Software Development Company",
  description: "Unityalgo builds custom software solutions and provides dedicated teams to help businesses scale.",
  openGraph: {
    title: "UnityAlgo - Software Development Company",
    description: "Unityalgo builds custom software solutions and provides dedicated teams to help businesses scale.",
    url: "https://unityalgo.com",
    images: "https://unityalgo.com/logo.png"
  },
  twitter: {
    title: "UnityAlgo - Software Development Company",
    description: "Unityalgo builds custom software solutions and provides dedicated teams to help businesses scale.",
    images: "https://unityalgo.com/logo.png"

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", poppins.variable)}
      >
        {children}
      </body>
    </html>
  );
}
