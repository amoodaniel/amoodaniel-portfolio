
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

  React.useEffect(() => {
    document.title = "WhatsApp Chatbot for NGOs | Custom Chatbot Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    const description =
      "Custom WhatsApp chatbot solutions for NGOs to scale outreach, collect real-time data, and deliver services faster and safely.";
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      const m = document.createElement("meta");
      (m as HTMLMetaElement).name = "description";
      (m as HTMLMetaElement).content = description;
      document.head.appendChild(m);
    }
    // Canonical link
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const href = window.location.origin + "/chatbot-offer";
    if (existingCanonical) {
      existingCanonical.setAttribute("href", href);
    } else {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      l.setAttribute("href", href);
      document.head.appendChild(l);
    }
  }, []);

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

      <main role="main">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <Badge className="bg-destructive/10 text-destructive border-destructive/20 mb-8 px-6 py-3 text-sm font-semibold">
            ⚡ LIMITED AVAILABILITY: Only 3 Slots Remaining This Quarter
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            WhatsApp Chatbot for NGOs — Reach, Serve, and Measure at Scale
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
            Launch a tailored chatbot that engages beneficiaries, automates data capture, and equips your teams with donor-ready insights —
            <span className="font-semibold text-primary"> all in weeks, not months.</span>
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: "WhatsApp Chatbot for NGOs",
                areaServed: "Worldwide",
                provider: { "@type": "Organization", name: "Daniel Amoo" },
                serviceType: "Custom chatbot implementation",
                offers: [
                  { "@type": "Offer", name: "Standard Package", priceCurrency: "GBP", price: "5000" },
                  { "@type": "Offer", name: "Advanced Package", priceCurrency: "GBP", price: "8000" }
                ]
              }),
            }}
          />
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-muted/50 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Are These Challenges Limiting Your Impact?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((pain, index) => (
              <Card key={index} className="p-8 bg-card border">
                <CardContent className="p-0 flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
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
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transparent, Outcome-Focused Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that matches your program needs. Every engagement includes training and a 30-day warranty.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Standard Package */}
            <Card className="p-8 text-left bg-card border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">Best for single programs</Badge>
                  <h3 className="text-2xl font-bold">Standard</h3>
                </div>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-foreground">£5,000</div>
                  <p className="text-muted-foreground text-sm">Typical value £8,000+</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span>Custom WhatsApp/SMS bot</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span>Airtable/Sheets integration</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span>Security & consent protocols</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span>Staff training included</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-primary" /><span>30-day support</span></div>
                </div>
                <Button size="lg" className="w-full" onClick={handleScheduleCall}>
                  Get Started
                </Button>
                <p className="text-xs text-muted-foreground mt-3">Launch in ~5 weeks</p>
              </CardContent>
            </Card>

            {/* Advanced Package */}
            <Card className="p-8 text-left bg-card border-2 border-accent/40 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <Badge className="bg-accent text-accent-foreground mb-3">Most popular</Badge>
                    <h3 className="text-2xl font-bold">Advanced</h3>
                  </div>
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-foreground">£8,000</div>
                  <p className="text-muted-foreground text-sm">Typical value £15,000+</p>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /><span>Everything in Standard</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /><span>Multi-language support</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /><span>Custom M&E dashboard</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /><span>Workflow automation</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /><span>Priority support & updates</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent" /><span>Advanced analytics & reporting</span></div>
                </div>
                <Button variant="secondary" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={handleScheduleCall}>
                  Talk to an Expert
                </Button>
                <p className="text-xs text-muted-foreground mt-3">Enterprise-grade in ~6 weeks</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>30-day guarantee</span></div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>Trusted by 50+ NGOs</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>Fast delivery</span></div>
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
      </main>
    </div>
  );
};

export default ChatbotOffer;
