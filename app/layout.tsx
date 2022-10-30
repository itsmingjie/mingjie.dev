import "@/styles/globals.css";

import { Archivo } from "@next/font/google";
import type { PropsWithChildren } from "react";

import { clsx } from "@/lib/utils/clsx";
import { Sidebar } from "@/ui/menu";
import { AnalyticsWrapper } from "@/ui/utilities/analytics";

const archivo = Archivo({
  variable: "--archivo-font",
  preload: true,
  subsets: ["latin"],
});

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <html className={clsx("h-full", archivo.variable)}>
      <head />

      <body className="relative flex items-stretch h-full gap-1">
        <aside className="flex-none order-1 w-56 p-2">
          <Sidebar />
        </aside>

        <main className="relative order-2 w-full px-20 pt-16 m-2 overflow-auto border rounded-md bg-light/5 border-hint/50 backdrop-blur-sm shadow-black">
          {children}

          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
