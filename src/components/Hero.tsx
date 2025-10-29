import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-12 fade-in">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight">
          Hi, I'm Quentin
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light italic">
          I build technology people and businesses actually want to use. Over sixteen years at Amazon and Verizon, 
          I've led teams that ship real experiences with a focus on GenAI services and IoT ecosystems. 
          I hold fifteen patents, but what matters is the impact: products that customers feel is made for them.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-8">
          {[
            { label: 'Years of Experience', value: '16+' },
            { label: 'Products Launched', value: '11' },
            { label: 'Customers Impacted', value: '250M' },
            { label: 'Patents', value: '15' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center pt-8">
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
