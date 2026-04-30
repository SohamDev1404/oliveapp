'use client';
import React from 'react';
import Image from 'next/image';

const StarIcon = () =>
<svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>;


const testimonials = [
{
  name: 'Megan L.',
  text: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what\'s in our food before it ever hits our pantry.",
  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80',
  position: { top: '5%', right: '5%' },
  direction: 'row' as const
},
{
  name: 'Tina B.',
  text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  position: { top: '45%', right: '0%' },
  direction: 'row-reverse' as const
},
{
  name: 'Lila M.',
  text: "After just a week of using Olive, I feel more in control of my family's nutrition than ever before. It's empowering to make informed choices so quickly.",
  avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&q=80',
  position: { bottom: '5%', left: '10%' },
  direction: 'row' as const
}];


export default function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col">
          <div className="text-center mb-8">
            <div className="flex relative text-primary items-center justify-center">
              <h2 className="font-pall max-w-xl font-[500] text-2xl md:text-[3.2rem] text-[#1F3824] mb-4">
                Real Mothers<br />Real Results
              </h2>
            </div>
            <p className="text-[#1F3824]/60 text-sm px-4">
              Join thousands of satisfied parents who trust Olive to help them make healthier choices for their families.
            </p>
          </div>
          <div className="relative w-full h-[300px] mb-8 bg-gray-200 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80"
              alt="Testimonials Hero"
              fill
              className="object-cover"
              sizes="100vw" />

          </div>
          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) =>
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg w-full">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h6 className="text-[#1F3824] text-sm font-semibold">{t.name}</h6>
                    <div className="flex">{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
                  </div>
                </div>
                <p className="text-[#1F3824] text-sm font-[300]">{t.text}</p>
              </div>
            )}
          </div>
          <a
            href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#386641] font-medium flex items-center gap-2 justify-center mt-8">

            read all 3,147+ reviews
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
          </a>
        </div>

        {/* Desktop layout */}
        <div className="relative z-10 hidden min-h-[580px] md:block">
          <div className="absolute left-[100px] top-[88px] h-[290px] w-[290px] overflow-hidden rounded-[12px]">
            <div className="absolute inset-0 z-10 bg-black/25"></div>
            <Image
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80"
              alt="Happy family shopping for groceries"
              fill
              className="object-cover grayscale"
              sizes="240px" />
          </div>

          <div className="absolute left-[95px] top-[390px] z-20">
            <div className="relative flex items-end gap-2 flex-row">
              <div className="w-[300px] rounded-2xl bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <p className="mb-3 text-[12px] leading-[1.6] text-[#1F3824]">{testimonials[2].text}</p>
                <div className="flex flex-col items-start">
                  <h6 className="text-[12px] font-semibold text-[#1F3824]">{testimonials[2].name}</h6>
                  <div className="flex origin-left scale-90">{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
                </div>
              </div>
              <Image src={testimonials[2].avatar} alt={testimonials[2].name} width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
            </div>
          </div>

          <div className="absolute left-[430px] top-[190px] z-40">
            <h2 className="font-pall max-w-xl font-[500] text-2xl md:text-[3.7rem] leading-[0.96] text-[#1F3824] mb-5">
              Real Mothers<br />Real Results
            </h2>
            <a
              href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-medium text-[#1F3824]/60">
              read all 3,147+ reviews
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
            </a>
          </div>

          <div className="absolute left-[590px] top-[18px] z-20">
            <div className="relative flex items-end gap-2 flex-row">
              <div className="w-[330px] rounded-2xl bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <p className="mb-3 text-[12px] leading-[1.6] text-[#1F3824]">{testimonials[0].text}</p>
                <div className="flex flex-col items-start">
                  <h6 className="text-[12px] font-semibold text-[#1F3824]">{testimonials[0].name}</h6>
                  <div className="flex origin-left scale-90">{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
                </div>
              </div>
              <Image src={testimonials[0].avatar} alt={testimonials[0].name} width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
            </div>
          </div>

          <div className="absolute left-[660px] top-[298px] z-20">
            <div className="relative flex items-end gap-2 flex-row-reverse">
              <div className="w-[300px] rounded-2xl bg-white p-5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <p className="mb-3 text-[12px] leading-[1.6] text-[#1F3824]">{testimonials[1].text}</p>
                <div className="flex flex-col items-start">
                  <h6 className="text-[12px] font-semibold text-[#1F3824]">{testimonials[1].name}</h6>
                  <div className="flex origin-left scale-90">{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
                </div>
              </div>
              <Image src={testimonials[1].avatar} alt={testimonials[1].name} width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
            </div>
          </div>
        </div>

        {/* Decorative snowflake SVG */}
        <svg width="484" height="813" viewBox="0 0 484 813" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute hidden md:block w-[320px] h-[320px] left-[-72px] z-0 top-[122px]">
          <path d="M77.3736 0.964844C21.3156 0.964844 -24.1293 46.4097 -24.1293 102.468V160.487L-64.5964 120.015C-104.235 80.3766 -168.503 80.3766 -208.142 120.015C-247.781 159.654 -247.781 223.926 -208.142 263.565L-166.233 305.473H-227.135C-283.193 305.473 -328.638 350.918 -328.638 406.976C-328.638 463.034 -283.193 508.479 -227.135 508.479H-170.293L-209.855 548.041C-249.494 587.68 -249.494 651.947 -209.855 691.586C-170.216 731.225 -105.945 731.225 -66.3057 691.586L-24.1293 649.409V711.484C-24.1293 767.542 21.3156 812.987 77.3736 812.987C133.432 812.987 178.876 767.542 178.876 711.484V650.583L222.498 694.205C262.137 733.844 326.405 733.844 366.043 694.205C405.682 654.566 405.682 590.294 366.043 550.655L323.867 508.479H381.882C437.94 508.479 483.385 463.034 483.385 406.976C483.385 350.918 437.94 305.473 381.882 305.473H319.807L364.334 260.946C403.973 221.307 403.973 157.04 364.334 117.401C324.695 77.7619 260.424 77.7619 220.785 117.401L178.876 159.309V102.468C178.876 46.4097 133.432 0.964844 77.3736 0.964844Z" fill="#EBF5ED" />
        </svg>
      </div>
    </section>);

}