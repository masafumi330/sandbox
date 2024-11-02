import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Todo App",
  description: "todo app by masafumi330",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="container mx-auto px-4 max-w-4xl min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
