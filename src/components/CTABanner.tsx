'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
{
  src: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2940&auto=format&fit=crop',
  alt: 'Family shopping for healthy groceries'
},
{
  src: 'https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?q=80&w=2940&auto=format&fit=crop',
  alt: 'Mother reading food labels'
},
{
  src: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2940&auto=format&fit=crop',
  alt: 'Healthy food choices'
},
{
  src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2940&auto=format&fit=crop',
  alt: 'Family enjoying healthy meal'
}];


export default function CTABanner() {
  const [activeSlide, setActiveSlide] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides?.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:my-24 my-8 max-w-6xl mx-auto px-4 md:px-8">
      <div className="relative w-full bg-[#386641] rounded-[1rem] md:rounded-t-[3.5rem] md:rounded-b-[3.5rem] overflow-hidden">
        <div className="relative w-full bg-[#386641] rounded-[1rem] md:rounded-b-[50rem] overflow-hidden">
          <div className="h-[300px] md:h-[800px]">
            <div className="relative w-full h-full">
              {/* Slides */}
              <div className="absolute inset-0 w-full h-full">
                {slides?.map((slide, i) =>
                <div
                  key={i}
                  className="absolute inset-0 w-full h-full transition-opacity duration-1000"
                  style={{ opacity: activeSlide === i ? 1 : 0 }}>

                    <Image
                    src={slide?.src}
                    alt={slide?.alt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="100vw" />

                  </div>
                )}
              </div>
              {/* Dot indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides?.map((_, i) =>
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                  activeSlide === i ? 'bg-white w-4' : 'bg-white/50 w-2'}`
                  } />

                )}
              </div>
            </div>
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* CTA content */}
        <div className="relative py-24 inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Protect Your Family <br /> From Hidden Toxins
            </h1>
            <a
              href="https://signup.oliveapp.com/olive-onboarding/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full transition-all shadow-md px-6 md:px-8 py-4 md:py-5 text-base md:text-lg bg-white text-[#386641] hover:bg-gray-100 font-medium">

              Sign up for Olive today
            </a>
          </div>
        </div>
      </div>
    </div>);

}