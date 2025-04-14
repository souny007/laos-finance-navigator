
import React from "react";
import { Calculator, LineChart, BarChart4, Wallet, ShieldCheck, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Calculator className="h-10 w-10 text-orange-500" />,
    title: "Loan Calculator",
    description: "Calculate monthly payments, total interest, and amortization schedules for personal or business loans in LAK."
  },
  {
    icon: <LineChart className="h-10 w-10 text-orange-500" />,
    title: "Savings Goal Planner",
    description: "Set financial goals and calculate how much you need to save monthly to reach them on time."
  },
  {
    icon: <BarChart4 className="h-10 w-10 text-orange-500" />,
    title: "Budget Tracker",
    description: "Create and manage your monthly budget with income and expense categories tailored to Laos living costs."
  },
  {
    icon: <Wallet className="h-10 w-10 text-orange-500" />,
    title: "LAK Currency Support",
    description: "All calculations use the Lao Kip (₭) as the default currency with accurate formatting and conventions."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-orange-500" />,
    title: "Secure Data Storage",
    description: "Your financial information is encrypted and never shared with third parties. Access your data anytime, anywhere."
  },
  {
    icon: <Globe className="h-10 w-10 text-orange-500" />,
    title: "Local Financial Insights",
    description: "Get tips and insights relevant to the Laos financial market, including interest rates and investment opportunities."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Smart Tools for Financial Planning in Laos
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform offers powerful yet simple-to-use calculators that help you make informed financial decisions tailored to the Lao market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-5 inline-flex items-center justify-center rounded-full bg-orange-50 p-3 group-hover:bg-orange-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="heading-tertiary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
