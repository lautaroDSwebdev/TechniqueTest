
import type { Metadata } from "next";
import TanstackProvider from "./page";
import "./global.css"

export const metadata: Metadata = {
  title: "Prueba tecnica Next",
  description: "Esta es la prueba tecnica en next",
  keywords:
   "react, next, prueba tecnica",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
