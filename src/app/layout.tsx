import type { Metadata } from "next";
import "@/src/assets/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "LinkBox",
    template: "%s | LinkBox",
  },
  description:
    "Organize, categorize e compartilhe seus links com inteligência. Seu segundo cérebro digital.",
  keywords: [
    "link organizer",
    "bookmark manager",
    "produtividade",
    "organizar links",
    "curadoria digital",
  ],
  authors: [{ name: "Emanuel Malungo" }],
  creator: "LinkBox",
  metadataBase: new URL("https://linkbox.app"),
  openGraph: {
    title: "LinkBox",
    description:
      "Organize seus links de forma inteligente. Produtividade em modo escuro.",
    url: "https://linkbox.app",
    siteName: "LinkBox",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
