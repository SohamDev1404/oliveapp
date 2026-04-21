'use client';
import React from 'react';
import Image from 'next/image';

const CheckIcon = ({ className = '' }: {className?: string;}) =>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
  </svg>;


const XIcon = ({ className = '' }: {className?: string;}) =>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-6.489 5.8a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z" />
  </svg>;


const positiveIngredients = [
'Cholesterol-Free', 'High Fibre', 'No MSG', 'Organic Ingredients', 'Low PFAS', 'Plant-Based', 'Gluten-Free',
'100% Whole Grain', 'Non-GMO', 'Rich in Antioxidants'];


const negativeIngredients = [
'Artificial Colors', 'Sodium Nitrite', 'TBHQ', 'Monosodium Glutamate', 'Potassium Sorbate', 'BHA', 'Carrageenan',
'Potassium Bromate', 'Aspartame', 'Saccharin', 'Palm Oil', 'Sodium Benzoate', 'Xanthan Gum'];


const benefitSections = [
{
  title: 'Achieve Nutritional Clarity',
  points: [
  'Olive breaks down every ingredient into clear, actionable information.',
  'Olive scores products out of 100 based on additives, seedoils, processing level, and detected toxins.',
  'Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.'],

  visual: 'nutritional'
},
{
  title: 'Proactive Ingredient Filtering',
  points: [
  'Olive flags harmful additives and controversial ingredients before they become mainstream concerns.',
  'Keeps you ahead of potential food safety concerns.',
  'Gives busy parents the confidence to make safer food choices every time.'],

  visual: 'filtering'
},
{
  title: 'Real Health Outcomes for Your Family',
  points: [
  'Empowers parents to feel more in control of their family\'s health.',
  'Delivers personalized suggestions for healthier food choices.',
  'Promotes long-term well-being through informed, balanced decisions.'],

  visual: 'family'
}];


