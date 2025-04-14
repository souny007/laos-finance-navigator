
import React from "react";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-orange-500 text-white p-1.5 rounded">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6.5H21M3 12H21M3 17.5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-xl">Laos Finance</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making financial planning accessible to everyone in Laos with simple, powerful calculators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.224 7.22c.18 4-2.06 8.462-5.947 8.462a5.908 5.908 0 01-3.192-.934 4.154 4.154 0 003.069-.855 2.07 2.07 0 01-1.932-1.437 2.07 2.07 0 00.935-.041 2.07 2.07 0 01-1.657-2.04v-.026c.279.155.6.249.935.26a2.07 2.07 0 01-.64-2.766 5.879 5.879 0 004.27 2.164 2.07 2.07 0 013.522-1.88 4.152 4.152 0 001.315-.5 2.073 2.073 0 01-.91 1.143c.42-.05.82-.16 1.19-.321a4.199 4.199 0 01-1.03 1.071z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.98 0a6.9 6.9 0 01.702.031c.992.055 1.847.333 2.55 1.037a6.89 6.89 0 011.036 2.55c.076.993.076 3.937 0 4.93a6.89 6.89 0 01-1.037 2.55 6.89 6.89 0 01-2.55 1.036c-.992.076-3.937.076-4.93 0a6.89 6.89 0 01-2.55-1.036 6.89 6.89 0 01-1.036-2.55c-.076-.993-.076-3.937 0-4.93A6.89 6.89 0 018.23 1.07a6.9 6.9 0 012.55-1.037c.992-.055 1.847-.055 2.55 0C14.323.033 15.98 0 16.98 0zm-1.01 7.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 3.773a3.5 3.5 0 11.001-7 3.5 3.5 0 01-.001 7z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Calculators</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Loan Calculator
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Savings Goal Planner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Budget Tracker
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Currency Converter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Retirement Planner
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight size={16} className="mr-1" />
                  Data Protection
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Laos Finance Navigator. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed & Developed in Vientiane, Laos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
