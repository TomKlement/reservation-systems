import './globals.css'
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="min-h-screen bg-background text-black">

        <header className="bg-secondary shadow w-full">
        <div className="max-w-[1200px] mx-auto p-4 flex justify-center items-center gap-4">
            <button className="min-w-40 px-6 py-2 bg-button text-black rounded-md font-semibold hover:bg-opacity-80 border border-stroke">
              Rezervace
            </button>
            <button className="min-w-40 px-6 py-2 bg-button text-black rounded-md font-semibold hover:bg-opacity-80 border border-stroke">
              Rezervace Kino
            </button>
          </div>
        </header>


        <main className="flex-1">
          <div className="max-w-[1200px] mx-auto p-4">
            {children}
          </div>
        </main>


        <footer className="p-4 text-center text-gray-500">
          &copy;, test
        </footer>
      </body>
    </html>
  )
}
