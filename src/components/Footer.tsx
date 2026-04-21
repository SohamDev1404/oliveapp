'use client';
import React, { useState } from 'react';

const OliveFooterLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="112" height="56" fill="none">
    <path fill="#AEB93E" d="M67.292 29.114c-.83-.261-6.12 2.482-6.4 3.606-.282 1.124 9.844 21.566 10.817 21.996.973.43 4.86.382 5.319 0 .459-.382 10.975-20.863 10.632-21.996-.342-1.133-5.433-4.947-7.083-3.606-1.65 1.342-6.614 13.342-6.614 13.342s-5.841-13.08-6.671-13.342Z"/>
    <path fill="#AEB93E" fillRule="evenodd" d="M99.232 44.531c-1.098-.02-2.097-.038-2.885-.038 0 .713.406 1.968 3.232 2.52 1.891.369 4.485-.33 6.195-.79.846-.229 1.476-.398 1.697-.351.665.142 3.803 4.183 2.662 6.37-1.141 2.187-14.12 4.992-19.158-.57-5.04-5.562-5.135-12.598-1.712-17.352S96.87 28.9 99.96 28.9c3.089 0 6.914.507 10.173 4.612 3.258 4.105.387 10.366-.856 10.696-1.785.474-6.446.389-10.045.323Zm-2.886-4.65c.27-1.077 1.433-3.047 3.899-3.232 3.15-.236 2.815 1.934 2.639 3.071l-.025.162h-6.513Z" clipRule="evenodd"/>
    <path fill="#AEB93E" d="M42.507 16.645c-.5-.957-7.223-.066-7.597.559-.373.624.873 36.325 1.104 36.684.232.359 12.586.303 12.963 0 .378-.303.474-6.344 0-6.906-.473-.563-5.898-.56-5.898-.56s-.073-28.82-.572-29.777Z"/>
    <path fill="#AEB93E" d="M58.66 30.517c-1.105-.814-6.569-1.104-7.673 0-1.105 1.105-.698 21.857 0 23.077.697 1.221 6.568.93 7.673 0 1.104-.93 1.104-22.263 0-23.077ZM58.66 18.296c-1.105-.814-6.569-1.105-7.673 0-1.105 1.104-.698 6.874 0 8.094.697 1.221 6.568.93 7.673 0 1.104-.93 1.104-7.28 0-8.094Z"/>
    <path stroke="#B47E54" strokeLinecap="round" strokeWidth="2.289" d="M15.293 9.588c1.002 1.863 1.609 3.238 1.465 5.681"/>
    <path fill="#AEB93E" d="M16.541 55.417c-22.573 0-21.34-40.065 0-40.065 21.342 0 22.574 40.065 0 40.065Z"/>
    <path fill="#000" fillOpacity="0.17" d="M32.987 34.531c0 11.535-4.037 20.886-16.446 20.886-5.239 0-8.986-1.667-11.566-4.46 3.245 1.431 7.76 2.767 12.719 2.322 4.96-.446 12.473-2.323 15.293-18.748Z"/>
    <path fill="#AEB93E" d="M29.187 1.47c-.69-1.232-5.707-1.476-8.535 0-2.827 1.476-4.14 4.977-3.938 8.085 1.647.489 3.724.978 7.2-.48 3.476-1.46 5.73-5.818 5.273-7.605Z"/>
    <path fill="#8F9838" d="M26.942 2.683c.23-.621-5.117 4.356-9.79 6.006 0 0 3.512-.616 5.526-2.05 2.014-1.433 3.86-2.857 4.264-3.956Z"/>
    <path fill="#2D2D2D" d="M10.377 27.439c3.408 0 3.408 5.801 0 5.801s-3.408-5.802 0-5.802ZM22.705 27.439c3.408 0 3.408 5.801 0 5.801-3.322 0-3.43-5.802 0-5.802Z"/>
    <path stroke="#2D2D2D" strokeLinecap="round" strokeWidth="0.954" d="M14.669 33.078c.917 1.407 3.15 1.315 3.985-.103"/>
    <path fill="#D9D9D9" d="M11.692 29.636a.722.722 0 1 0 0-1.444.722.722 0 0 0 0 1.444ZM24.035 29.636a.722.722 0 1 0 0-1.444.722.722 0 0 0 0 1.444Z"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="md:mt-24 mt-8 2xl:max-w-7xl mx-auto pt-24 pb-8 px-4 md:px-8">
      <footer className="w-full bg-[#386641] text-white rounded-[1rem] md:rounded-[3.5rem]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            {/* Explore Tools */}
            <div className="md:col-span-4">
              <h3 className="text-lg font-medium mb-4">Explore More Olive Tools</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Explore Foods', href: '/foods' },
                  { label: 'Allergy Scanner App', href: '/allergy-scanner-app' },
                  { label: 'Gluten Free Scanner', href: '/gluten-free-scanner' },
                  { label: 'Dairy Free App', href: '/dairy-free-app' },
                  { label: 'Food Ingredient Checker', href: '/food-ingredient-checker' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/80 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div className="md:col-span-4">
              <h3 className="text-lg font-medium mb-4">About</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Blog', href: '/blogs' },
                  { label: 'Email us', href: 'mailto:contact@oliveapp.com' },
                  { label: 'Contact us', href: '/support' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/80 hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-4">
              <OliveFooterLogo />
              <p className="text-white/80 mb-4 mt-4">
                Get the latest lab testing data sent directly to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col lg:flex-row gap-2 w-full">
                <input
                  type="email"
                  placeholder="Enter Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all border bg-white text-[#386641] shadow-xs hover:bg-gray-50 px-6 py-3 text-base"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
            <div className="flex gap-6 mb-4 md:mb-0">
              {[
                { label: 'Terms of Service', href: '/terms-of-service' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Sign in', href: '/sign-in' },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-white/80 text-sm">&copy; 2026 Olive Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
