import Image from "next/image";
import testimonialBg from '@/images/walk-way-1.jpeg';
import clientImg from '@/images/Emma1.jpeg';

export default function TestimonialsSection() {
  return (
    <section id="testimonial" className="relative w-full py-20 flex justify-center items-center bg-black/80 ">
      {/* Background image (replace src) */}
      <Image
        src={testimonialBg} // <-- Add your background image src
        alt="Testimonials Background"
        fill
        className="object-cover "
        priority
      />
      {/* Overlay and border */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 rounded-lg flex flex-col items-center text-center">
        <span className="uppercase tracking-widest text-[#b29a6c] text-sm mb-2">Testimonial</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Words From Clients</h2>
        <div className="text-[#b29a6c] text-6xl mb-6">&ldquo;</div>
        <p className="text-lg text-gray-200 italic mb-8 max-w-2xl mx-auto">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts.
        </p>
        <div className="flex flex-col items-center gap-2 mb-8">
          <Image src={clientImg} alt="John Dowson" width={56} height={56} className="rounded-full object-cover border-2 border-[#b29a6c]" />
          <span className="text-white font-semibold">John Dowson</span>
          <span className="text-[#b29a6c] text-sm">CEO Of Ifin, Financial Corp.</span>
        </div>
        {/* Dots navigation */}
        <div className="flex gap-2 justify-center">
          <span className="w-3 h-3 rounded-full bg-[#b29a6c] inline-block" />
          <span className="w-3 h-3 rounded-full bg-white/30 inline-block" />
          <span className="w-3 h-3 rounded-full bg-white/30 inline-block" />
        </div>
      </div>
    </section>
  );
} 