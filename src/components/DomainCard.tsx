import { cn } from "@/lib/utils";
import { Domain } from "@/data/careerData";

interface DomainCardProps {
  domain: Domain;
  onClick: () => void;
}

export const DomainCard = ({ domain, onClick }: DomainCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative p-6 rounded-xl glass-card",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:border-primary/50",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        "text-left w-full overflow-hidden"
      )}
    >
      {/* Gradient glow effect on hover */}
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        `bg-gradient-to-br ${domain.color}`
      )} style={{ opacity: 0 }} />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/20 transition-colors">
            {domain.icon}
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {domain.name}
            </h3>
            <p className="text-sm text-muted-foreground">{domain.fullName}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {domain.description}
        </p>
        
        <div className="flex items-center text-primary text-sm font-medium">
          <span>{domain.roles.length} Career Paths</span>
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
};
