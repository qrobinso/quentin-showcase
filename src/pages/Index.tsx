import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { PatentTable } from "@/components/PatentTable";
import { ChatWidget } from "@/components/ChatWidget";
import { workProjects, sideProjects, patents } from "@/data/projects";
const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return <main className="min-h-screen">
      <Header onChatClick={() => setIsChatOpen(!isChatOpen)} />
      <Hero />
      
      <ProjectGallery id="work" title="Work Projects" description="Products and platforms that have impacted millions of users" projects={workProjects} />
      
      <ProjectGallery id="side" title="Side Projects" description="Personal explorations and open-source contributions" projects={sideProjects} />
      
      <PatentTable id="patents" title="Patent Portfolio" description="Innovations in IoT, AI, and distributed systems" patents={patents} />

      <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
      
      <footer className="pt-12 pb-32 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Quentin Robinson. Product Leader specializing in IoT, Smart Home, and B2B Enterprise Solutions.</p>
          <nav className="mt-4 flex justify-center gap-6 text-sm" aria-label="Footer navigation">
            <a href="#work" className="hover:text-primary transition-colors">Work Projects</a>
            <a href="#side" className="hover:text-primary transition-colors">Side Projects</a>
            <a href="#patents" className="hover:text-primary transition-colors">Patents</a>
            <a href="https://www.linkedin.com/in/querob/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/qrobinso" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </nav>
        </div>
      </footer>
    </main>;
};
export default Index;