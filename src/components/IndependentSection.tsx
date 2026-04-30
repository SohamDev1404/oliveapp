'use client';
import React from 'react';

export default function IndependentSection() {
  return (
    <section className="my-12 md:my-20 mx-auto px-4 md:px-6">
      <div className="mx-auto grid w-full max-w-[1120px] gap-3 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-8">
        <div className="leading-[0.9] text-[#FF9DB4]">
          <h2 className="font-sans text-5xl font-bold md:text-[6.2rem]">
            100% Independent.
          </h2>
          <p className="font-sans text-5xl font-bold md:text-[6.2rem]">
            Always.
          </p>
        </div>
        <p className="max-w-[36rem] text-lg font-bold leading-[1.3] text-[#386641] md:pb-3 md:text-[2.05rem] md:leading-[1.14]">
          We <span className="text-[#AEB93E]">never monetize</span> through brand deals, affiliate links, or ads
          {' '}-- so <span className="text-[#AEB93E]">you can trust</span> our <span className="text-[#AEB93E]">recommendations</span> are always
          aligned with our users.
        </p>
      </div>
    </section>
  );
}
