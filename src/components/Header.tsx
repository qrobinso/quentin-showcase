export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex-1" />
        
        <h2 className="text-lg md:text-xl font-serif font-bold text-foreground tracking-wider">
          QUENTIN ROBINSON
        </h2>
        
        <nav className="flex-1 flex justify-end gap-6">
          <a 
            href="#work" 
            className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
          >
            Work
          </a>
          <a 
            href="#side" 
            className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
          >
            Fun
          </a>
          <a 
            href="#patents" 
            className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
          >
            Patents
          </a>
        </nav>
      </div>
    </header>
  );
};
