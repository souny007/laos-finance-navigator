
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What financial calculators are available?",
    answer: "Our platform offers loan calculators, savings goal planners, and budget trackers. All calculators are tailored for the Lao market and support LAK currency."
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes, we take security seriously. All your data is encrypted, stored securely, and never shared with third parties. You can delete your data at any time."
  },
  {
    question: "Can I use the platform for free?",
    answer: "Yes, our basic plan is completely free and includes essential calculators. You can upgrade to Pro or Enterprise plans for additional features and capabilities."
  },
  {
    question: "How accurate are the calculations?",
    answer: "Our calculators use standard financial formulas and are regularly updated to reflect current market rates in Laos. The results are accurate for planning purposes, but we recommend consulting a financial advisor for major decisions."
  },
  {
    question: "Can I access my saved calculations on different devices?",
    answer: "Yes, with a free account your calculations are saved to your profile and accessible from any device when you log in."
  },
  {
    question: "Do you offer support in Lao language?",
    answer: "Yes, our platform supports both English and Lao languages. You can switch between languages in your account settings."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely! You can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your billing period."
  },
  {
    question: "How do I get help if I have questions?",
    answer: "You can reach our customer support team through the contact form on our website, or by emailing support@laosfinance.com. Pro and Enterprise users have access to priority support."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our financial calculators and platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-medium text-gray-900 py-5 hover:text-orange-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions? <a href="#contact" className="text-orange-500 font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
