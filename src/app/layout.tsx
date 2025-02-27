import type { Metadata } from "next";
import RootClientLayout from "./RootClientLayout";

export const metadata: Metadata = {
  title: "Levvy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cover bg-no-repeat bg-center min-h-screen">
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
