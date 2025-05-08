import React from 'react'
import { FaCheckSquare } from 'react-icons/fa'

const features = [
  'Organic Vegetables',
  'Native Millets',
  'Dairy & Poultry',
  'Ethically Sourced Meats',
  'Handmade Organic Foods'
]

const About = () => (
  <section className="bg-[#fdf9f2] py-20 px-6 md:px-24">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-serif text-[#3a5a40] mb-6">
          A Cleaner Way to Eat.<br />A Smarter Way to Farm.
        </h2>
        <ul className="space-y-3 text-gray-800 text-sm md:text-base">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <FaCheckSquare className="text-green-600 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/assets/images/produce-features.webp"
          alt="Organic Produce"
          className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md"
        />
      </div>
    </div>
  </section>
)

export default About
