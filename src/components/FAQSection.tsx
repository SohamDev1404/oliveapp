'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is the Food Scanner App and how does it work?',
    answer: 'The Olive Food Scanner App allows you to scan barcodes of food products to instantly get detailed ingredient analysis, health scores, and personalized recommendations. Simply open the app, point your camera at any barcode, and Olive will analyze the product against our comprehensive database of over 1 million products.',
  },
  {
    question: 'How does Olive ensure the accuracy of the Food Scanner App results?',
    answer: 'Olive uses a combination of expert nutritional guidelines, certified lab-testing data, and a continuously updated database to ensure accuracy. Our team of registered holistic health experts reviews and validates our scoring methodology regularly.',
  },
  {
    question: 'Which products can I scan with the Food Scanner App?',
    answer: 'You can scan virtually any packaged food product with a barcode. Our database contains over 1 million products and is constantly growing. If a product isn\'t in our database yet, we work to add it quickly.',
  },
  {
    question: "Can the Food Scanner App be customized to my family\'s dietary needs?",
    answer: 'Yes! Olive allows you to set dietary preferences and restrictions for your family. You can flag specific ingredients to avoid, set allergen alerts, and customize recommendations based on your family\'s unique health goals.',
  },
  {
    question: 'Is my data secure when I use the Olive?',
    answer: 'Absolutely. We take data privacy very seriously. We never sell your personal data to third parties, and we never monetize through brand deals or affiliate links. Your data is encrypted and stored securely.',
  },
  {
    question: 'When will the Android version of the Food Scanner App be available?',
    answer: 'We are actively working on the Android version of Olive. Sign up for our newsletter to be notified when it becomes available. We expect to launch on Android in the near future.',
  },
];

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="none" viewBox="0 0 41 41" className="w-6 h-6 text-[#386641]">
    <g>
      <path fill="#1F3824" d="M8.715 8.688a16.667 16.667 0 1 1 23.568 23.568A16.666 16.666 0 0 1 8.717 8.69l-.002-.002Zm13.452 6.785a1.667 1.667 0 0 0-3.334 0v3.333H15.5a1.667 1.667 0 1 0 0 3.334h3.333v3.333a1.667 1.667 0 0 0 3.334 0V22.14H25.5a1.667 1.667 0 0 0 0-3.334h-3.333v-3.333Z"/>
    </g>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="none" viewBox="0 0 41 41" className="w-6 h-6 text-[#386641]">
    <g>
      <path fill="#1F3824" d="M8.715 8.688a16.667 16.667 0 1 1 23.568 23.568A16.666 16.666 0 0 1 8.717 8.69l-.002-.002Zm5.118 10.785a1.667 1.667 0 1 0 0 3.334h13.334a1.667 1.667 0 0 0 0-3.334H13.833Z"/>
    </g>
  </svg>
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="md:my-24 my-8 max-w-6xl mx-auto px-4 md:px-8">
      <section className="w-full bg-[#FFF9EB] rounded-[1rem] md:rounded-[3.5rem] overflow-hidden">
        <div className="py-24 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center relative items-center mb-12">
              <h2 className="font-sans text-[#1F3824] max-w-xl font-[500] text-2xl md:text-[3.2rem] text-center">
                Frequently Asked Questions by Parents
              </h2>
            </div>

            <div className="flex justify-center mb-12">
              <a
                href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all bg-[#1F3824] text-white shadow-md hover:bg-[#1F3824]/90 px-6 py-3 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z"/>
                  <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z"/>
                </svg>
                Download for iOS
              </a>
            </div>

            <div className="space-y-2 my-8">
              {faqs?.map((faq, i) => (
                <div key={i} className="border-b border-[#386641]/10 p-6 py-2">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <h3 className="text-lg font-medium text-[#1F3824] pr-4">{faq?.question}</h3>
                    <span className="ml-4 flex-shrink-0">
                      {openIndex === i ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                  {openIndex === i && (
                    <div className="pb-4 text-[#1F3824]/70 text-sm leading-relaxed">
                      {faq?.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
