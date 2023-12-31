import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Destination 2030 Nigeria",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${poppins.variable} font-serif`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
