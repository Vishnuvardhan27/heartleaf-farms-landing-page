import React from 'react'
import {
  FaLeaf,
  FaTractor,
  FaSearch,
  FaBoxOpen,
  FaUtensils,
  FaUserFriends
} from 'react-icons/fa'

const features = [
  {
    icon: <FaLeaf className="text-green-600 text-xl" />,
    title: '100% Organic & Non-GMO',
    desc: 'All produce is grown without synthetic chemicals, from certified organic farms.'
  },
  {
    icon: <FaUserFriends className="text-green-600 text-xl" />,
    title: 'Direct from Farmers',
    desc: 'No middlemen — just fresh food delivered from trusted Indian farmers.'
  },
  {
    icon: <FaSearch className="text-green-600 text-xl" />,
    title: 'Transparent Sourcing',
    desc: 'Track where your food comes from, down to the farm and harvest date.'
  },
  {
    icon: <FaBoxOpen className="text-green-600 text-xl" />,
    title: 'Eco-Friendly Packaging',
    desc: 'Compostable, reusable, and plastic-free wherever possible.'
  },
  {
    icon: <FaUtensils className="text-green-600 text-xl" />,
    title: 'Nutrition-Packed Freshness',
    desc: 'Delivered within 24 hours of harvest to pack flavor and nutrients.'
  }
]

const WhyChoose = () => (
  <section className="bg-[#e8efe4] py-20 px-6 md:px-24">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif text-center text-[#3a5a40] mb-12">
        Why Choose Heartleaf Farms?
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">{f.icon} <h3 className="text-lg font-semibold text-[#3a5a40]">{f.title}</h3></div>
            <p className="text-sm text-gray-700">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhyChoose
