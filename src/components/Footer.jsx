import React from 'react'
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Footer = () => (
  <footer className="bg-[#3a5a40] text-white py-6 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p className="text-center md:text-left">
        © 2025 <span className="font-semibold">Heartleaf Farms Private Limited</span>. All rights reserved.
      </p>
      <div className="flex gap-4 justify-center text-lg">
        <a href="mailto:contact@heartleaffarms.com" className="hover:text-[#d6a84e] transition" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6a84e] transition" title="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com/heartleaffarms" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6a84e] transition" title="Instagram">
          <FaInstagram />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
