"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface HeaderProps {
  currentPage?: string
}

export function Header({ currentPage = "" }: HeaderProps) {
  const [showContactDropdown, setShowContactDropdown] = useState(false)

  const toggleContactDropdown = () => {
    setShowContactDropdown(!showContactDropdown)
  }

  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
          Adelin Ma
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link
            href="/work"
            className={`hover:underline font-medium text-sm ${currentPage === "work" ? "underline" : ""}`}
          >
            WORK
          </Link>
          <Link
            href="/academic"
            className={`hover:underline font-medium text-sm ${currentPage === "academic" ? "underline" : ""}`}
          >
            ACADEMIC
          </Link>
          <Link
            href="/research"
            className={`hover:underline font-medium text-sm ${currentPage === "research" ? "underline" : ""}`}
          >
            RESEARCH
          </Link>
          <Link
            href="/activities"
            className={`hover:underline font-medium text-sm ${currentPage === "activities" ? "underline" : ""}`}
          >
            ACTIVITIES
          </Link>
          <Link
            href="/projects"
            className={`hover:underline font-medium text-sm ${currentPage === "projects" ? "underline" : ""}`}
          >
            PROJECTS
          </Link>
          <Link
            href="/service"
            className={`hover:underline font-medium text-sm ${currentPage === "service" ? "underline" : ""}`}
          >
            SERVICE
          </Link>
          <div className="relative">
            <button onClick={toggleContactDropdown} className="flex items-center hover:underline font-medium text-sm">
              CONTACT ME
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {showContactDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="mailto:example@email.com" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  LinkedIn
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
