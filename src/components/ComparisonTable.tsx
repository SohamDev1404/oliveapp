'use client';
import React from 'react';

const CheckIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"/>
  </svg>
);

const XIcon = ({ className = '' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 45 45" fill="none" className={className}>
    <path fill="#DE1919" d="M16.621 11.237a3.949 3.949 0 0 0-4.81 6.189l5.103 5.106-5.103 5.106-.327.371a3.948 3.948 0 0 0 5.911 5.213l5.107-5.102 5.106 5.102.371.328a3.95 3.95 0 0 0 5.213-5.912l-5.102-5.106 5.102-5.106.328-.372a3.948 3.948 0 0 0-5.912-5.212l-5.106 5.102-5.107-5.102-.37-.328-.404-.277Z"/>
  </svg>
);

const OliveAppIcon = () => (
  <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <rect width="52" height="52" rx="26" fill="#253612"/>
      <path d="M22.1953 12.4453C23.8677 14.3436 24.9468 15.7801 25.4418 18.6644" stroke="#B47E54" strokeWidth="2.73746" strokeLinecap="round"/>
      <path d="M36.0838 65.4775C9.79666 71.5984 0.367742 24.6086 25.2201 18.8218C50.0726 13.035 62.3709 59.3567 36.0838 65.4775Z" fill="#AEB93E"/>
      <path d="M49.5669 36.6962C52.6946 50.1289 50.5283 62.1133 36.078 65.478C29.9772 66.8986 25.1621 65.9733 21.399 63.4193C25.5664 64.2071 31.1859 64.5379 36.8407 62.6748C42.4955 60.8116 50.7364 56.5882 49.5669 36.6962Z" fill="black" fillOpacity="0.17"/>
      <path d="M36.1768 -0.776715C35.0394 -2.02475 29.1307 -0.94848 26.2378 1.53753C23.3452 4.02349 22.7647 8.45598 23.8434 12.0203C25.8939 12.1434 28.4453 12.1496 32.0979 9.50851C35.7503 6.86743 37.1925 1.18029 36.1768 -0.776715Z" fill="#AEB93E"/>
      <path d="M33.8919 1.24249C33.9897 0.456609 29.1134 7.70203 24.1195 10.8909C24.1195 10.8909 28.0415 9.22158 29.9985 7.00571C31.9553 4.79011 33.7188 2.63147 33.8919 1.24249Z" fill="#8F9838"/>
      <path d="M21.32 34.5697C25.2881 33.6457 26.8614 40.4022 22.8932 41.3261C18.9249 42.2501 17.3517 35.4937 21.32 34.5697Z" fill="#2D2D2D"/>
      <path d="M35.6792 31.2279C39.6476 30.3039 41.2208 37.0604 37.2524 37.9844C33.2843 38.9083 31.7111 32.1519 35.6792 31.2279Z" fill="#2D2D2D"/>
      <path d="M27.8485 39.9734C28.6125 40.6384 29.3719 40.8326 30.3614 40.6161C31.4276 40.3827 32.0923 39.799 32.4614 38.7719" stroke="#2D2D2D" strokeWidth="1.14061" strokeLinecap="round"/>
      <path d="M23.4435 36.7732C23.908 36.6651 24.1968 36.2009 24.0887 35.7364C23.9805 35.272 23.5163 34.9832 23.0519 35.0913C22.5874 35.1994 22.2986 35.6636 22.4068 36.1281C22.5149 36.5925 22.9791 36.8813 23.4435 36.7732Z" fill="#D9D9D9"/>
      <path d="M37.8185 33.4265C38.283 33.3184 38.5718 32.8542 38.4637 32.3898C38.3555 31.9253 37.8913 31.6365 37.4269 31.7446C36.9624 31.8528 36.6736 32.3169 36.7818 32.7814C36.8899 33.2458 37.3541 33.5347 37.8185 33.4265Z" fill="#D9D9D9"/>
    </g>
    <defs>
      <clipPath id="clip0"><rect width="52" height="52" rx="26" fill="white"/></clipPath>
    </defs>
  </svg>
);

const features = [
  { label: 'Detailed Product Breakdown', olive: true, app1: true, app2: true },
  { label: 'Comprehensive Water Data', olive: true, app1: false, app2: false },
  { label: 'Seed Oil Free Dining Map', olive: true, app1: false, app2: false },
  { label: 'Seed Oil Flagging', olive: true, app1: false, app2: true },
  { label: 'Certified Lab-Testing Data', olive: true, app1: false, app2: false },
];

export default function ComparisonTable() {
  return (
    <div id="features" className="md:my-24 my-8 max-w-6xl px-4 md:px-8 mx-auto">
      <div className="bg-[#386641] text-white rounded-3xl p-8 md:p-12">
        <div className="text-center flex flex-col items-center gap-4 mb-12">
          <h2 className="font-sans max-w-xl font-[500] text-2xl md:text-[3.2rem] text-white">
            Olive Food Scanner App vs. The Rest
          </h2>
          <a
            href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all border bg-white text-[#386641] shadow-xs hover:bg-gray-50 px-6 py-3 text-sm md:text-base mt-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z"/>
              <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z"/>
            </svg>
            Download for iOS
          </a>
        </div>

        {/* App icons header */}
        <div className="grid grid-cols-6 gap-4 py-4 md:py-12 md:mb-8 mb-4">
          <div className="col-span-3"></div>
          <div className="flex items-center col-span-1 justify-center">
            <OliveAppIcon />
          </div>
          <div className="flex items-center col-span-1 justify-center">
            {/* Yuka-like icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 53 55">
              <path fill="#FF8C38" d="M44.434 27.64 28.888 12.914a5.019 5.019 0 0 0-7.676.998l-1.907 3.2 9.8 9.283a1.128 1.128 0 0 1 0 1.659 1.288 1.288 0 0 1-1.753 0l-9.309-8.819L6.934 37.918l5.25 4.973a1.128 1.128 0 0 1 0 1.659 1.288 1.288 0 0 1-1.751 0l-4.761-4.51-4.518 7.593c-2.416 4.061 2.33 8.565 6.617 6.276l19.298-10.297-7.244-6.861a1.128 1.128 0 0 1 0-1.659 1.288 1.288 0 0 1 1.752 0l7.732 7.325 14.064-7.506a4.474 4.474 0 0 0 1.051-7.27"/>
              <path fill="#25D265" d="m39.862 18.582-2.153-2.145 5.756-14.923a1.663 1.663 0 1 1 3.102 1.197l-4.401 11.41 8.032-3.127a1.663 1.663 0 1 1 1.206 3.098l-11.542 4.49Z"/>
            </svg>
          </div>
          <div className="flex items-center col-span-1 justify-center">
            {/* Open Food Facts-like icon */}
            <div className="w-12 h-12 rounded-full bg-[#F5FAF6] flex items-center justify-center text-[#386641] font-bold text-xs">OFF</div>
          </div>
        </div>

        {/* Feature rows */}
        <div className="space-y-0">
          {features.map((feature, i) => (
            <div key={i} className="grid grid-cols-6 gap-4 items-center py-4 md:py-6 border-b border-white/20 last:border-none">
              <div className="col-span-3 text-base md:text-lg font-[500]">{feature.label}</div>
              <div className="col-span-1 flex justify-center">
                {feature.olive ? <CheckIcon className="w-10 h-10 text-[#AEB93E]" /> : <XIcon className="w-10 h-10" />}
              </div>
              <div className="col-span-1 flex justify-center">
                {feature.app1 ? <CheckIcon className="w-10 h-10 text-[#AEB93E]" /> : <XIcon className="w-10 h-10" />}
              </div>
              <div className="col-span-1 flex justify-center">
                {feature.app2 ? <CheckIcon className="w-10 h-10 text-[#AEB93E]" /> : <XIcon className="w-10 h-10" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
