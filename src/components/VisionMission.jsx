import React from 'react'
import { FaLeaf, FaSeedling } from 'react-icons/fa'

const VisionMission = () => (
  <section className="bg-white py-20 px-6 md:px-24">
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-[#f7f5ee] rounded-xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-[#3a5a40]">
          <FaLeaf className="text-xl" />
          <h2 className="text-2xl font-serif font-semibold">Our Vision</h2>
        </div>
        <p className="text-gray-700 text-sm md:text-base">
          To cultivate a healthier future by reconnecting people with nature through clean, sustainable, and ethically produced food—directly from our farms to every kitchen.
        </p>
      </div>
      <div className="bg-[#f7f5ee] rounded-xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-[#3a5a40]">
          <FaSeedling className="text-xl" />
          <h2 className="text-2xl font-serif font-semibold">Our Mission</h2>
        </div>
        <p className="text-gray-700 text-sm md:text-base">
          We grow and deliver 100% organic, chemical-free food including vegetables, fruits, millets, dairy, poultry, meat, and their by-products.
        </p>
      </div>
    </div>
  </section>
)

export default VisionMission
