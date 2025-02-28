import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-20 bg-blue-600 text-white text-xl font-bold text-center">
          Reservation systems
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="p-4 text-center text-gray-500">
          &copy; Test
        </footer>
      </body>
    </html>
  );
}
