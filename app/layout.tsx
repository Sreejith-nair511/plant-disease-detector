import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import StartupAnimation from "./components/StartupAnimation"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Plant Doctor",
  description: "Your virtual plant disease detective",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-interactive`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <StartupAnimation />
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 md:px-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
