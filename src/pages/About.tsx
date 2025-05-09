import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">About Me</h1>
        <p className="text-xl text-gray-700 mb-8">
          Hello, My name is <span className="font-semibold">Daniel Ayomide AMOO</span>, and I build digital products for impact.
        </p>
        <p className="text-lg text-gray-600 mb-12">
          Most of my experience has been in analyzing data and building innovative systems (web, mobile, chatbots) for&nbsp;
          <a href="https://secondtree.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">small organizations</a>,&nbsp;
          <a href="https://www.israaid.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">iNGOs</a>&nbsp;and&nbsp;
          <a href="https://www.unhcr.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">International Organizations</a>.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg"><a href="https://www.israaid.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">IsraAID</a></span>
                <span className="text-gray-500 text-sm">Feb 2024 – Present</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Digital Information Officer</div>
              <p className="text-gray-700 mb-1 text-justify">
              I support humanitarian teams by developing digital tools that improve the speed and efficiency of fieldwork. A key project I lead is a WhatsApp bot for GBV outreach in South Sudan, created to streamline case reporting. I built a custom Python integration to connect the Turn.io with Airtable, and developed a real-time dashboard using Streamlit, enabling managers to instantly monitor field data and identify emerging patterns.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Streamlit</Badge>
                <Badge variant="secondary">Airtable API</Badge>
                <Badge variant="secondary">Turn.io</Badge>
                <Badge variant="secondary">Twilio</Badge>
                <Badge variant="secondary">Monday.com API</Badge>
                <Badge variant="secondary">Ruby</Badge>


              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg"><a href="https://www.unhcr.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">UNHCR – Geneva, Switzerland</a></span>
                <span className="text-gray-500 text-sm">Oct 2023 – Apr 2024</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Communications Intern</div>
              <p className="text-gray-700 mb-1 text-justify">
              I managed and updated website content for the <a href="https://globalprotectioncluster.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Global Protection Cluster</a>, including fixing their Drupal page which was deprecating. I published field updates from country offices and created donor-focused summaries and visual assets. I also redesigned communication templates and supported the rollout of a consistent brand identity across all tools. Working closely with the External Engagement team, I transformed lengthy reports into engaging content for the website and social media platforms.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">Drupal</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">Excel</Badge>
                <Badge variant="secondary">Canva</Badge>
                <Badge variant="secondary">InDesign</Badge>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg"><a href="https://nugitech.com/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Nugi Technologies – Calabar, Nigeria</a></span>
                <span className="text-gray-500 text-sm">Jul 2022 – Jul 2023</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Software Engineer</div>
              <p className="text-gray-700 mb-1 text-justify">
                I Developed backend systems for Fuel Plug (FKA Wia Fuel Dey), a mobile/web platform that helps drivers find fuel stations with available supply. Led key updates to auth and payment microservices, added new user types with instant wallet access, built inter-service APIs, and created endpoints for attendants, vouchers, and beneficiaries. Documented all APIs using Swagger and Postman.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">EJS</Badge>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg"><a href="https://www.covenantuniversity.edu.ng/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Covenant University</a></span>
                <span className="text-gray-500 text-sm">Oct 2020 – Oct 2021</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Software Researcher</div>
              <p className="text-gray-700 mb-1 text-justify">
              I built a recommender system prototype that tackled the cold-start problem by combining collaborative filtering with Twitter data, achieving a 75% user satisfaction rate in tests.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">NetworkX</Badge>
                <Badge variant="secondary">Twitter API</Badge>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg"><a href="https://www.covenantuniversity.edu.ng/about-us/operations/centre-for-systems-and-information-services-csis" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">CSIS – Covenant University</a></span>
                <span className="text-gray-500 text-sm">Jun 2020 – Oct 2020</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Web Developer & IT Support</div>
              <p className="text-gray-700 mb-1 text-justify">
                As part of the IT support team, I maintained university websites, resolved staff tech issues, and worked on boosting site visibility through SEO. I also helped launch two internal portals that improved admin processes.
              </p>
              <p className="text-gray-700 mb-1 text-justify">
                Also I built <a href="https://rceogun.covenantuniversity.edu.ng/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Rce Ogun</a> and <a href="https://smartcu.covenantuniversity.edu.ng/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">SmartCU</a> website for Covenant Univeristy.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">WordPress</Badge>
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Google Analytics</Badge>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg">Freelance</span>
                <span className="text-gray-500 text-sm">Sept 2018 – Jun 2020</span>
              </div>
              <p className="text-gray-700 mb-1 text-justify">
                I helped small businesses and content creators go digital—building websites, setting up online payments, and growing their social presence.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">WordPress</Badge>
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Paystack API</Badge>
                <Badge variant="secondary">Instagram</Badge>
                <Badge variant="secondary">Google Analytics</Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My work for startups and small organizations</h2>
          <div className="space-y-6">
            <div>
              <a href="https://web.archive.org/web/20220808161022/https://techstarthq.com/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Techstart HQ</a> - I developed growth strategies for the Ed-techstartup and led launch campaigns that drove a 37% increase in revenue.
              </div>
            <div>
              <a href="https://web.archive.org/web/20230411125654/https://symble.live/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Symble Live</a> - Developed growth strategies and played a key role in piloting the app at the 2024 Beer with Us music show, where it gained its first set of users and successfully tested its core features.
            </div>
            <div>
              <a href="https://secondtree.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Second Tree</a>: I identified key data pain points in social media engagement, utilizing analytics to drive informed decision-making and improve strategies for the NGO.
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Volunteering</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold"> <a href="https://edutorial.ng/bells-secondary-school-wins-maiden-icons-football-competition/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">ICONS CUP</a>:</span> partnered with 10 schools to support this initiative.&nbsp;
              <span className="text-gray-600">Our goal was to promote Unity and reduce the divide of classism between public and private schools in Ota, Ogun State, while advocating for quality Education through sports (SDG 4).</span>
            </li>
          </ul>
        </section>
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About; 