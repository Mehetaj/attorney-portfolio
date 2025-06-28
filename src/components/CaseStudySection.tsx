import Image from "next/image";
import case1 from '@/images/Family1.jpeg';
import case2 from '@/images/Giving-Million-Air-Its.jpeg';
import case3 from '@/images/Reinventing-the-Riverfront.jpeg';
import bgImg from '@/images/work-bg.jpeg';

export default function CaseStudySection() {
  return (
    <section id="case-study" className="relative w-full py-20 bg-[#ffffff] overflow-hidden">
      {/* Faint background image */}
      <Image
        src={bgImg} // <-- Add your faint background image src
        alt="Case Study BG"
        fill
        className="object-cover opacity-10 z-0"
        priority
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center">
        <span className="uppercase tracking-widest text-[#b29a6c] text-sm mb-2">Works from past</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Case Study</h2>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center mb-10">
          {/* Card 1 */}
          <div className="bg-white rounded shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col">
            <div className="relative h-56 w-full">
              <Image src={case1} alt="Family Violence" fill className="object-cover" />
            </div>
            <div className="p-6 flex-1 flex items-end">
              <span className="font-semibold text-lg text-gray-900">Family Violence</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col">
            <div className="relative h-56 w-full">
              <Image src={case2} alt="Giving Million Air Its Wings" fill className="object-cover" />
            </div>
            <div className="p-6 flex-1 flex items-end">
              <span className="font-semibold text-lg text-gray-900">Giving Million Air Its Wings</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded shadow-lg overflow-hidden w-full md:w-1/3 flex flex-col">
            <div className="relative h-56 w-full">
              <Image src={case3} alt="Car Accident Insurance" fill className="object-cover" />
            </div>
            <div className="p-6 flex-1 flex items-end">
              <span className="font-semibold text-lg text-gray-900">Car Accident Insurance</span>
            </div>
          </div>
        </div>
        <button className="bg-[#b29a6c] hover:bg-[#a0885a] text-white font-semibold px-8 py-3 rounded transition">VIEW ALL CASES &rarr;</button>
      </div>
    </section>
  );
} 