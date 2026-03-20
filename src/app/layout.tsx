import type { Metadata } from "next";
import { Inter, Exo_2 } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Merestone Consultants, Inc. | Engineers. Land Surveyors. Planners.",
  description:
    "Merestone Consultants provides civil engineering, land surveying, GPS services, and site design throughout Delaware, Maryland, Pennsylvania, and New Jersey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${exo2.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
