import { Hero } from "@/components/Hero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { PatentTable } from "@/components/PatentTable";
import { ChatWidget } from "@/components/ChatWidget";
import { workProjects, sideProjects, patents } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <ProjectGallery 
        id="work"
        title="Work Projects"
        description="Products and platforms that have impacted millions of users"
        projects={workProjects}
      />
      
      <ProjectGallery 
        id="side"
        title="Side Projects"
        description="Personal explorations and open-source contributions"
        projects={sideProjects}
      />
      
      <PatentTable 
        id="patents"
        title="Patent Portfolio"
        description="Innovations in IoT, AI, and distributed systems"
        patents={patents}
      />

      <ChatWidget />
      
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Quentin. Building technology people love.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
