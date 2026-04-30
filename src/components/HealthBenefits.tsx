'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const strausShelfImage = 'https://images.unsplash.com/photo-1571212515416-fca88ef90f02?w=700&q=80';
const olipopImage = 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=700&q=80';
const honeyMamasImage = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=80';
const strausPackshotImage = 'https://images.unsplash.com/photo-1570821473041-8af52fdcccf4?w=200&q=80';

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
  const nutritionalCardRef = useRef<HTMLDivElement>(null);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [hasAnimatedScore, setHasAnimatedScore] = useState(false);

  useEffect(() => {
    const targetNode = nutritionalCardRef.current;
    if (!targetNode || hasAnimatedScore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasAnimatedScore) return;

        setHasAnimatedScore(true);
        const target = 96;
        const durationMs = 1200;
        const startTime = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / durationMs, 1);
          // Ease-out so the count starts lively and settles into 96.
          const eased = 1 - (1 - progress) * (1 - progress);
          setAnimatedScore(Math.round(target * eased));

          if (progress < 1) {
            window.requestAnimationFrame(tick);
          }
        };

        window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(targetNode);
    return () => observer.disconnect();
  }, [hasAnimatedScore]);

  return (
    <div className="relative bg-[#F5FAF6]">
      {/* Dark green header */}
      <div className="bg-[#386641] px-4 pb-24 pt-14 md:pb-28 md:pt-20">
        <div className="flex max-w-4xl flex-col items-start justify-between gap-8 px-4 md:mx-auto md:flex-row md:px-0">
          <div className="flex relative items-center justify-center">
            <h2 className="font-sans max-w-[330px] font-[500] text-[2.15rem] leading-[1.18] tracking-[-0.02em] text-white md:text-[3rem]">
              Health Benefits of Using Olive
            </h2>
          </div>
          <div className="flex max-w-[300px] flex-col gap-4">
            <div className="max-w-sm text-[12px] leading-6 text-[#F5FAF6] md:text-[15px] md:leading-6">
              Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family&apos;s health.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full border bg-white px-3 py-1.5 text-[11px] font-medium text-[#386641] transition-all shadow-xs hover:bg-gray-50">

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
      <div className="-mt-12 flex flex-col gap-8 px-4 pb-24 md:-mt-10 md:px-8">
        {/* Card 1: Nutritional Clarity */}
        <div className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2 w-full shadow-sm">
          <div className="flex flex-col justify-between gap-4 p-4">
            <h3 className="font-sans max-w-xl text-[16px] font-[500] text-[#1F3824] md:text-[17px]">Achieve Nutritional Clarity</h3>
            <ul className="flex max-w-sm flex-col gap-3 self-start">
              {benefitSections[0].points.map((point, i) =>
              <li key={i} className="flex items-start gap-3 text-[#1F3824]">
                  <div className="w-4 flex-shrink-0 pt-0.5">
                    <CheckIcon className="h-4 w-4 text-[#1F3824]" />
                  </div>
                  <div className="text-[11px] leading-[1.7] md:text-[12px]">{point}</div>
                </li>
              )}
            </ul>
          </div>
          <div>
            <div className="bg-gradient-to-b from-[#EFF6F0] to-[#9DC8A3] rounded-2xl w-full w-[300px] h-[450px] md:w-[500px] md:h-[500px] overflow-hidden">
              {/* Stacked product images */}
              <div className="flex items-center justify-center pt-4">
                <div className="relative h-32 w-[7.5rem] overflow-hidden rounded-3xl border-2 border-white shadow-lg md:h-[12.5rem] md:w-40" style={{ transform: 'translateX(5rem) rotate(-12deg) scale(0.9)', zIndex: 1 }}>
                  <Image src={honeyMamasImage} alt="Honey Mamas product" fill className="object-cover" sizes="160px" />
                </div>
                <div className="relative z-20 h-32 w-[7.5rem] overflow-hidden rounded-3xl border-2 border-white shadow-xl md:h-[12.5rem] md:w-40">
                  <Image src={strausShelfImage} alt="Straus Ice Cream on shelf" fill className="object-cover" sizes="160px" />
                </div>
                <div className="relative h-32 w-[7.5rem] overflow-hidden rounded-3xl border-2 border-white shadow-lg md:h-[12.5rem] md:w-40" style={{ transform: 'translateX(-5rem) rotate(12deg) scale(0.9)', zIndex: 1 }}>
                  <Image src={olipopImage} alt="Olipop can" fill className="object-cover" sizes="160px" />
                </div>
              </div>
              {/* Score card */}
              <div ref={nutritionalCardRef} className="relative mx-auto mt-4 flex max-w-[82%] flex-row gap-3 rounded-2xl bg-white/70 px-4 py-3 backdrop-blur-sm">
                <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl">
                  <Image src={strausPackshotImage} alt="Straus Ice Cream packshot" width={44} height={44} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] font-semibold text-[#1F3824]">Straus Ice Cream</span>
                  <div className="flex gap-2 items-center">
                    <span className={`text-[13px] font-bold text-[#1F382499] transition-transform duration-300 ${hasAnimatedScore ? 'scale-100' : 'scale-110'}`}>
                      {animatedScore}/100
                    </span>
                    <span className="text-[11px] font-semibold text-[#1F382499]">Excellent</span>
                  </div>
                </div>
              </div>
              {/* Positives/Negatives */}
              <div className="flex flex-row w-full h-full justify-around p-4 pb-0 gap-4">
                <div className="flex flex-col gap-2 rounded-2xl w-full flex-1 bg-white/50 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <div className="flex w-full items-center justify-center gap-2 text-[12px] font-semibold text-[#50674E]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#50674E]">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </span>
                    Positives
                  </div>
                  <div className="grid grid-cols-12 grid-flow-row-dense w-full gap-1 p-2">
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-2 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-8 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-4 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-6 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-6 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-7 h-[1.688rem] rounded-md bg-white/60"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-2xl w-full flex-1 bg-white/50 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <div className="flex w-full items-center justify-center gap-2 text-[12px] font-semibold text-[#9A6A6A]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9A6A6A]">
                      <XIcon className="h-3 w-3 text-white" />
                    </span>
                    Negatives
                  </div>
                  <div className="grid grid-cols-12 grid-flow-row-dense w-full gap-1 p-2">
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-2 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-8 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-4 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-6 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-6 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60"></div>
                    <div className="col-span-7 h-[1.688rem] rounded-md bg-white/60"></div>
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
            <div className="bg-gradient-to-b overflow-hidden from-[#FFF0F0] to-[#FFC2D0] rounded-2xl w-full w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <div className="w-[150%] h-full mt-[2rem] md:mt-[5rem] ml-[-25%] -rotate-[15deg]">
                <div className="flex flex-col gap-8 w-full overflow-hidden py-4">
                  <div className="relative w-full h-[40px] flex items-center overflow-hidden">
                    <div className="flex items-center gap-4 animate-scroll-left" style={{ width: 'max-content' }}>
                      {[...positiveIngredients.slice(0, 7), ...positiveIngredients.slice(0, 7)].map((tag, i) => (
                        <div key={`pos-a-${i}`} className="shrink-0 mr-4">
                          <div className="flex items-center bg-black/10 p-3 rounded-full gap-2 whitespace-nowrap text-sm">
                            <CheckIcon className="w-6 h-6" />
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative w-full h-[40px] flex items-center overflow-hidden">
                    <div className="flex items-center gap-4 animate-scroll-right" style={{ width: 'max-content' }}>
                      {[...positiveIngredients.slice(7), ...positiveIngredients.slice(0, 5), ...positiveIngredients.slice(7), ...positiveIngredients.slice(0, 5)].map((tag, i) => (
                        <div key={`pos-b-${i}`} className="shrink-0 mr-4">
                          <div className="flex items-center bg-black/10 p-3 rounded-full gap-2 whitespace-nowrap text-sm">
                            <CheckIcon className="w-6 h-6" />
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative w-full h-[40px] flex items-center overflow-hidden">
                    <div className="flex items-center gap-4 animate-scroll-left" style={{ width: 'max-content' }}>
                      {[...negativeIngredients.slice(0, 7), ...negativeIngredients.slice(0, 7)].map((tag, i) => (
                        <div key={`neg-a-${i}`} className="shrink-0 mr-4">
                          <div className="flex items-center bg-black/10 p-3 rounded-full gap-2 whitespace-nowrap text-sm">
                            <XIcon className="w-6 h-6" />
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative w-full h-[40px] flex items-center overflow-hidden">
                    <div className="flex items-center gap-4 animate-scroll-right" style={{ width: 'max-content' }}>
                      {[...negativeIngredients.slice(7), ...negativeIngredients.slice(0, 5), ...negativeIngredients.slice(7), ...negativeIngredients.slice(0, 5)].map((tag, i) => (
                        <div key={`neg-b-${i}`} className="shrink-0 mr-4">
                          <div className="flex items-center bg-black/10 p-3 rounded-full gap-2 whitespace-nowrap text-sm">
                            <XIcon className="w-6 h-6" />
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative w-full h-[40px] flex items-center overflow-hidden">
                    <div className="flex items-center gap-4 animate-scroll-left" style={{ width: 'max-content' }}>
                      {[...positiveIngredients.slice(2), ...positiveIngredients.slice(2)].map((tag, i) => (
                        <div key={`pos-c-${i}`} className="shrink-0 mr-4">
                          <div className="flex items-center bg-black/10 p-3 rounded-full gap-2 whitespace-nowrap text-sm">
                            <CheckIcon className="w-6 h-6" />
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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