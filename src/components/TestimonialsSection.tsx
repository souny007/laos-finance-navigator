
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Souliyo Phommachanh",
    title: "Small Business Owner",
    quote: "This platform helped me understand how much I would pay for my business loan. The calculators are very easy to use and accurate!",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "Viengkham Sisouphanthong",
    title: "Financial Advisor",
    quote: "I recommend Laos Finance Navigator to all my clients. The platform makes it easy to show financial projections and savings plans.",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "Thongloun Lattana",
    title: "College Student",
    quote: "The budget tracker is perfect for me as a student. I can now track my expenses and make better decisions about my spending.",
    rating: 4,
    imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    name: "Chansouk Bounmy",
    title: "Family Financial Planner",
    quote: "We've been able to save for our children's education much more effectively using the savings goal planner. Highly recommended!",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Trusted by Thousands in Laos
          </h2>
          <p className="text-gray-600 text-lg">
            Hear what our users have to say about how our financial tools have helped them achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-orange-50 rounded-2xl p-8 md:p-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="heading-tertiary mb-6">
              Join thousands of users making better financial decisions every day
            </h3>
            <a
              href="#pricing"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
