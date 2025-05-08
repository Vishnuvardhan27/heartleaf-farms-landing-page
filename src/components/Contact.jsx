import React from 'react'

const Contact = () => (
  <section className="bg-[#fdf9f2] py-20 px-6 md:px-24">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-[#3a5a40] mb-4">Let’s Talk</h2>
      <p className="text-gray-700 mb-2">
        Email: <a href="mailto:contact@heartleaffarms.com" className="text-[#3a5a40]">contact@heartleaffarms.com</a><br />
        Phone: +91-XXXXXXXXXX
      </p>

      <form className="mt-8 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3a5a40]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3a5a40]"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3a5a40]"
        />
        <button
          type="submit"
          className="mt-4 bg-[#d6a84e] hover:bg-[#c59a40] text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
)

export default Contact
