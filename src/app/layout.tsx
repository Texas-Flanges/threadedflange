import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Threaded Flange",
  description: "Industrial Pipe Flanges",
  metadataBase: new URL("https://threadedflange.com"),
  openGraph: {
    title: "Threaded Flange",
    description: "Industrial Pipe Flanges",
    type: "website",
    url: "https://threadedflange.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
