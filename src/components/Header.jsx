import React from 'react'

const Header = () => (
  <header className="flex items-center justify-between px-6 md:px-24 py-4 bg-white shadow z-50 sticky top-0">
    <div className="flex items-center space-x-3">
      <img src="/assets/images/logo.png" alt="Heartleaf Farms Logo" className="h-10 w-10 object-contain" />
      <h1 className="text-xl md:text-2xl font-serif font-semibold text-[#3a5a40]">Heartleaf Farms</h1>
    </div>
  </header>
)

export default Header
