import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { PatentTable } from "@/components/PatentTable";
import { ChatWidget } from "@/components/ChatWidget";
import { workProjects, sideProjects, patents } from "@/data/projects";
const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return <div className="min-h-screen">
      <Header onChatClick={() => setIsChatOpen(!isChatOpen)} />
      <Hero />
      
      <ProjectGallery id="work" title="Work Projects" description="Products and platforms that have impacted millions of users" projects={workProjects} />
      
      <ProjectGallery id="side" title="Side Projects" description="Personal explorations and open-source contributions" projects={sideProjects} />
      
      <PatentTable id="patents" title="Patent Portfolio" description="Innovations in IoT, AI, and distributed systems" patents={patents} />

      <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      
      <footer className="pt-12 pb-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Quentin Robinson</p>
        </div>
      </footer>
    </div>;
};
export default Index;