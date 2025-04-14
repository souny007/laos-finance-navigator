
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="bg-orange-500 text-white p-1.5 rounded">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6.5H21M3 12H21M3 17.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-gray-900">Laos Finance</span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#contact" className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors">
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-orange-50 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-orange-50 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-orange-50 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-orange-50 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-orange-500 text-white hover:bg-orange-600 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
