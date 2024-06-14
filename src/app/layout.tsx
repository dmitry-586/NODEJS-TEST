import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.scss";
import HeaderPage from "../components/ui/header/header";
import { OPEN_GRAPH, SITE_DESCRIPTION, SITE_NAME } from "@/constants/seo.constans";

const font = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [
    {
      name: SITE_NAME,
      url: process.env.NEXT_PUBLIC_APP_URL,
    },
  ],
  publisher: SITE_NAME,
  openGraph: OPEN_GRAPH
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <HeaderPage />
        {children}
      </body>
    </html>
  );
}
