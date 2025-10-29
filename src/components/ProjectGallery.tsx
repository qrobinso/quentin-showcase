import { useState } from "react";
import { Project } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageGalleryModal } from "@/components/ImageGalleryModal";

interface ProjectGalleryProps {
  title: string;
  description: string;
  projects: Project[];
  id: string;
}

export const ProjectGallery = ({ title, description, projects, id }: ProjectGalleryProps) => {
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>(
    projects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {})
  );
  const [modalState, setModalState] = useState<{ isOpen: boolean; projectId: string | null }>({
    isOpen: false,
    projectId: null
  });

  const handlePrevious = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: prev[projectId] === 0 ? project.images.length - 1 : prev[projectId] - 1
    }));
  };

  const handleNext = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectId]: prev[projectId] === project.images.length - 1 ? 0 : prev[projectId] + 1
    }));
  };

  const openModal = (projectId: string) => {
    setModalState({ isOpen: true, projectId });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, projectId: null });
  };

  const currentModalProject = projects.find(p => p.id === modalState.projectId);

  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="hover-lift overflow-hidden group border-border bg-card shadow-lg"
            >
              <div 
                className="aspect-[4/3] overflow-hidden bg-muted relative cursor-pointer"
                onClick={() => openModal(project.id)}
              >
                <img 
                  src={project.images[currentImageIndices[project.id] || 0]} 
                  alt={`${project.title} - Image ${(currentImageIndices[project.id] || 0) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {project.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => handlePrevious(project.id, e)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => handleNext(project.id, e)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {project.images.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1.5 rounded-full transition-all ${
                            index === (currentImageIndices[project.id] || 0)
                              ? "w-6 bg-white"
                              : "w-1.5 bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-2xl font-serif group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-muted-foreground hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <Badge variant="secondary" className="w-fit">
                  {project.date}
                </Badge>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {currentModalProject && (
        <ImageGalleryModal
          images={currentModalProject.images}
          initialIndex={currentImageIndices[currentModalProject.id] || 0}
          isOpen={modalState.isOpen}
          onClose={closeModal}
          projectTitle={currentModalProject.title}
        />
      )}
    </section>
  );
};
