/* eslint-disable @next/next/no-head-element */

import React from "react";
import Link from "next/link";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
          <title>NotesApp</title>
      </head>
      <body>
      <main>
          <nav>
              <Link href="/">
                  Home
              </Link>
              <Link href="/notes">
                  Notes
              </Link>
          </nav>
          {children}
      </main>
      </body>
    </html>
  );
}
