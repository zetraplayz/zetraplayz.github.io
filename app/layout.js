import { Inter, Outfit } from "next/font/google";
import Cursor from "@/components/Cursor/Cursor";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-primary',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: "ZETRA | Mushi Dharun - Executive Portfolio",
  description: "Premium personal portfolio of Mushi Dharun (ZETRA). Software Engineer, AI Developer, System Architect, and Founder of Zetra & Co.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Cursor />
        <Navigation />
        <main style={{ minHeight: '100vh', paddingTop: '80px', display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
