
import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Free",
      description: "Basic financial calculations for individuals",
      price: isYearly ? 0 : 0,
      duration: isYearly ? "/year" : "/month",
      features: [
        "Loan Calculator",
        "Basic Savings Planner",
        "Simple Budget Tracker",
        "LAK Currency Support",
        "Maximum of 3 saved calculations",
      ],
      notFeatures: [
        "Advanced Reporting",
        "Financial Goal Tracking",
        "Data Export Options",
        "Email Notifications",
        "Priority Support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "Advanced tools for serious financial planning",
      price: isYearly ? 199000 : 19900,
      duration: isYearly ? "/year" : "/month",
      features: [
        "All Free Features",
        "Unlimited Saved Calculations",
        "Advanced Reporting",
        "Financial Goal Tracking",
        "Data Export Options",
        "Email Notifications",
        "Priority Support",
      ],
      notFeatures: [],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for businesses and organizations",
      price: isYearly ? 499000 : 49900,
      duration: isYearly ? "/year" : "/month",
      features: [
        "All Pro Features",
        "Multi-user Accounts",
        "Customizable Dashboard",
        "API Access",
        "White-label Options",
        "Team Collaboration Tools",
        "Dedicated Account Manager",
        "Custom Financial Models",
      ],
      notFeatures: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('lo-LA', { style: 'currency', currency: 'LAK', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <section id="pricing" className="py-20 bg-orange-50 pattern-bg">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Choose the Plan That Works for You
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Whether you're an individual, financial planner, or business, we have a plan that fits your needs.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly <span className="text-orange-500 ml-1">(Save 15%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border ${plan.popular ? 'border-orange-500 shadow-md' : 'border-gray-200'} rounded-xl overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-6 pb-0">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {plan.price === 0 ? "Free" : formatCurrency(plan.price)}
                  </span>
                  {plan.price !== 0 && <span className="text-gray-500 ml-1">{plan.duration}</span>}
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.notFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start opacity-50">
                      <X size={18} className="text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-500 text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom plan? <a href="#contact" className="text-orange-500 font-medium hover:underline">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
