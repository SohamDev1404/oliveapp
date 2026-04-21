'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const avatars = [
{ src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', alt: 'User 1' },
{ src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', alt: 'User 2' },
{ src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', alt: 'User 3' },
{ src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', alt: 'User 4' }];


const productImages = [
{ src: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&q=80', alt: 'Organic Bagels' },
{ src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&q=80', alt: 'Healthy Snack' },
{ src: 'https://images.unsplash.com/photo-1559181567-c3190bba0ade?w=200&q=80', alt: 'Sparkling Water' },
{ src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80', alt: 'Crackers' },
{ src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&q=80', alt: 'Mineral Water' },
{ src: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&q=80', alt: 'Chips' },
{ src: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=200&q=80', alt: 'Granola Bar' },
{ src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80', alt: 'Candy' },
{ src: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&q=80', alt: 'Milk' },
{ src: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&q=80', alt: 'Tortilla Chips' }];


export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneTranslateY = Math.min(scrollY * 0.3, 80);

  return (
    <div className="flex flex-col items-center pb-0">
      {/* Social Proof */}
      <div className="mb-6 flex gap-2 flex-col sm:items-center md:justify-center sm:flex-row">
        <div className="flex flex-row items-center justify-center">
          <div className="flex items-center">
            {avatars?.map((avatar, i) =>
            <div key={i} className="group relative -mr-3">
                <div className="relative overflow-hidden rounded-full border-2 border-neutral-200">
                  <Image
                  src={avatar?.src}
                  alt={avatar?.alt}
                  width={32}
                  height={32}
                  className="h-8 w-8 object-cover object-top" />

                </div>
              </div>
            )}
            <div className="z-10 h-8 w-8 flex items-center justify-center rounded-full border-2 border-neutral-200 bg-gradient-to-br from-gray-200/50 to-gray-300/50 ml-3">
              <span className="text-xs font-medium text-black/40">3k+</span>
            </div>
          </div>
          <span className="font-sans text-xs text-neutral-600 ml-3">Trusted by thousands of healthy families</span>
        </div>
      </div>
      {/* Headline */}
      <h1 className="relative z-50 py-2 md:pt-8 pb-4 mx-auto mt-4 max-w-2xl text-[#1F3824] text-balance text-center font-sans font-[600] tracking-tight text-4xl md:text-7xl leading-tight">
        The Safest Way to Shop for Groceries
      </h1>
      {/* Subtitle */}
      <p className="relative z-50 mx-auto mt-4 md:text-lg text-sm max-w-md px-4 text-center text-[#1F1F1F99]">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food Insights
      </p>
      {/* CTA Button */}
      <div className="flex justify-center p-8 mx-auto gap-2">
        <a
          href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all bg-[#1F3824] text-white shadow-md hover:bg-[#1F3824]/90 px-6 py-3 text-sm">

          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
            <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
          </svg>
          Download for iOS
        </a>
      </div>
      {/* 3D Phone Mockup */}
      <div
        ref={heroRef}
        className="relative z-50 w-full max-w-2xl mx-auto overflow-visible"
        style={{ minHeight: '600px' }}>

        {/* Scrolling product images behind phone */}
        <div className="absolute inset-0 top-0 flex justify-center overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)' }}>
          <div className="flex gap-3 items-center animate-scroll-left" style={{ width: 'max-content' }}>
            {[...productImages, ...productImages, ...productImages]?.map((img, i) =>
            <div key={i} className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden" style={{ opacity: 0.3, transform: 'scale(0.85)' }}>
                <Image src={img?.src} alt={img?.alt} fill className="object-cover" sizes="96px" />
              </div>
            )}
          </div>
        </div>

        {/* Phone frame */}
        <div
          className="relative mx-auto"
          style={{
            width: '280px',
            transform: `translateY(${phoneTranslateY}px)`,
            transition: 'transform 0.1s ease-out'
          }}>

          {/* 3D shadow/depth effect */}
          <div
            className="absolute inset-0 rounded-[38px]"
            style={{
              background: 'linear-gradient(180deg, rgba(88,88,88,0.24) 0%, rgba(255,255,255,0.24) 100%)',
              boxShadow: '0 40px 80px rgba(31,56,36,0.25), 0 20px 40px rgba(31,56,36,0.15)',
              transform: 'perspective(1000px) rotateX(5deg)',
              borderRadius: '38px'
            }} />


          {/* Phone outer shell */}
          <div
            className="relative bg-white rounded-[36px] overflow-hidden"
            style={{
              boxShadow: '0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)',
              transform: 'perspective(1000px) rotateX(5deg)'
            }}>

            {/* Dynamic Island / Notch */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="bg-black h-6 w-24 rounded-full flex items-center justify-end pr-2">
                <div className="h-4 w-4 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.04)_72%,rgba(255,255,255,0.16)_100%)]"></div>
              </div>
            </div>

            {/* App Screen Content */}
            <div className="bg-white px-0 pb-6">
              {/* Product image carousel area */}
              <div className="relative h-44 bg-gray-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80"
                    alt="Late July Snacks Thin and Crispy Organic Tortilla"
                    fill
                    className="object-cover"
                    sizes="280px" />

                </div>
                {/* Side product thumbnails */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-xl overflow-hidden opacity-60 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=100&q=80" alt="Product" fill className="object-cover" sizes="56px" />
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-xl overflow-hidden opacity-60 shadow-md">
                  <Image src="https://images.unsplash.com/photo-1559181567-c3190bba0ade?w=100&q=80" alt="Product" fill className="object-cover" sizes="56px" />
                </div>
              </div>

              {/* Product info card */}
              <div className="px-4 pt-3">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                    <Image
                      src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=100&q=80"
                      alt="Late July Snacks"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full" />

                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 leading-tight">Late July Snacks Thin and Crispy Organic Tortilla C...</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-xs text-gray-500">Late July</span>
                      <span className="text-xs bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full font-medium">Campbell&apos;s</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <span className="text-sm font-bold text-gray-900">58/100</span>
                        <span className="text-xs text-gray-400">Limit</span>
                      </div>
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Oliver Says */}
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#AEB93E] flex items-center justify-center">
                      <span className="text-white text-xs font-bold">O</span>
                    </div>
                    <span className="text-xs font-bold text-gray-900">Oliver Says:</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    &quot;This snack&apos;s score is primarily affected by the presence of organic sunflower oil and safflower oil, which are considered seed oils and can be less healthy for your family. While it does have some organic ingredients, the high level of seed oils suggests it&apos;s best to enjoy this treat only occasionally.&quot;
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-xs font-bold text-gray-900">Breakdown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}