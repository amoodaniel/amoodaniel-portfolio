
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import ProjectHeroSection from '@/components/ProjectHeroSection';
import ProjectApproach from '@/components/ProjectApproach';
import ProjectDeliverables from '@/components/ProjectDeliverables';
import ProjectImpact from '@/components/ProjectImpact';
import ProjectNews from '@/components/ProjectNews';
import ProjectProblemSolution from '@/components/ProjectProblemSolution';

const Anenasawa = () => {
  const projectData = {
    title: "GBV Intervention Chatbot",
    description: "A WhatsApp-based chatbot designed to streamline gender-based violence (GBV) reporting by enabling outreach workers to record disclosures quickly, efficiently, and securely.",
    problemStatement: "In many regions across Africa, where significant portions of women and girls experience gender-based violence (GBV), community outreach workers play a critical role in identifying and referring cases. However, the early stages of GBV case identification and referral are hindered by poor connectivity, limited digital literacy among users, and ongoing dependence on paper-based methods. These conditions make the process slow, hard to supervise, and vulnerable to breaches of privacy and data loss. While some digital tools are available, they tend to focus on later phases of case management and often do not provide workable solutions for frontline reporting. As a result, the initial and most time-sensitive steps in the response chain remain disconnected and inefficient.",
    solutionStatement: `To address the need for more efficient GBV-related outreach management, Anenasawa was developed as a WhatsApp-based chatbot specifically designed for outreach workers in areas with limited connectivity. The tool simplifies how cases are identified, reviewed, and referred by guiding users through structured conversation flows designed to support both general activity reporting and sensitive client disclosures.

    A supporting dashboard was also developed to visualize incoming reports, display case assignments, and track the status of reports throughout the referral process. This setup reduces dependence on paper forms, improves data consistency, and provides the necessary visibility for timely and accountable responses.

    By combining accessible mobile technology with centralized monitoring, Anenasawa enhances the link between frontline outreach and formal case response. It enables outreach teams and case managers to address GBV incidents with improved speed, accuracy, and care.`,
    targetAudience: "7,080 beneficiaries (880 direct and 6200 indirect beneficiaries)",
    imageUrl: "/lovable-uploads/1b2f3abe-a961-43d3-baac-37bfe6b46796.png",
    citation: "",
    approach: `The development process involved extensive field research and user testing to ensure the bot delivered real impact in challenging environments. Direct collaboration with outreach teams allowed for rapid feedback incorporation and iterative improvements to fit both the context and the users' needs.

      The bot was designed with a clear focus on security, simplicity, and functionality in areas with limited connectivity. The conversation flow guides outreach workers through a structured process to log outreach sessions, record disclosures, and flag cases that need follow-up. The interface mimics natural chat interactions, making it accessible even for users with limited digital experience.

      A custom integration system enables real-time data transmission to a central database. The accompanying dashboard provides visibility into disclosures as they occur, tracks case assignments, and displays report status updates. This infrastructure gives teams the oversight needed for timely action and accountability.

      By combining secure field operations with real-time data management and clear reporting mechanisms, the solution creates a scalable bridge between case identification and response, demonstrating how thoughtful technology can address real-world challenges in humanitarian contexts.`,
    deliverables: [
      "WhatsApp-based chatbot system",
      "User training materials and protocols",
      "Technical documentation",
      "Field deployment support",
      "Database integration system",
      "Virtual training sessions",
      "Ongoing technical support"
    ],
    impact: [
      {
        title: "90% Increase in GBV Disclosures",
        description: "Within the first phase of deployment, the system recorded over 90% more disclosures compared to traditional paper-based methods. This demonstrates how accessible, private, and user-friendly tools can significantly increase community confidence in reporting sensitive issues. By reducing stigma, ensuring confidentiality, and using a familiar platform, the solution proved that digital trust and accessibility directly translate into greater information-sharing and more timely support for survivors."
      },
      {
        title: "Real-Time Monitoring & Accountability",
        description: "Case managers now access a centralized tracking system to view disclosures, monitor their status (ongoing, referred, or resolved), and assign follow-ups—promoting full visibility and accountability across the response process."
      },
      {
        title: "Reduced Administrative Burden", 
        description: "The automated system significantly reduces manual paperwork, freeing up time for outreach workers to focus on direct service provision and survivor support rather than administrative tasks."
      }
    ],
    news: [
      {
        title: "AP News",
        url: "https://apnews.com/article/technology-gender-based-violence-south-sudan-sexual-assault-981be393459e5c0724e1dc1793e4d0e6",
        description: "Technology helps combat gender-based violence in crisis regions"
      },
      {
        title: "Elrha",
        url: "https://www.elrha.org/projects/anenasawa-gbv-sms-bot-for-community-outreach-workers",
        description: "GBV Intervention Chatbot: GBV response bot for community outreach workers"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectHeroSection 
        title={projectData.title}
        description={projectData.description}
        problemStatement={projectData.problemStatement}
        solutionStatement={projectData.solutionStatement}
        citation={projectData.citation}
        imageUrl={projectData.imageUrl}
      />
      <ProjectProblemSolution 
        problemStatement={projectData.problemStatement}
        solutionStatement={projectData.solutionStatement}
        citation={projectData.citation}
      />
      <ProjectApproach approach={projectData.approach} />
      <ProjectDeliverables deliverables={projectData.deliverables} />
      <ProjectImpact impactItems={projectData.impact} />
      <ProjectNews newsItems={projectData.news} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Anenasawa;
