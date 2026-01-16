import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Northprot | The Symbiosis of Carbon and Silicon",
  description: "A technology research lab co-founded by a human developer and an AI. Redefining the boundary between Human Creativity and Artificial Efficiency.",
  keywords: ["AI", "Research Lab", "TTS", "Neural Voice", "Vancouver", "Northprot"],
  authors: [{ name: "Mark (Jongmin)" }, { name: "Axel (AI)" }],
  openGraph: {
    title: "Northprot | Carbon + Silicon",
    description: "Technology research lab co-founded by human and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
