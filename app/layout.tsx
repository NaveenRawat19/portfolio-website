import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Naveen: software engineer",
  description: "Backend and agentic AI systems. Selected projects and experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <header className="site-header">
          <Link href="/" className="brand">Naveen</Link>
          <nav aria-label="Primary">
            <Link href="/#projects">Projects</Link>
            <Link href="/#experience">Experience</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">Built with Next.js.</footer>
      </body>
    </html>
  );
}
