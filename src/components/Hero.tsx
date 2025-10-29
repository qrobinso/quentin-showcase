import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile.png";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12 fade-in">
        {/* Profile Image and Name */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-2xl flex-shrink-0">
            <img 
              src={profileImage} 
              alt="Quentin" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight">
              Hi, I'm Quentin
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light italic">
              I build technology people and businesses actually want to use. Over sixteen years at Amazon and Verizon, 
              I've led teams that ship real experiences with a focus on GenAI services and IoT ecosystems. 
              I hold fifteen patents, but what matters is the impact: products that customers feel is made for them.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto md:mx-0 pt-8">
          {[
            { label: 'Years of Experience', value: '16+' },
            { label: 'Products Launched', value: '11' },
            { label: 'Customers Impacted', value: '250M' },
            { label: 'Patents', value: '15' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2 text-center md:text-left">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center md:justify-start pt-8">
          <Button 
            variant="default" 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            asChild
          >
            <a href="#work">View My Work</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="https://www.linkedin.com/in/querob/" target="_blank" rel="noopener noreferrer">
              LinkedIn <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
