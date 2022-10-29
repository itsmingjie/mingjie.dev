import "@/styles/globals.css";

import { Archivo } from "@next/font/google";
import type { PropsWithChildren } from "react";

import { clsx } from "@/lib/utils/clsx";

const archivo = Archivo({
  variable: "--archivo-font",
  preload: true,
  subsets: ["latin"],
});

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <html className={clsx(archivo.variable)}>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
