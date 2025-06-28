export default function ContactSection() {
  return (
    <section id="contact" className="w-full flex flex-col md:flex-row min-h-[60vh] bg-[#f7f7f7]">
      {/* Left: Contact Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 bg-[#f3f3f3]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Info</h2>
        <div className="w-16 h-1 bg-[#b29a6c] mb-6" />
        <div className="text-[#b29a6c] text-xl font-semibold mb-4">Call Now : (1)2345-2345-54</div>
        <div className="mb-2 text-gray-700 flex items-center gap-2">
          <span className="material-icons text-[#b29a6c]">email</span>
          Contact@Attornasite.co
        </div>
        <div className="mb-2 text-gray-700 flex items-center gap-2">
          <span className="material-icons text-[#b29a6c]">schedule</span>
          Mon - Fri 09:00-17:00
        </div>
        <div className="mb-4 text-gray-700 flex items-center gap-2">
          <span className="material-icons text-[#b29a6c]">location_on</span>
          12th Wall Street NY CV564 Unites States
        </div>
        <p className="text-gray-500 mb-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they.</p>
        <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xl mx-auto px-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 px-4 py-3 rounded bg-white border border-gray-300 focus:outline-none w-full"
          />
          <button
            type="submit"
            className="bg-[#b29a6c] hover:bg-[#a0885a] text-white font-semibold px-6 py-3 rounded transition w-full sm:w-auto"
          >
            SUBSCRIBE
          </button>
        </form>

      </div>
      {/* Right: Free Consultation Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Consultation</h2>
        <div className="w-16 h-1 bg-[#b29a6c] mb-6" />
        <p className="text-gray-500 mb-6">Law is complicate matter. It can cause you a big problem. Let us help you!</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Name*" className="px-4 py-3 rounded bg-[#f7f7f7] border border-gray-300 focus:outline-none col-span-1" />
          <input type="text" placeholder="Phone*" className="px-4 py-3 rounded bg-[#f7f7f7] border border-gray-300 focus:outline-none col-span-1" />
          <input type="text" placeholder="Corporate Law" className="px-4 py-3 rounded bg-[#f7f7f7] border border-gray-300 focus:outline-none col-span-1" />
          <input type="email" placeholder="Email*" className="px-4 py-3 rounded bg-[#f7f7f7] border border-gray-300 focus:outline-none col-span-1" />
          <textarea placeholder="Message*" className="px-4 py-3 rounded bg-[#f7f7f7] border border-gray-300 focus:outline-none col-span-1 md:col-span-2 min-h-[100px]" />
        </form>
        <button type="submit" className="bg-[#b29a6c] hover:bg-[#a0885a] text-white font-semibold px-8 py-3 rounded transition w-full">SUBMIT NOW</button>
      </div>
    </section>
  );
} 