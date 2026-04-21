'use client';
import React from 'react';

export default function IndependentSection() {
  return (
    <div className="md:my-40 my-16 max-w-none mx-auto px-4 md:px-8">
      <div className="flex xl:items-start xl:justify-start flex-col max-w-7xl mx-auto">
        <div className="flex relative text-[#1F3824] items-start justify-start">
          <h2 className="font-sans text-center text-[#FF9DB4] font-bold text-3xl md:text-6xl xl:text-9xl max-w-none">
            100% Independent.
          </h2>
        </div>
        <div className="flex md:flex-row flex-col items-start md:items-end gap-2 md:gap-10 w-full flex-1">
          <p className="md:text-6xl xl:text-9xl text-center text-[#FF9DB4] font-bold text-3xl max-w-none">
            Always.
          </p>
          <p className="text-xl md:text-base xl:text-3xl font-bold text-[#386641]">
            We{' '}
            <span className="text-[#AEB93E]">never monetize</span>
            {' '}through brand deals, affiliate links, or ads — so
            <span className="text-[#AEB93E]"> you can trust</span> our{' '}
            <span className="text-[#AEB93E]">recommendations</span>
            {' '}are always aligned with our users.
          </p>
        </div>
      </div>
    </div>
  );
}
