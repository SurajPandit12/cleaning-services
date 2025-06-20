import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./(frontend)/components/NavBar";
import Footer from "./(frontend)/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Top Cleaning Services",
  description: "Professional cleaning just for you",
  icons: {
    icon: [
      { url: "/images/logo.jpg", sizes: "64x64" },
      { url: "/images/logo.jpg", sizes: "16x16" },
    ],
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.jpg" />
        <link rel="shortcut icon" href="/images/logo.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
