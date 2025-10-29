interface HeaderProps {
  onChatClick: () => void;
}
export const Header = ({
  onChatClick
}: HeaderProps) => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center md:justify-between">
        <h2 className="hidden md:block text-lg md:text-xl font-serif font-bold text-foreground tracking-wider">quentin robinson</h2>
        
        <nav className="flex gap-6 justify-center">
          <a href="#work" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
            Work
          </a>
          <a href="#side" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
            Fun
          </a>
          <a href="#patents" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
            Patents
          </a>
          <button onClick={onChatClick} className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">
            Chat
          </button>
        </nav>
      </div>
    </header>;
};