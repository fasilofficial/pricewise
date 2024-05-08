import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PriceWise - Effortlessly Track Product Prices & Save Money",
  description:
    "Track product prices effortlessly and save money on your online shopping with PriceWise. Get real-time updates, personalized alerts, and make smarter purchasing decisions.",
  keywords: [
    "price tracker",
    "shopping assistant",
    "online deals",
    "discounts",
    "savings",
    "product tracker",
    "price monitoring",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
