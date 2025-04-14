
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon 
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions or need help? We're here to assist you with any inquiries about our financial calculators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please provide details about your inquiry..."
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MailIcon className="h-5 w-5 text-orange-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Email Us</p>
                  <p className="text-sm text-gray-600">info@laosfinance.com</p>
                  <p className="text-sm text-gray-600">support@laosfinance.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <PhoneIcon className="h-5 w-5 text-orange-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Call Us</p>
                  <p className="text-sm text-gray-600">+856 20 5555 7777</p>
                  <p className="text-sm text-gray-600">Monday-Friday, 9am-5pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPinIcon className="h-5 w-5 text-orange-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Office</p>
                  <p className="text-sm text-gray-600">123 Setthathirat Road</p>
                  <p className="text-sm text-gray-600">Vientiane, Laos</p>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.224 7.22c.18 4-2.06 8.462-5.947 8.462a5.908 5.908 0 01-3.192-.934 4.154 4.154 0 003.069-.855 2.07 2.07 0 01-1.932-1.437 2.07 2.07 0 00.935-.041 2.07 2.07 0 01-1.657-2.04v-.026c.279.155.6.249.935.26a2.07 2.07 0 01-.64-2.766 5.879 5.879 0 004.27 2.164 2.07 2.07 0 013.522-1.88 4.152 4.152 0 001.315-.5 2.073 2.073 0 01-.91 1.143c.42-.05.82-.16 1.19-.321a4.199 4.199 0 01-1.03 1.071z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-orange-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.98 0a6.9 6.9 0 01.702.031c.992.055 1.847.333 2.55 1.037a6.89 6.89 0 011.036 2.55c.076.993.076 3.937 0 4.93a6.89 6.89 0 01-1.037 2.55 6.89 6.89 0 01-2.55 1.036c-.992.076-3.937.076-4.93 0a6.89 6.89 0 01-2.55-1.036 6.89 6.89 0 01-1.036-2.55c-.076-.993-.076-3.937 0-4.93A6.89 6.89 0 018.23 1.07a6.9 6.9 0 012.55-1.037c.992-.055 1.847-.055 2.55 0C14.323.033 15.98 0 16.98 0zm-1.01 7.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 3.773a3.5 3.5 0 11.001-7 3.5 3.5 0 01-.001 7z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
