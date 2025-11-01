import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maths Kit Training Report",
  description:
    "PPT report for the completion of a two-day maths kit training at Gandhi Aided Primary School."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
