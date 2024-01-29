import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ВОСХОД | Тестовое задание",
  description: "Тестовое задание для компании ООО Восход",
};

const RootLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body className={clsx(inter.className)}>
        <main>
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
