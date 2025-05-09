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
          Most of my experience has been in analyzing data, and building systems (web, chatbots) for&nbsp;
          <a href="https://secondtree.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">small organizations</a>,&nbsp;
          <a href="https://www.israaid.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">iNGOs</a>&nbsp;and&nbsp;
          <a href="https://www.unhcr.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">International Organizations</a>.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg">IsraAID</span>
                <span className="text-gray-500 text-sm">Feb 2024 – Present</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Digital Information Officer</div>
              <p className="text-gray-700 mb-1 text-justify">
                I support humanitarian teams by building digital tools that make fieldwork faster and more efficient. One of my key projects is a WhatsApp bot for GBV outreach in South Sudan, designed to speed up case reporting. I built a custom integration that connects the bot to Airtable using Python, then developed a real-time dashboard with Streamlit so managers can instantly see patterns and insights in the field data.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Streamlit</Badge>
                <Badge variant="secondary">Airtable</Badge>
                <Badge variant="secondary">Turn.io</Badge>
                <Badge variant="secondary">Twilio</Badge>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg">UNHCR – Geneva, Switzerland</span>
                <span className="text-gray-500 text-sm">Oct 2023 – Apr 2024</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Communications Intern</div>
              <p className="text-gray-700 mb-1 text-justify">
                At the Global Protection Cluster, I managed website content, published field updates from country offices, and created donor-facing summaries and visual assets. I also revamped templates and helped introduce a more consistent brand identity across communication tools. Working closely with the External Engagement team, I turned long reports into engaging content for the cluster's website and social media.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">Drupal</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">Excel</Badge>
                <Badge variant="secondary">Canva</Badge>
                <Badge variant="secondary">InDesign</Badge>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg">Nugi Technologies – Calabar, Nigeria</span>
                <span className="text-gray-500 text-sm">Jul 2022 – Jul 2023</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Software Engineer</div>
              <p className="text-gray-700 mb-1 text-justify">
                I worked as a backend developer on a major system overhaul—breaking down a monolithic application into independent microservices. I built REST APIs, redesigned the admin dashboard, and wrote clear technical documentation to make future iterations smoother.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">EJS</Badge>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg">Covenant University</span>
                <span className="text-gray-500 text-sm">Oct 2020 – Oct 2021</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Software Researcher</div>
              <p className="text-gray-700 mb-1 text-justify">
                For my final-year research, I tackled the cold-start problem in recommender systems. I built a prototype that combined collaborative filtering with Twitter data to personalize product suggestions. The tool achieved a 75% user satisfaction rate, and test users preferred it over traditional recommendation engines.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">NetworkX</Badge>
                <Badge variant="secondary">Twitter API</Badge>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg">CSIS – Covenant University</span>
                <span className="text-gray-500 text-sm">Jun 2020 – Oct 2020</span>
              </div>
              <div className="text-gray-500 text-xs mb-1">Web Developer & IT Support</div>
              <p className="text-gray-700 mb-1 text-justify">
                As part of the IT support team, I maintained university websites, resolved staff tech issues, and worked on boosting site visibility through SEO. I also helped launch two internal portals that improved admin processes.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">WordPress</Badge>
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <span className="font-semibold text-lg">Freelance</span>
                <span className="text-gray-500 text-sm">Sept 2018 – Jun 2020</span>
              </div>
              <p className="text-gray-700 mb-1 text-justify">
                I helped small businesses and content creators go digital—building websites, setting up online payments, and growing their social presence. One of my highlights was growing an Instagram account from 100 to 50K followers through smart content planning and analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Tech:</span>
                <Badge variant="secondary">WordPress</Badge>
                <Badge variant="secondary">Paystack</Badge>
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
              <a href="https://web.archive.org/web/20220808161022/https://techstarthq.com/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Techstart HQ</a> - I handled growth strategies for the startup and handled launch campaigns that generated over naira 700,000 in revenue for the first year
            </div>
            <div>
              <a href="https://web.archive.org/web/20230411125654/https://symble.live/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Symble Live</a> - Handled growth strategies and pivotal in piloting the app in the 2024 Beer with us music show, the app served 100 people in the first usecase.
            </div>
            <div>
              <a href="https://secondtree.org/" target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-dotted">Second Tree</a>: I handled social media analytics for the NGO
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Volunteering</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><span className="font-semibold">ICONS CUP:</span> partnered with 10 schools to support this initiative.<br />
              <span className="text-gray-600">Our goal is to promote Unity and reduce the divide of classism between public and private schools while advocating for quality Education through sports (SDG 4).</span>
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