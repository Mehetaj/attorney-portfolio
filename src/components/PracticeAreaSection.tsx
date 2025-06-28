import Image from "next/image";
import background from '@/images/page124.jpeg'
import layerbg from '@/images/layer-bg1.jpeg'
import money5 from '@/images/money5.png'
import insurance5 from '@/images/insurance5.png'
import safe5 from '@/images/safe5.png'

export default function PracticeAreaSection() {
    return (
        <section id="practice-area" className="w-full min-h-[70vh] flex flex-col md:flex-row">
            {/* Right: Image (show on all screens, above content on mobile) */}
            <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-auto relative order-1 md:order-2">
                <Image
                    src={background}
                    alt="Practice Area Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            {/* Left: Gold background with background image and practice areas */}
            <div className="w-full md:w-1/2 relative flex flex-col justify-center px-4 sm:px-8 py-10 md:py-0 md:pl-24 md:pr-12 overflow-hidden order-2 md:order-1 min-h-[350px]">
                {/* Background image with opacity */}
                <Image 
                    src={layerbg}
                    alt="Layer background"
                    fill
                    className="object-cover opacity-30 z-0"
                    priority
                />
                {/* Gold overlay */}
                <div className="absolute inset-0 bg-[#b29a6c]/[0.01] opacity-90 z-10" />
                <div className="relative z-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-10">
                        Pratice Area
                        <span className="block w-12 sm:w-16 h-1 bg-white mt-2 mb-4" />
                    </h2>
                    <div className="space-y-6 sm:space-y-10">
                        {/* Card 1 */}
                        <div className="flex items-start gap-4 sm:gap-5">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-yellow-200 shrink-0">
                                <Image src={money5} alt="icon" width={40} height={40} />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Coporate & Securities</h3>
                                <p className="text-white/90 text-sm sm:text-base max-w-md">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind. One morning, when Gregor Samsa woke from troubled.</p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex items-start gap-4 sm:gap-5">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-yellow-200 shrink-0">
                                <Image src={insurance5} alt="icon" width={40} height={40} />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Real Estate Law</h3>
                                <p className="text-white/90 text-sm sm:text-base max-w-md">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind. One morning, when Gregor Samsa woke from troubled.</p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex items-start gap-4 sm:gap-5">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-yellow-200 shrink-0">
                                <Image src={safe5} alt="icon" width={40} height={40} />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Insurance Law</h3>
                                <p className="text-white/90 text-sm sm:text-base max-w-md">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind. One morning, when Gregor Samsa woke from troubled.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 