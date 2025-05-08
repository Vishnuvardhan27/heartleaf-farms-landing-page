import React from 'react'

const Hero = () => (
  <section
    className="min-h-screen py-20 flex items-center bg-no-repeat bg-cover bg-[position:60%_center] md:bg-[position:right_top] text-white"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(58, 90, 64, 0.85) 15%, rgba(58, 90, 64, 0.2) 60%, rgba(0,0,0,0) 100%),
        url('/assets/images/hero-golden-hour.webp')
      `,
    }}
  >
    <div className="max-w-xl px-6 md:px-32 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight drop-shadow-md">
        Farm to Kitchen.<br />
        100% Organic.<br />
        Always Fresh.
      </h1>
      <p className="mt-6 text-base md:text-xl text-[#f1f1f1] drop-shadow-md">
        Pure, sustainable food grown with care—from our farms to your kitchen.
      </p>
      <a
        href="#about"
        className="inline-block mt-8 bg-[#d6a84e] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#c59a40] transition"
      >
        Explore Our Story
      </a>
    </div>
  </section>
)

export default Hero
