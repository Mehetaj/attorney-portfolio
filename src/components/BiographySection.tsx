import Image from "next/image";
import bioImg from '@/images/hp3-half-bg.jpeg'; // Uncomment and set your image

export default function BiographySection() {
  return (
    <section id="education" className="w-full flex flex-col md:flex-row min-h-[60vh]">
      {/* Left: Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src={bioImg} // <-- Add your image src
          alt="Biography"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      {/* Right: Content */}
      <div className="w-full md:w-1/2 bg-black flex flex-col justify-center px-8 py-12 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Biography</h2>
        <p className="text-lg text-[#b29a6c] mb-6">
          John Smith is a Partner at Attorna and the Head of International Arbitration Practice. John specialises in consulting clients in the area of international trade, and representing their interests in.
        </p>
        <div className="w-12 h-1 bg-[#b29a6c] mb-6" />
        <p className="text-base text-gray-200">
          John is the leader of the Working Group on International Taxation & EU Harmonization in UK at the American Chamber of Commerce. He is also the Committee Head of the Permanent Scientific Committee of IFA. During 2011 John served as the Co-Chair of the Tax Committee of the American Chamber of Commerce and was the member of the working group on VAT reform at the Ministry of Finance of United Kingdom.
        </p>
      </div>
    </section>
  );
} 