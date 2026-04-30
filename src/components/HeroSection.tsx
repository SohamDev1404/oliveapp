'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const avatars = [
{ src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', alt: 'User 1' },
{ src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', alt: 'User 2' },
{ src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', alt: 'User 3' },
{ src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60', alt: 'User 4' }];

const featuredProducts = [
  {
    src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=900&q=80',
    alt: 'Fig and olive crackers',
    title: 'Fig and Olive Crackers, Fig and Olive',
    brand: 'Lesley Stowe',
    subBrand: '',
    score: 46,
    verdict: 'Avoid',
    accent: 'bg-red-400',
    icon: '🥒',
    insight:
      "This product's low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family's health when consumed frequently. Additionally, there are several additives that aren't ideal for your goal of avoiding processed foods, making this a choice to consider more carefully.",
  },
  {
    src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=900&q=80',
    alt: 'Fresh grocery basket',
    title: 'Fresh Veggie Snack Box with Fruit and Hummus',
    brand: 'Daily Harvest',
    subBrand: 'Independent',
    score: 91,
    verdict: 'Great',
    accent: 'bg-emerald-500',
    icon: '🥬',
    insight:
      'This option scores well because it leans on whole foods, fiber-rich produce, and a short ingredient list without heavily refined oils.',
  },
  {
    src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=900&q=80',
    alt: 'Sparkling water can',
    title: 'Lime Sparkling Water with Natural Citrus Flavor',
    brand: 'Spindrift',
    subBrand: '',
    score: 84,
    verdict: 'Good',
    accent: 'bg-lime-500',
    icon: '🍋',
    insight:
      'This drink remains a solid pick because it has simple ingredients and no added sweeteners, though natural flavors keep it from a near-perfect score.',
  },
];


export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % featuredProducts.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const activeProduct = featuredProducts[activeSlide];
  const previousProduct = featuredProducts[(activeSlide + featuredProducts.length - 1) % featuredProducts.length];
  const nextProduct = featuredProducts[(activeSlide + 1) % featuredProducts.length];

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
        {/* Phone frame */}
        <div
          className="relative mx-auto"
          style={{
            width: '280px',
            transform: 'translateY(0)',
            transition: 'none'
          }}>

          {/* Carousel cards emerging from phone */}
          <div className="pointer-events-none absolute inset-x-[-120px] top-[92px] flex items-center justify-between">
            <div className="relative h-[82px] w-[82px] overflow-hidden rounded-[22px] opacity-20 blur-[0.2px]">
              <Image
                key={`${previousProduct.title}-left`}
                src={previousProduct.src}
                alt={previousProduct.alt}
                fill
                className="object-cover"
                sizes="82px" />
            </div>
            <div className="relative h-[82px] w-[82px] overflow-hidden rounded-[22px] opacity-20 blur-[0.2px]">
              <Image
                key={`${nextProduct.title}-right`}
                src={nextProduct.src}
                alt={nextProduct.alt}
                fill
                className="object-cover"
                sizes="82px" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-[-185px] top-[118px] flex items-center justify-between">
            <div className="relative h-[64px] w-[64px] overflow-hidden rounded-[18px] opacity-10">
              <Image
                src={featuredProducts[(activeSlide + featuredProducts.length - 2) % featuredProducts.length].src}
                alt={featuredProducts[(activeSlide + featuredProducts.length - 2) % featuredProducts.length].alt}
                fill
                className="object-cover"
                sizes="64px" />
            </div>
            <div className="relative h-[64px] w-[64px] overflow-hidden rounded-[18px] opacity-10">
              <Image
                src={featuredProducts[(activeSlide + 2) % featuredProducts.length].src}
                alt={featuredProducts[(activeSlide + 2) % featuredProducts.length].alt}
                fill
                className="object-cover"
                sizes="64px" />
            </div>
          </div>

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
            className="relative rounded-[40px] bg-gradient-to-b from-[#d8d8d8] to-[#cfcfcf] p-[12px]"
            style={{
              height: '560px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.65)',
              transform: 'perspective(1000px) rotateX(5deg)'
            }}>
            <div className="relative h-full overflow-hidden rounded-[32px] bg-white">
              {/* Dynamic Island / Notch */}
              <div className="flex justify-center pt-4 pb-2">
                <div className="bg-black h-6 w-24 rounded-full flex items-center justify-end pr-2">
                  <div className="h-4 w-4 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.04)_72%,rgba(255,255,255,0.16)_100%)]"></div>
                </div>
              </div>

              {/* App Screen Content */}
              <div className="flex h-[512px] flex-col bg-white pb-6">
              {/* Product image carousel area */}
              <div className="relative h-[184px] overflow-hidden bg-white">
                <div className="absolute inset-x-0 top-4 flex items-start justify-center gap-3">
                  <div className="relative mt-6 h-[64px] w-[64px] overflow-hidden rounded-[18px] opacity-25">
                    <Image
                      src={previousProduct.src}
                      alt={previousProduct.alt}
                      fill
                      className="object-cover"
                      sizes="64px" />
                  </div>
                  <div className="relative h-[96px] w-[96px] overflow-hidden rounded-[24px] shadow-sm transition-all duration-500 ease-out">
                    <Image
                      key={activeProduct.title}
                      src={activeProduct.src}
                      alt={activeProduct.alt}
                      fill
                      className="object-cover"
                      sizes="96px" />
                  </div>
                  <div className="relative mt-6 h-[64px] w-[64px] overflow-hidden rounded-[18px] opacity-25">
                    <Image
                      src={nextProduct.src}
                      alt={nextProduct.alt}
                      fill
                      className="object-cover"
                      sizes="64px" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 rounded-t-[28px] bg-white px-5 pt-5 pb-0">
                  <div className="mx-auto mb-4 h-1 w-7 rounded-full bg-gray-200"></div>
                  <div className="flex items-start gap-3">
                    <div className="h-[72px] w-[40px] rounded-[10px] overflow-hidden flex-shrink-0 shadow-sm">
                      <Image
                        src={activeProduct.src}
                        alt={activeProduct.alt}
                        width={40}
                        height={72}
                        className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="pr-2 text-[15px] font-semibold text-gray-900 leading-[1.15]">
                        {activeProduct.title.length > 44 ? `${activeProduct.title.slice(0, 44)}...` : activeProduct.title}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <p className="text-sm text-gray-500">{activeProduct.brand}</p>
                        {activeProduct.subBrand ?
                        <span className="rounded-full bg-[#F7E7E3] px-2 py-0.5 text-[11px] font-medium text-[#B45E4E]">
                            {activeProduct.subBrand}
                          </span> : null}
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <div className={`h-2.5 w-2.5 rounded-full ${activeProduct.accent}`}></div>
                            <span className="text-[15px] font-semibold text-gray-900">{activeProduct.score}/100</span>
                          </div>
                          <p className="ml-4 mt-0.5 text-[12px] text-gray-500">{activeProduct.verdict}</p>
                        </div>
                        <div className="flex gap-4 pt-1 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product info card */}
              <div className="flex-1 px-4 pt-3">
                {/* Oliver Says */}
                <div
                  key={`insight-${activeProduct.title}`}
                  className="animate-slide-up rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF5D1] text-sm">
                      <span>{activeProduct.icon}</span>
                    </div>
                    <span className="text-[13px] font-bold text-gray-900">Oliver Says:</span>
                  </div>
                  <p className="line-clamp-6 text-[11px] text-gray-600 leading-[1.55]">
                    &quot;{activeProduct.insight}&quot;
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
      </div>
    </div>);

}