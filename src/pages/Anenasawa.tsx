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
    title: "Anenasawa - A GBV Response Bot",
    description: "A WhatsApp-based chatbot designed to streamline gender-based violence (GBV) reporting by enabling outreach workers to record disclosures quickly, efficiently, and securely.",
    problemStatement: "In South Sudan, where up to 65% of women and girls experience gender-based violence (GBV), community outreach workers play a critical role in identifying and referring cases [1]. However, the early stages of GBV case identification and referral are hindered by poor connectivity, limited digital literacy among users, and ongoing dependence on paper-based methods. These conditions make the process slow, hard to supervise, and vulnerable to breaches of privacy and data loss. While some digital tools are available, they tend to focus on later phases of case management and often do not provide workable solutions for frontline reporting. As a result, the initial and most time-sensitive steps in the response chain remain disconnected and inefficient.",
    solutionStatement: `In response to the need for a more efficient way to manage GBV-related outreach in South Sudan, Anenasawa was introduced. It is a WhatsApp-based chat bot built specifically for outreach workers in areas with limited connectivity. The tool simplifies how cases are identified, reviewed, and referred by guiding users through structured conversation flows designed to support both general activity reporting and sensitive client disclosures.

    A supporting dashboard was also developed to visualize incoming reports, display which outreach worker is responsible for each case, and track the status of reports throughout the referral process. This setup reduces dependence on paper forms, improves data consistency, and provides the necessary visibility for timely and accountable responses.

    By combining accessible mobile technology with centralized monitoring, Anenasawa enhances the link between frontline outreach and formal case response. It enables outreach teams and case managers to address GBV incidents with improved speed, accuracy, and care.`,
    targetAudience: "7,080 beneficiaries (880 direct and 6200 indirect beneficiaries)",
    imageUrl: "/lovable-uploads/b8d90206-4440-480f-86cb-cc1228693e46.png",
    citation: "[1] Young, A. (2022, June 1). Gender-Based Violence Surges In South Sudan. The Organization for World Peace. Retrieved July 15, 2023, from https://theowp.org/reports/gender-based-violence-surges-in-south-sudan/",
    approach: `To ensure the Anenasawa bot delivered real impact, I spent three weeks on the ground in South Sudan, working side by side with outreach teams. This hands-on field testing allowed me to gather direct feedback, make rapid improvements, and fine-tune the tool to fit both the context and the users.

      The bot was built with a clear focus on security, simplicity, and functionality in areas with limited connectivity. I designed the conversation flow to guide outreach workers through a structured process. It helps them log outreach sessions, record disclosures, and flag cases that need follow up. The interface feels like a natural chat, making it easy to use even for those with little or no digital training.

      Behind the scenes, I built a custom system that sends data from the bot to a central database in real time. I also created a visual dashboard that displays disclosures as they come in, tracks caseworker assignments, and shows the current status of each report. This gives teams the visibility they need to take timely action and stay accountable.

      By combining secure field operations with real time data and clear reporting, I created a scalable solution that bridges the gap between case identification and response. It is a practical example of how thoughtful technology can solve real-world problems in humanitarian settings.`,
    deliverables: [
      "A WhatsApp chat bot",
      "Mode of Staff Operation with the new bot involvement",
      "Donor Report",
      "3 weeks of In-person training",
      "Chatbot integration with spreadsheet application",
      "3+ hours of Virtual training",
      "Priority IT support"
    ],
    impact: [
      {
        title: "90% Increase in GBV Disclosures",
        description: "Within the first phase of field deployment, Anenasawa recorded over 90% more disclosures compared to traditional paper-based methods. This surge demonstrates how accessible, private, and user-friendly tools—like a WhatsApp-based chatbot—can significantly increase community confidence in reporting sensitive issues. By reducing stigma, ensuring confidentiality, and using a familiar platform, Anenasawa proved that digital trust and accessibility directly translate into greater information-sharing and more timely support for survivors."
      },
      {
        title: "Real-Time Monitoring & Accountability",
        description: "Case managers now access a tracking data table to view disclosures, track their status (ongoing, referred, or discarded), and assign follow-ups—promoting full visibility and accountability."
      },
      {
        title: "Reduced Administrative Burden", 
        description: "The bot significantly reduces manual paperwork, freeing up time for outreach workers to focus on direct service provision and survivor support."
      }
    ],
    news: [
      {
        title: "AP News",
        url: "https://apnews.com/article/technology-gender-based-violence-south-sudan-sexual-assault-981be393459e5c0724e1dc1793e4d0e6",
        description: "Technology helps combat gender-based violence in South Sudan"
      },
      {
        title: "Elrha",
        url: "https://www.elrha.org/projects/anenasawa-gbv-sms-bot-for-community-outreach-workers",
        description: "Anenasawa: GBV SMS bot for community outreach workers"
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
