import type { Metadata } from "next";
import { poppins, montserrat, kanit } from "../atoms/font";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Pet Clinic",
  description: "website for a pet clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${kanit.variable} bg-main-bg-mobile md:bg-main-bg bg-contain bg-no-repeat md:bg-cover bg-center lg:bg-top font-poppins`}
      >
        <Navbar />
        <main className="max-w-[1224px] pt-12 mx-auto">{children}</main>
      </body>
    </html>
  );
}
