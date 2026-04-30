'use client';
import React from 'react';
import Image from 'next/image';

const oliveBarcodeImage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80';

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
    <div className="my-10 md:my-20 max-w-6xl px-4 md:px-6 mx-auto">
      <div className="py-4 md:py-10 flex flex-col max-w-5xl mx-auto items-center">
        <div className="mb-2 flex items-start justify-center gap-3 text-[#1F3824]">
          <h2 className="font-sans text-[#1F3824] max-w-[360px] md:max-w-[430px] font-[500] text-2xl md:text-[2.35rem] leading-[1.15] text-center">
            How the Olive Food Scanner App Works
          </h2>
          <span className="mt-1 text-3xl md:text-4xl">🥑</span>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 pt-8 md:grid-cols-3 md:pt-10">
          {/* Card 1: Scan & Detect */}
          <div className="w-full mx-auto rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[#F5FAF6] p-5 md:p-5 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
            <h3 className="py-1 text-[12px] font-semibold text-gray-800">Scan &amp; Detect</h3>
            <div className="relative h-[138px] overflow-hidden rounded-2xl bg-white">
              {/* Scanner corners */}
              <div className="absolute top-4 left-4 h-6 w-6 rounded-tl-xl border-t-[2px] border-l-[2px] border-[#1F3824] opacity-30"></div>
              <div className="absolute top-4 right-4 h-6 w-6 rounded-tr-xl border-t-[2px] border-r-[2px] border-[#1F3824] opacity-30"></div>
              <div className="absolute bottom-4 left-4 h-6 w-6 rounded-bl-xl border-b-[2px] border-l-[2px] border-[#1F3824] opacity-30"></div>
              <div className="absolute bottom-4 right-4 h-6 w-6 rounded-br-xl border-b-[2px] border-r-[2px] border-[#1F3824] opacity-30"></div>
              {/* Olive visual */}
              <div className="flex items-center justify-center h-full">
                <div className="animate-olive-scan relative h-[76px] w-[68px] rotate-[16deg] overflow-hidden rounded-[22px]">
                  <Image
                    src={oliveBarcodeImage}
                    alt="Olive with barcode"
                    fill
                    className="object-contain"
                    sizes="68px" />
                </div>
              </div>
              {/* Scan line */}
              <div className="animate-scan-line absolute left-7 right-7 h-0.5 bg-[#1F3824] opacity-60 shadow-[0_0_8px_rgba(31,56,36,0.35)]" style={{ top: '34%' }}></div>
              {/* Olive sparkles */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-2 w-2 text-[#AEB93E] opacity-60"
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
            <p className="mt-3 max-w-sm text-[11px] leading-[1.65] font-[500] text-neutral-600">
              When you open Olive simply scan the barcode to instantly detect product ingredients. Olive&apos;s intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.
            </p>
          </div>

          {/* Card 2: Data Analysis */}
          <div className="w-full mx-auto rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[#F5FAF6] p-5 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
            <h3 className="py-1 text-[12px] font-semibold text-gray-800">Data Analysis &amp; Validation</h3>
            <div className="relative h-[138px] overflow-hidden rounded-2xl">
              <div className="absolute inset-x-0 top-[42px] flex items-center justify-center gap-3">
                <div className="animate-analysis-pop relative h-[34px] w-[34px] overflow-hidden rounded-[12px] opacity-25" style={{ animationDelay: '0s' }}>
                  <Image src={productImages[0].src} alt={productImages[0].alt} fill className="object-cover" sizes="52px" />
                </div>
                <div className="animate-analysis-pop relative h-[50px] w-[50px] overflow-hidden rounded-[16px] shadow-md" style={{ animationDelay: '0.45s' }}>
                  <Image src={productImages[7].src} alt={productImages[7].alt} fill className="object-cover" sizes="74px" />
                </div>
                <div className="animate-analysis-pop relative h-[50px] w-[50px] overflow-hidden rounded-[16px] shadow-md" style={{ animationDelay: '0.9s' }}>
                  <Image src={productImages[6].src} alt={productImages[6].alt} fill className="object-cover" sizes="74px" />
                </div>
                <div className="animate-analysis-pop relative h-[34px] w-[34px] overflow-hidden rounded-[12px] opacity-25" style={{ animationDelay: '1.35s' }}>
                  <Image src={productImages[3].src} alt={productImages[3].alt} fill className="object-cover" sizes="52px" />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[92px] w-[52px] bg-gradient-to-b from-transparent via-[#637769]/25 to-transparent blur-xl"></div>
              </div>

              <div className="absolute inset-x-0 bottom-1 flex items-center justify-center">
                <div className="flex w-fit items-center gap-2 rounded-full bg-[#DDE9DE] px-3 py-1.5 font-[500] shadow-sm">
                  <CheckIcon className="h-3.5 w-3.5 text-[#1F3824]" />
                  <span className="text-xs text-[#1F3824]">Safe to consume</span>
                </div>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-[11px] leading-[1.65] font-[500] text-neutral-600">
              After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.
            </p>
          </div>

          {/* Card 3: Actionable Insights */}
          <div className="w-full mx-auto rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[#F5FAF6] p-5 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group">
            <h3 className="py-1 text-[12px] font-semibold text-gray-800">Actionable Insights &amp; Recommendations</h3>
            <div className="relative h-[150px] overflow-hidden rounded-2xl">
              <div className="absolute inset-x-8 top-2 h-[112px] overflow-hidden opacity-55">
                <div className="flex flex-col gap-3 animate-scroll-up-slow">
                  {[...mealSuggestions, ...mealSuggestions].map((meal, i) => (
                    <div key={`${meal}-${i}`} className="flex h-7 items-center justify-center rounded-xl bg-[#DDE9DE]">
                      <p className={`text-[11px] text-[#738173] ${i % mealSuggestions.length === 2 ? 'opacity-80' : 'opacity-55'}`}>{meal}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center pt-5">
                <div className="relative h-[98px] w-[66px] translate-x-[26px] rotate-[-10deg] overflow-hidden rounded-[18px] border-2 border-white shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&q=80" alt="Recommended product" fill className="object-cover" sizes="92px" />
                </div>
                <div className="relative z-20 h-[118px] w-[78px] overflow-hidden rounded-[22px] border-2 border-white shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80" alt="Primary recommendation" fill className="object-cover" sizes="112px" />
                </div>
                <div className="relative h-[98px] w-[66px] translate-x-[-26px] rotate-[10deg] overflow-hidden rounded-[18px] border-2 border-white shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=300&q=80" alt="Alternative recommendation" fill className="object-cover" sizes="92px" />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#F5FAF6] to-transparent"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#F5FAF6] to-transparent"></div>
            </div>
            <p className="mt-3 max-w-sm text-[11px] leading-[1.65] font-[500] text-neutral-600">
              Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family&apos;s health &amp; nutrition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
