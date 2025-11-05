import { useState } from "react";
import { Project } from "@/data/projects";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface PatentTableProps {
  title: string;
  description: string;
  patents: Project[];
  id: string;
}

export const PatentTable = ({ title, description, patents, id }: PatentTableProps) => {
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const toggleDomain = (domain: string) => {
    setSelectedDomains(prev => 
      prev.includes(domain) ? prev.filter(d => d !== domain) : [...prev, domain]
    );
  };

  const filteredPatents = patents.filter(patent => {
    const domainMatch = selectedDomains.length === 0 || (patent.domain && selectedDomains.includes(patent.domain));
    return domainMatch;
  });

  const uniqueDomains = Array.from(new Set(patents.map(p => p.domain).filter(Boolean))) as string[];

  return (
    <section id={id} className="py-24 px-6" aria-labelledby="patents-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 space-y-4">
          <h2 id="patents-heading" className="text-5xl md:text-6xl font-serif font-bold text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex justify-center gap-3 pt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Domain {selectedDomains.length > 0 && `(${selectedDomains.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card z-50">
                <DropdownMenuLabel>Filter by Domain</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {uniqueDomains.map(domain => (
                  <DropdownMenuCheckboxItem
                    key={domain}
                    checked={selectedDomains.includes(domain)}
                    onCheckedChange={() => toggleDomain(domain)}
                  >
                    {domain}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {selectedDomains.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedDomains([])}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </header>

        <div className="rounded-lg border border-border overflow-hidden bg-card shadow-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold text-foreground">Title</TableHead>
                <TableHead className="font-semibold text-foreground hidden md:table-cell">Description</TableHead>
                <TableHead className="font-semibold text-foreground hidden lg:table-cell">User Application</TableHead>
                <TableHead className="font-semibold text-foreground text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatents.map((patent) => (
                <TableRow key={patent.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-medium text-foreground w-1/5">
                    {patent.title}
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden md:table-cell w-2/5">
                    {patent.description}
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden lg:table-cell w-1/4">
                    {patent.userApplication}
                  </TableCell>
                  <TableCell className="text-muted-foreground text-right whitespace-nowrap">
                    {patent.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