export default function HealthBenefits() {
  return (
    <div className="relative bg-[#F5FAF6]">
      {/* Dark green header */}
      <div className="pb-24 md:py-48 bg-[#386641] px-4">
        <div className="flex flex-col md:flex-row p-8 md:p-0 justify-between max-w-5xl mx-auto items-start gap-10">
          <div className="flex relative items-center justify-center">
            <h2 className="font-sans max-w-xl font-[500] text-2xl md:text-[3.2rem] text-white">
              Health Benefits of Using Olive
            </h2>
          </div>
          <div className="flex gap-6 flex-col">
            <div className="max-w-sm md:text-xl text-sm text-[#F5FAF6]">
              Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family&apos;s health.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all border bg-white text-[#386641] shadow-xs hover:bg-gray-50 px-4 py-2.5 text-sm">

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
                  <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
                </svg>
                Download for iOS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefit cards */}
      <div className="-mt-24 flex flex-col px-4 md:px-8 pb-24 gap-8">
        {/* Card 1: Nutritional Clarity */}
        <div className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2 w-full shadow-sm">
          <div className="flex flex-col gap-4 justify-between p-4">
            <h3 className="font-sans text-[#1F3824] max-w-xl font-[500] text-xl md:text-3xl">Achieve Nutritional Clarity</h3>
            <ul className="flex flex-col gap-3 max-w-sm self-start">
              {benefitSections[0].points.map((point, i) =>
              <li key={i} className="flex items-start gap-4 text-[#1F3824]">
                  <div className="w-6 flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-[#1F3824]" />
                  </div>
                  <div className="md:text-lg text-sm">{point}</div>
                </li>
              )}
            </ul>
          </div>
          <div>
            <div className="bg-gradient-to-b from-[#EFF6F0] to-[#9DC8A3] rounded-2xl w-full h-[350px] md:h-[450px] overflow-hidden">
              {/* Stacked product images */}
              <div className="flex items-center justify-center pt-6">
                <div className="relative w-28 h-36 rounded-3xl overflow-hidden border-2 border-white shadow-lg" style={{ transform: 'translateX(60px) rotate(-12deg) scale(0.9)', zIndex: 1 }}>
                  <Image src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&q=80" alt="Product" fill className="object-cover" sizes="112px" />
                </div>
                <div className="relative w-28 h-36 rounded-3xl overflow-hidden border-2 border-white shadow-xl" style={{ zIndex: 3 }}>
                  <Image src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&q=80" alt="Straus Ice Cream" fill className="object-cover" sizes="112px" />
                </div>
                <div className="relative w-28 h-36 rounded-3xl overflow-hidden border-2 border-white shadow-lg" style={{ transform: 'translateX(-60px) rotate(12deg) scale(0.9)', zIndex: 1 }}>
                  <Image src="https://images.unsplash.com/photo-1559181567-c3190bba0ade?w=200&q=80" alt="Product" fill className="object-cover" sizes="112px" />
                </div>
              </div>
              {/* Score card */}
              <div className="px-4 py-3 bg-white/50 relative flex flex-row gap-4 mx-auto max-w-[90%] mt-6 rounded-2xl">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100&q=80" alt="Straus Ice Cream" width={64} height={64} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base text-[#1F3824]">Straus Ice Cream</span>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-lg text-[#1F382499]">92/100</span>
                    <span className="font-semibold text-sm text-[#1F382499]">Excellent</span>
                  </div>
                </div>
              </div>
              {/* Positives/Negatives */}
              <div className="flex flex-row w-full justify-around p-4 pb-0 gap-4">
                <div className="flex flex-col gap-2 rounded-2xl w-full flex-1 bg-white/50 p-3">
                  <div className="font-semibold text-sm w-full justify-center flex items-center gap-1 text-[#1F3824CC]">
                    <CheckIcon className="w-4 h-4" />
                    Positives
                  </div>
                  <div className="grid grid-cols-12 gap-1">
                    {[5, 5, 2, 8, 4, 6, 6, 5, 7].map((span, i) =>
                    <div key={i} className={`col-span-${span} h-5 rounded-md bg-white/60`}></div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-2xl w-full flex-1 bg-white/50 p-3">
                  <div className="font-semibold text-sm w-full justify-center flex items-center gap-1 text-[#7A4343CC]">
                    <XIcon className="w-4 h-4" />
                    Negatives
                  </div>
                  <div className="grid grid-cols-12 gap-1">
                    {[5, 5, 2, 8, 4, 6, 6, 5, 7].map((span, i) =>
                    <div key={i} className={`col-span-${span} h-5 rounded-md bg-white/60`}></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Proactive Ingredient Filtering */}
        <div className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2 w-full shadow-sm">
          <div className="flex flex-col gap-4 justify-between p-4">
            <h3 className="font-sans text-[#1F3824] max-w-xl font-[500] text-xl md:text-3xl">Proactive Ingredient Filtering</h3>
            <ul className="flex flex-col gap-3 max-w-sm self-start">
              {benefitSections[1].points.map((point, i) =>
              <li key={i} className="flex items-start gap-4 text-[#1F3824]">
                  <div className="w-6 flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-[#1F3824]" />
                  </div>
                  <div className="md:text-lg text-sm">{point}</div>
                </li>
              )}
            </ul>
          </div>
          <div>
            <div className="bg-gradient-to-b overflow-hidden from-[#FFF0F0] to-[#FFC2D0] rounded-2xl w-full h-[300px] md:h-[400px]">
              <div className="w-[150%] h-full mt-8 md:mt-16 ml-[-25%] -rotate-[15deg] flex flex-col gap-6 overflow-hidden py-4">
                {/* Positive tags row */}
                <div className="flex gap-3 animate-scroll-left" style={{ width: 'max-content' }}>
                  {[...positiveIngredients, ...positiveIngredients].map((tag, i) =>
                  <div key={i} className="shrink-0">
                      <div className="flex items-center bg-black/10 px-3 py-2 rounded-full gap-2 whitespace-nowrap text-sm">
                        <CheckIcon className="w-4 h-4" />
                        {tag}
                      </div>
                    </div>
                  )}
                </div>
                {/* Negative tags row */}
                <div className="flex gap-3 animate-scroll-right" style={{ width: 'max-content' }}>
                  {[...negativeIngredients, ...negativeIngredients].map((tag, i) =>
                  <div key={i} className="shrink-0">
                      <div className="flex items-center bg-black/10 px-3 py-2 rounded-full gap-2 whitespace-nowrap text-sm">
                        <XIcon className="w-4 h-4" />
                        {tag}
                      </div>
                    </div>
                  )}
                </div>
                {/* More positive tags */}
                <div className="flex gap-3 animate-scroll-left" style={{ width: 'max-content' }}>
                  {[...positiveIngredients.slice(3), ...positiveIngredients.slice(3)].map((tag, i) =>
                  <div key={i} className="shrink-0">
                      <div className="flex items-center bg-black/10 px-3 py-2 rounded-full gap-2 whitespace-nowrap text-sm">
                        <CheckIcon className="w-4 h-4" />
                        {tag}
                      </div>
                    </div>
                  )}
                </div>
                {/* More negative tags */}
                <div className="flex gap-3 animate-scroll-right" style={{ width: 'max-content' }}>
                  {[...negativeIngredients.slice(4), ...negativeIngredients.slice(4)].map((tag, i) =>
                  <div key={i} className="shrink-0">
                      <div className="flex items-center bg-black/10 px-3 py-2 rounded-full gap-2 whitespace-nowrap text-sm">
                        <XIcon className="w-4 h-4" />
                        {tag}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Real Health Outcomes */}
        <div className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2 w-full shadow-sm">
          <div className="flex flex-col gap-4 justify-between p-4">
            <h3 className="font-sans text-[#1F3824] max-w-xl font-[500] text-xl md:text-3xl">Real Health Outcomes for Your Family</h3>
            <ul className="flex flex-col gap-3 max-w-sm self-start">
              {benefitSections[2].points.map((point, i) =>
              <li key={i} className="flex items-start gap-4 text-[#1F3824]">
                  <div className="w-6 flex-shrink-0">
                    <CheckIcon className="w-6 h-6 text-[#1F3824]" />
                  </div>
                  <div className="md:text-lg text-sm">{point}</div>
                </li>
              )}
            </ul>
          </div>
          <div>
            <div className="bg-gray-100 rounded-2xl w-full h-[300px] md:h-[400px] overflow-hidden">
              <div
                className="w-full h-full object-cover mix-blend-darken rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80')" }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}