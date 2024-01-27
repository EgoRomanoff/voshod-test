import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ВОСХОД Тестовое задание",
  description: "Тестовое задание для компании ООО Восход",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
