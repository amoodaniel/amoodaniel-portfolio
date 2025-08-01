
import React from 'react';
import { ArrowLeft, CheckCircle, Clock, Shield, Zap, Users, BarChart3, Globe, Phone, MessageSquare, Star, TrendingUp } from 'lucide-react';
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
    { icon: <Clock className="w-6 h-6" />, title: "Rapid Deployment", desc: "Live in under 5 weeks" },
    { icon: <Shield className="w-6 h-6" />, title: "Security First", desc: "Built-in consent & protection protocols" },
    { icon: <Globe className="w-6 h-6" />, title: "Offline-Aware", desc: "Works in low-connectivity environments" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Donor-Ready", desc: "Real-time M&E dashboards" }
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-6 border-b border-border">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <Badge className="bg-destructive/10 text-destructive border-destructive/20 mb-8 px-6 py-3 text-sm font-semibold">
            ⚡ LIMITED AVAILABILITY: Only 3 Slots Remaining This Quarter
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Stop Losing Beneficiaries to Communication Gaps
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
            Custom WhatsApp ChatBot Solutions that help NGOs reach more people, 
            collect real-time data, and deliver critical services — 
            <span className="font-semibold text-primary">faster, safer, smarter.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg"
              className="px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              onClick={handleScheduleCall}
            >
              Schedule Strategy Call
              <Phone className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-6 text-lg font-semibold border-2"
              onClick={handleEmailContact}
            >
              Get Project Quote
              <MessageSquare className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-destructive/5 border-y border-destructive/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Are These Challenges Limiting Your Impact?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((pain, index) => (
              <Card key={index} className="p-8 border-destructive/20 bg-background/80 backdrop-blur-sm">
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <p className="text-foreground font-medium text-lg leading-relaxed">{pain}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              The Solution Your NGO Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Purpose-built chatbot technology designed specifically for humanitarian organizations working in challenging environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                <CardContent className="p-0">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-3 text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Perfect for Organizations Working In:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Users className="w-12 h-12 text-primary mx-auto mb-6" />
                  <p className="font-semibold text-foreground text-lg leading-relaxed">{useCase}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-20">
            Everything You Need to Succeed
          </h2>
          <div className="space-y-6">
            {included.map((item, index) => (
              <Card key={index} className="p-6 border-primary/20 bg-primary/5">
                <CardContent className="p-0 flex items-start gap-6">
                  <CheckCircle className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-semibold text-lg leading-relaxed">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-primary-foreground/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <div className="mb-12">
            <Badge className="bg-destructive text-destructive-foreground mb-6 px-4 py-2 text-sm font-bold animate-pulse">
              ⏰ URGENT: Only 3 spots left this quarter
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Choose Your <span className="text-accent">Transformation</span> Package
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-4 leading-relaxed max-w-3xl mx-auto">
              ROI-focused solutions that pay for themselves through improved efficiency
            </p>
            <p className="text-lg text-primary-foreground/80 font-medium">
              ✓ 30-day money-back guarantee &nbsp;&nbsp; ✓ No hidden fees &nbsp;&nbsp; ✓ Payment plans available
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Standard Package */}
            <Card className="p-8 text-center border-2 border-border bg-background text-foreground relative group hover:scale-105 transition-transform duration-300 shadow-2xl">
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
                  <p className="text-muted-foreground text-sm">Perfect for single-program NGOs</p>
                </div>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold text-primary mb-2">£5,000</div>
                  <p className="text-muted-foreground line-through text-lg">Worth £8,000+</p>
                  <p className="text-sm text-primary font-semibold">Save £3,000+ vs building in-house</p>
                </div>

                <div className="text-left space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Custom WhatsApp/SMS bot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Airtable/Sheets integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Security & consent protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Staff training included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">30-day support</span>
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  className="w-full py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-shadow"
                  onClick={handleScheduleCall}
                >
                  Start Your Transformation
                  <Clock className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-xs text-muted-foreground mt-4">
                  ⚡ Launch in 5 weeks or less
                </p>
              </CardContent>
            </Card>

            {/* Advanced Package */}
            <Card className="p-8 text-center border-4 border-accent bg-gradient-to-br from-primary/95 to-primary text-primary-foreground relative group hover:scale-105 transition-transform duration-300 shadow-2xl ring-4 ring-accent/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground px-6 py-2 font-bold text-sm shadow-lg">
                  <Star className="w-4 h-4 mr-2" />
                  MOST POPULAR - 70% Choose This
                </Badge>
              </div>
              
              <CardContent className="p-0 pt-4">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Advanced Package</h3>
                  <p className="text-primary-foreground/80 text-sm">For multi-program organizations</p>
                </div>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold mb-2">£8,000</div>
                  <p className="text-primary-foreground/70 line-through text-lg">Worth £15,000+</p>
                  <p className="text-sm text-accent font-semibold">Save £7,000+ vs hiring developers</p>
                </div>

                <div className="text-left space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">Everything in Standard PLUS:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Multi-language support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Custom M&E dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Complex workflow automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Priority support & updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Advanced analytics & reporting</span>
                  </div>
                </div>
                
                <Button 
                  variant="secondary"
                  size="lg"
                  className="w-full py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-shadow bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={handleScheduleCall}
                >
                  Scale Your Impact Now
                  <TrendingUp className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-xs text-primary-foreground/80 mt-4">
                  🚀 Enterprise-grade solution in 6 weeks
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTAs and guarantees */}
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Trusted by 50+ NGOs</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>5-week delivery</span>
              </div>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-primary-foreground/90 font-semibold mb-4">
                🎯 <strong>Limited Time:</strong> Book this week and get FREE priority support worth £2,000
              </p>
              <Badge variant="secondary" className="px-6 py-2 text-sm font-semibold">
                💰 Payment plans available for qualified NGOs
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Urgency */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
            Join Forward-Thinking NGOs Already Using ChatBot Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">5 weeks</div>
              <p className="text-muted-foreground text-lg">Average deployment time</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4 flex items-center justify-center">
                10<TrendingUp className="w-8 h-8 ml-2" />
              </div>
              <p className="text-muted-foreground text-lg">Faster data collection</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">24/7</div>
              <p className="text-muted-foreground text-lg">Automated beneficiary support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Transform Your Outreach?
          </h2>
          <p className="text-2xl mb-12 text-primary-foreground/90 leading-relaxed">
            Limited slots available this quarter. Book your strategy call today.
          </p>
          
          <div className="flex justify-center mb-8">
            <Button 
              size="lg"
              variant="secondary"
              className="px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-shadow"
              onClick={handleScheduleCall}
            >
              Schedule Strategy Call Now
              <Zap className="w-6 h-6 ml-3" />
            </Button>
          </div>

          <p className="text-primary-foreground/80 text-lg">
            No commitment required • 30-minute consultation • Get custom recommendations
          </p>
        </div>
      </section>
    </div>
  );
};

export default ChatbotOffer;
