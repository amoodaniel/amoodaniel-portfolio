
import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Shield, Zap, Users, BarChart3, Globe, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const ChatbotOffer = () => {
  const handleScheduleCall = () => {
    window.open('https://cal.com/danielamoo/30min', '_blank');
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:danielamoo35@gmail.com?subject=ChatBot Solutions Inquiry';
  };

  const painPoints = [
    "Struggling to reach remote beneficiaries with critical information?",
    "Manual data collection slowing down your impact reporting?",
    "Staff overwhelmed managing multiple communication channels?",
    "Donors demanding real-time data you can't easily provide?"
  ];

  const benefits = [
    { icon: <Clock className="w-5 h-5" />, title: "Rapid Deployment", desc: "Live in under 5 weeks" },
    { icon: <Shield className="w-5 h-5" />, title: "Security First", desc: "Built-in consent & protection protocols" },
    { icon: <Globe className="w-5 h-5" />, title: "Offline-Aware", desc: "Works in low-connectivity environments" },
    { icon: <BarChart3 className="w-5 h-5" />, title: "Donor-Ready", desc: "Real-time M&E dashboards" }
  ];

  const included = [
    "Custom WhatsApp/SMS chatbot tailored to your needs",
    "Seamless Airtable or Google Sheets integration",
    "Pre-tested conversation flows for humanitarian outreach",
    "Admin dashboard setup (optional)",
    "Security & consent best practices built-in",
    "Complete staff training and user manual",
    "30-day post-deployment support included"
  ];

  const useCases = [
    "Gender-Based Violence (GBV) response",
    "Health education & community outreach",
    "Monitoring & evaluation (M&E) data collection",
    "Community engagement & awareness campaigns",
    "Youth empowerment & SRHR programming"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          asChild
        >
          <Link to="/">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge variant="secondary" className="bg-green-100 text-green-800 mb-6 px-4 py-2">
            LIMITED AVAILABILITY: Only 3 Slots Remaining This Quarter
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Losing Beneficiaries to Communication Gaps
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Custom WhatsApp ChatBot Solutions that help NGOs reach more people, 
            collect real-time data, and deliver critical services — 
            <span className="font-semibold text-green-600">faster, safer, smarter.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg"
              onClick={handleScheduleCall}
            >
              Schedule Strategy Call
              <Phone className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-lg"
              onClick={handleEmailContact}
            >
              Get Project Quote
              <MessageSquare className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-red-50 border-y border-red-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Are These Challenges Limiting Your Impact?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((pain, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-red-200">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 font-medium">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Solution Your NGO Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built chatbot technology designed specifically for humanitarian organizations working in challenging environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 border-2 hover:border-green-200 transition-colors">
                <CardContent className="pt-6">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-green-600">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perfect for Organizations Working In:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="font-medium text-gray-900">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Everything You Need to Succeed
          </h2>
          <div className="space-y-4">
            {included.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Investment Options</h2>
          <p className="text-xl text-gray-300 mb-12">
            Transparent pricing designed for NGO budgets
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="bg-white text-gray-900 border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Standard Package</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">From £5,000</div>
                <p className="text-gray-600 mb-6">
                  Complete chatbot solution with core features and support
                </p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                  onClick={handleScheduleCall}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-green-600 text-white border-2 border-green-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900">
                Most Popular
              </Badge>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Advanced Package</h3>
                <div className="text-4xl font-bold mb-4">£8,000 - £10,000+</div>
                <p className="text-green-100 mb-6">
                  Multi-language, custom dashboards, complex workflows
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-green-600 py-3"
                  onClick={handleScheduleCall}
                >
                  Discuss Requirements
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 px-4 py-2">
              Special pilot pricing available for local NGOs and first-time partners
            </Badge>
          </div>
        </div>
      </section>

      {/* Social Proof / Urgency */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Join Forward-Thinking NGOs Already Using ChatBot Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5 weeks</div>
              <p className="text-gray-700">Average deployment time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10x</div>
              <p className="text-gray-700">Faster data collection</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-700">Automated beneficiary support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Limited slots available this quarter. Book your strategy call today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-lg"
              onClick={handleScheduleCall}
            >
              Schedule Strategy Call Now
              <Zap className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <p className="mt-6 text-green-100 text-sm">
            No commitment required • 30-minute consultation • Get custom recommendations
          </p>
        </div>
      </section>
    </div>
  );
};

export default ChatbotOffer;
