
import React from "react";
import { ArrowRight, Calculator, CreditCard, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="pt-24 laos-pattern">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 text-center lg:text-left animate-fade-in">
            <h1 className="heading-primary leading-tight">
              Make Smarter Financial Decisions in <span className="text-orange-500">Laos</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Use our free calculators to plan your savings, loans, and budgets. Tailored for the Lao market with local currency (LAK) support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary text-base py-6 px-8 rounded-xl flex items-center gap-2" size="lg">
                Start Calculating Now
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="text-base py-6 px-8 rounded-xl" size="lg">
                See Pricing
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-500 pt-2">
              <div className="flex items-center gap-1">
                <div className="h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <span>Free base plan</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative animate-fade-in-slow">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="bg-orange-50 rounded-xl p-5">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Loan Calculator</h3>
                  <Calculator className="text-orange-500" size={24} />
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Loan Amount (LAK)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">₭</span>
                      </div>
                      <input
                        type="text"
                        className="pl-8 block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                        placeholder="5,000,000"
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Interest Rate (%)</label>
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                      placeholder="12"
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Loan Term (months)</label>
                    <input
                      type="text"
                      className="block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
                      placeholder="36"
                      readOnly
                    />
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Monthly Payment:</span>
                    <span className="text-sm font-semibold">₭ 166,070</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Total Interest:</span>
                    <span className="text-sm font-semibold">₭ 977,524</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Total Payment:</span>
                    <span className="text-sm font-semibold">₭ 5,977,524</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                  Calculate
                </Button>
              </div>
            </div>
            
            <div className="hidden sm:block absolute top-10 -right-16 bg-blue-50 rounded-xl p-5 w-56 animate-float shadow-lg z-0">
              <div className="flex items-center mb-2 gap-2">
                <CreditCard className="text-blue-500" size={20} />
                <span className="font-medium">Savings Plan</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Goal:</span>
                  <span className="text-xs">₭ 10,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Monthly:</span>
                  <span className="text-xs">₭ 250,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Time:</span>
                  <span className="text-xs">3.3 years</span>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-10 -left-10 bg-green-50 rounded-xl p-5 w-48 animate-float shadow-lg z-0" style={{ animationDelay: "1s" }}>
              <div className="flex items-center mb-2 gap-2">
                <DollarSign className="text-green-500" size={20} />
                <span className="font-medium">Budget</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Income:</span>
                  <span className="text-xs">₭ 3,500,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Expenses:</span>
                  <span className="text-xs">₭ 2,900,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Savings:</span>
                  <span className="text-xs text-green-500">₭ 600,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 bg-gradient-to-b from-transparent to-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-500">10,000+</p>
              <p className="text-sm text-gray-500">Users in Laos</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-500">3</p>
              <p className="text-sm text-gray-500">Financial Tools</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-500">₭ 50B+</p>
              <p className="text-sm text-gray-500">Calculated Annually</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-orange-500">98%</p>
              <p className="text-sm text-gray-500">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
