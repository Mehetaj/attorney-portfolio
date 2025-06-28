import Image from "next/image";
import booksImg from '@/images/page126.jpeg'; // Uncomment and set your image

export default function EducationBarAdmissionSection() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[60vh]">
      {/* Left: Content */}
      <div className="w-full md:w-1/2 bg-[#232323] flex flex-col justify-center px-8 py-12 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Education & Bar Admission</h2>
        <ul className="space-y-6">
          <li className="text-[#b29a6c] text-base">BA, Columbia College; 2001</li>
          <li><div className="w-16 h-0.5 bg-[#b29a6c] my-2" /></li>
          <li className="text-[#b29a6c] text-base">Master of Law, 2007. UK University</li>
          <li><div className="w-16 h-0.5 bg-[#b29a6c] my-2" /></li>
          <li className="text-[#b29a6c] text-base">Admitted to the Bar since 2013</li>
          <li><div className="w-16 h-0.5 bg-[#b29a6c] my-2" /></li>
          <li className="text-[#b29a6c] text-base">Member of the International Bar Association</li>
          <li><div className="w-16 h-0.5 bg-[#b29a6c] my-2" /></li>
          <li className="text-[#b29a6c] text-base">Member of the London City Bar Association</li>
          <li><div className="w-16 h-0.5 bg-[#b29a6c] my-2" /></li>
          <li className="text-[#b29a6c] text-base">Speaker of GAFTA Professional Development Programmes</li>
        </ul>
      </div>
      {/* Right: Image */}
      <div className="hidden md:block w-1/2 h-auto relative">
        <Image
          src={booksImg} // <-- Add your image src
          alt="Books Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
} 