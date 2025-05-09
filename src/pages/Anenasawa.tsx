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
    problemStatement: "In South Sudan, where up to 65% of women and girls experience gender-based violence (GBV), community outreach workers play a critical role in identifying and referring cases [1]. However, due to limited connectivity, low digital literacy, and reliance on insecure and costly paper documentation, this process is slow, difficult to monitor, and prone to safety and confidentiality risks. Existing digital systems like GBVIMS+ only support later stages of case management, leaving a major gap in the initial identification and referral process—an essential first step that remains manual, fragmented, and inefficient.",
    solutionStatement: "To bridge the critical gap between GBV case identification and digital case management in South Sudan, I developed Anenasawa—a WhatsApp-based reporting chat bot designed for community outreach workers operating in low-connectivity settings. Anenasawa streamlines the process of identifying, assessing, and referring GBV cases through structured, user-friendly chat flows tailored for both activity reviews and client disclosures. The bot ensures confidentiality by automatically deleting chat histories after submission while securely transmitting data to an integrated case management system.\n\nComplementing the bot is a real-time dashboard that displays incoming disclosures, tracks the assigned case workers, and monitors the status of each case—whether ongoing, referred, or discarded. This ensures full accountability and visibility throughout the referral and response process. By reducing reliance on paper forms, simplifying data collection, and enabling better oversight, Anenasawa empowers outreach workers and case managers alike to respond more efficiently and effectively to GBV incidents.",
    targetAudience: "7,080 beneficiaries (880 direct and 6200 indirect beneficiaries)",
    imageUrl: "/lovable-uploads/b8d90206-4440-480f-86cb-cc1228693e46.png",
    citation: "[1] Young, A. (2022, June 1). Gender-Based Violence Surges In South Sudan. The Organization for World Peace. Retrieved July 15, 2023, from https://theowp.org/reports/gender-based-violence-surges-in-south-sudan/",
    approach: "Understanding the critical need for confidentiality, ease of use, and low-bandwidth operation, I designed the Anenasawa bot to function securely and efficiently within the unique field conditions of South Sudan.\n\nTo ensure safety and controlled access, the bot is deployed exclusively on organization-issued smartphones, which are collected and returned to the office after each outreach session. This policy minimizes the risk of data leakage and ensures all interactions remain within a secure ecosystem.\n\nFor the conversational interface, I used Turn.io to design WhatsApp-based bot flows that guide outreach workers through structured processes—recording outreach activity, collecting GBV disclosures, and flagging cases for follow-up. The flow mimics natural conversation, making it accessible to users with limited digital literacy.\n\nOn the backend, I developed a custom Python integration to push bot data from Turn.io to Airtable. From there, I built a custom Streamlit dashboard that visualizes the data in real-time. This dashboard displays disclosures as they come in, tracks the caseworker assigned to each case, and shows the status of each report—ongoing, referred, or discarded—ensuring full transparency and accountability.\n\nThis approach combines secure field operations with centralized oversight, providing a practical and scalable solution to bridge the GBV case identification and referral gap.",
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
