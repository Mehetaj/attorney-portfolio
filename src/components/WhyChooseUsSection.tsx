import Image from "next/image";
import bgImg from '@/images/layer-bg1.jpeg'; // Uncomment and set your image

export default function WhyChooseUsSection() {
  return (
    <section className="relative w-full py-20 flex justify-center items-center bg-black/80">
      {/* Background image (replace src) */}
      <Image
        src={bgImg} // <-- Add your background image src
        alt="Why Choose Us Background"
        fill
        className="object-cover opacity-40 z-0"
        priority
      />
      {/* Overlay and border */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 border border-[#b29a6c] bg-black/60 rounded-lg">
        <div className="flex flex-col items-center">
          <span className="uppercase tracking-widest text-[#b29a6c] text-sm mb-2">What we are expert at</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">Why Clients Choose Us?</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <p className="flex-1 text-gray-200 text-lg text-center md:text-left">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookm arksgrove right at the coast of the Semantics, a large language ocean. A small river named
          </p>
          <p className="flex-1 text-gray-200 text-lg text-center md:text-left">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-[#b29a6c] text-base">Client Consultations</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-[#b29a6c] text-base">Successful Cases</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10mIns</div>
            <div className="text-[#b29a6c] text-base">Recovered cost for clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">30+</div>
            <div className="text-[#b29a6c] text-base">Professional Attorneys</div>
          </div>
        </div>
      </div>
    </section>
  );
} 