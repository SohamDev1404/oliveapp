'use client';
import React from 'react';
import Image from 'next/image';

const CheckIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"/>
  </svg>
);

const productImages = [
  { src: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&q=80', alt: 'Organic Bagels' },
  { src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&q=80', alt: 'Healthy Snack' },
  { src: 'https://images.unsplash.com/photo-1559181567-c3190bba0ade?w=200&q=80', alt: 'Sparkling Water' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80', alt: 'Crackers' },
  { src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&q=80', alt: 'Mineral Water' },
  { src: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&q=80', alt: 'Chips' },
  { src: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200&q=80', alt: 'Granola Bar' },
  { src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80', alt: 'Candy' },
];

const mealSuggestions = [
  'Veggie Spaghetti Squash',
  'Chhole (Chickpea Curry)',
  'Lentil and Spinach Soup',
  'Stuffed Bell Peppers with Rice',
  'Mediterranean Quinoa Salad',
];

export default function HowItWorks() {
  return (
    <div className="md:my-24 my-8 max-w-7xl px-4 md:px-8 mx-auto">
      <div className="py-4 md:py-16 flex flex-col max-w-6xl mx-auto items-center">
        <div className="flex relative text-[#1F3824] items-center justify-center mb-2">
          <h2 className="font-sans text-[#1F3824] max-w-xl font-[500] text-2xl md:text-[3.2rem] text-center">
            How the Olive Food Scanner App Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 pt-8 md:pt-24 gap-6 w-full">
          {/* Card 1: Scan & Detect */}
          <div className="w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[#F5FAF6] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
            <h3 className="text-base font-semibold text-gray-800 py-2">Scan &amp; Detect</h3>
            <div className="h-[200px] rounded-2xl relative overflow-hidden bg-white">
              {/* Scanner corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-[#1F3824] opacity-30 rounded-tl-xl"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-[3px] border-r-[3px] border-[#1F3824] opacity-30 rounded-tr-xl"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-[3px] border-l-[3px] border-[#1F3824] opacity-30 rounded-bl-xl"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-[#1F3824] opacity-30 rounded-br-xl"></div>
              {/* Barcode visual */}
              <div className="flex items-center justify-center h-full">
                <div className="flex gap-0.5 items-end h-20">
                  {[3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5].map((h, i) => (
                    <div key={i} className="bg-[#1F3824]" style={{ width: '3px', height: `${h * 8}px`, opacity: 0.8 }}></div>
                  ))}
                </div>
              </div>
              {/* Scan line */}
              <div className="absolute left-8 right-8 h-0.5 bg-[#1F3824] opacity-60" style={{ top: '40%' }}></div>
              {/* Olive sparkles */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 text-[#AEB93E] opacity-60"
                  style={{
                    left: `${10 + i * 20}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    transform: `rotate(${i * 30}deg) scale(${0.5 + i * 0.1})`,
                  }}
                >
                  ✦
                </div>
              ))}
            </div>
            <p className="text-sm font-[500] text-neutral-600 max-w-sm mt-4">
              When you open Olive simply scan the barcode to instantly detect product ingredients. Olive&apos;s intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.
            </p>
          </div>

          {/* Card 2: Data Analysis */}
          <div className="w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[#F5FAF6] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
            <h3 className="text-base font-semibold text-gray-800 py-2">Data Analysis &amp; Validation</h3>
            <div className="h-[200px] rounded-2xl relative overflow-hidden">
              {/* Scrolling product images */}
              <div
                className="absolute top-1/2 -translate-y-1/2 flex gap-2 items-center"
                style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)' }}
              >
                <div className="flex gap-2 animate-scroll-left" style={{ width: 'max-content' }}>
                  {[...productImages, ...productImages].map((img, i) => (
                    <div key={i} className="relative w-16 h-16 shrink-0 rounded-2xl overflow-hidden" style={{ opacity: 0.5 }}>
                      <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-32 bg-gradient-to-b from-[#1F3824]/0 via-[#1F3824]/20 to-[#1F3824]/0 rounded-full blur-xl"></div>
              </div>
              {/* Safe badge */}
              <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center">
                <div className="bg-[#D4E8D8] font-[500] flex items-center gap-2 w-fit px-3 py-1 rounded-2xl shadow-sm">
                  <CheckIcon className="w-4 h-4 text-[#1F3824]" />
                  <span className="text-xs text-[#1F3824]">Safe to consume</span>
                </div>
              </div>
            </div>
            <p className="text-sm font-[500] text-neutral-600 max-w-sm mt-4">
              After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.
            </p>
          </div>

          {/* Card 3: Actionable Insights */}
          <div className="w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[#F5FAF6] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
            <h3 className="text-base font-semibold text-gray-800 py-2">Actionable Insights &amp; Recommendations</h3>
            <div className="h-[200px] rounded-2xl relative overflow-hidden">
              {/* Stacked product images */}
              <div className="flex items-center justify-center pt-4 relative z-10">
                <div className="relative w-20 h-28 rounded-2xl overflow-hidden border-2 border-white shadow-lg" style={{ transform: 'translateX(40px) rotate(-12deg) scale(0.9)', zIndex: 1 }}>
                  <Image src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&q=80" alt="Product" fill className="object-cover" sizes="80px" />
                </div>
                <div className="relative w-20 h-28 rounded-2xl overflow-hidden border-2 border-white shadow-xl" style={{ zIndex: 3 }}>
                  <Image src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&q=80" alt="Product" fill className="object-cover" sizes="80px" />
                </div>
                <div className="relative w-20 h-28 rounded-2xl overflow-hidden border-2 border-white shadow-lg" style={{ transform: 'translateX(-40px) rotate(12deg) scale(0.9)', zIndex: 1 }}>
                  <Image src="https://images.unsplash.com/photo-1559181567-c3190bba0ade?w=200&q=80" alt="Product" fill className="object-cover" sizes="80px" />
                </div>
              </div>
              {/* Scrolling meal suggestions */}
              <div className="absolute inset-0 flex flex-col items-center gap-2 overflow-hidden" style={{ top: '55%' }}>
                <div className="flex flex-col gap-2 animate-scroll-left" style={{ width: '80%' }}>
                  {[...mealSuggestions, ...mealSuggestions].map((meal, i) => (
                    <div key={i} className="flex items-center justify-center w-full rounded-md p-2 h-8 text-center bg-[#38664126]">
                      <p className="text-xs font-normal text-neutral-600 truncate">{meal}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Gradient overlays */}
              <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[#F5FAF6] to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-[#F5FAF6] to-transparent pointer-events-none"></div>
            </div>
            <p className="text-sm font-[500] text-neutral-600 max-w-sm mt-4">
              Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family&apos;s health &amp; nutrition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
