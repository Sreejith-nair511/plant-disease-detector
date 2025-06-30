"use client"

import Link from "next/link"
import { useState } from "react"
import { Leaf, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-green-600 dark:bg-green-800 text-white sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Leaf className="mr-2" />
          Plant Doctor
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex ${
            isOpen ? "block" : "hidden"
          } absolute md:relative top-16 left-0 md:top-0 bg-green-600 dark:bg-green-800 md:bg-transparent w-full md:w-auto`}
        >
          {["Home", "About", "Disease Info", "Contact"].map((item) => (
            <li key={item} className="md:ml-6">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="block py-2 md:py-0 px-4 md:px-0 hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-200 transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="md:ml-6">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="block py-2 md:py-0 px-4 md:px-0 hover:bg-green-700 md:hover:bg-transparent md:hover:text-green-200 transition-colors duration-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
