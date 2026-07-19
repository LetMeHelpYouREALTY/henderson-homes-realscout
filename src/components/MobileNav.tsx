'use client'

import { useState } from 'react'

interface MobileNavProps {
  children: React.ReactNode
}

export default function MobileNav({ children }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle mobile menu"
        className="text-gray-600 hover:text-gray-900 p-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            // X icon when menu is open
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon when menu is closed
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <nav
        className={`
        ${isOpen ? 'block' : 'hidden'}
        absolute top-full left-0 right-0 z-50
        mt-4 pb-4 border-t border-gray-200
        bg-white shadow-lg
      `}
      >
        <div className="container mx-auto px-4">{children}</div>
      </nav>
    </div>
  )
}
