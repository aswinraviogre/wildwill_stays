import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wildvill Stays | Boutique Luxury Escapes in Wayanad, Kerala",
  description:
    "Discover the Wildvill Stays collection in Wayanad. Private valley coffee sanctuaries, cantilevered forest glass chalets, and dramatic cliffside infinity pool villas.",
  keywords: [
    "Wildvill Stays",
    "Wayanad luxury resorts",
    "boutique villas Wayanad",
    "cliffside infinity pool Wayanad",
    "coffee plantation resort Kerala",
    "glass chalet Wayanad",
    "Chembra Peak stay"
  ],
  openGraph: {
    title: "Wildvill Stays | Boutique Luxury Escapes in Wayanad",
    description:
      "Private valley coffee sanctuaries, cantilevered forest glass chalets, and cliffside infinity pool villas.",
    siteName: "Wildvill Stays",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fcfbf8] text-[#111b29] font-sans selection:bg-[#2d66a1] selection:text-white">
        {children}
      </body>
    </html>
  );
}
