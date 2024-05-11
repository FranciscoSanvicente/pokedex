import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Pokedex - Explore the Pokémon world",
  description: "Discover and explore detailed information about your favorite Pokémon in our interactive Pokedex.",
  keywords: "Pokémon, Pokedex, Pokémon Info, Pokémon Details",
  openGraph: {
    title: `Pokedex - Explore the Pokémon world`,
    description: 'Discover and explore detailed information about your favorite Pokémon in our interactive Pokedex.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Francisco Sanvicente" />
      </head>
      <body className={`${roboto.className} bg-red-100 dark:bg-zinc-800`}>
        <main aria-live="polite" className="sm:p-4 p-1">{children}</main>
      </body>
    </html>
  );
}
