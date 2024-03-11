"use client";

import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import styles from "@/app/ui/global.module.css"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
