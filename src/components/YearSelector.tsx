import { cn } from "@/lib/utils";

interface YearSelectorProps {
  onSelect: (year: number) => void;
}

const years = [
  { year: 1, label: "1st Year", description: "Just started your B.Tech journey" },
  { year: 2, label: "2nd Year", description: "Building foundations" },
  { year: 3, label: "3rd Year", description: "Preparing for internships" },
  { year: 4, label: "4th Year", description: "Final year, placement ready" },
];

export const YearSelector = ({ onSelect }: YearSelectorProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {years.map(({ year, label, description }) => (
        <button
          key={year}
          onClick={() => onSelect(year)}
          className={cn(
            "group relative p-6 rounded-xl glass-card",
            "transition-all duration-300 ease-out",
            "hover:-translate-y-2 hover:border-primary/50",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            "text-center overflow-hidden"
          )}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
              <span className="font-display text-2xl font-bold gradient-text">{year}</span>
            </div>
            <h4 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{label}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </button>
      ))}
    </div>
  );
};
