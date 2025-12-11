import { cn } from "@/lib/utils";
import { Role } from "@/data/careerData";

interface RoleCardProps {
  role: Role;
  onClick: () => void;
}

export const RoleCard = ({ role, onClick }: RoleCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative p-5 rounded-xl glass-card",
        "transition-all duration-300 ease-out",
        "hover:border-primary/50 hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        "text-left w-full overflow-hidden"
      )}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex items-center gap-3">
        <div className="text-2xl p-2 rounded-lg bg-secondary/50 group-hover:bg-primary/20 transition-colors">
          {role.icon}
        </div>
        <div className="flex-1">
          <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {role.title}
          </h4>
          <p className="text-sm text-muted-foreground">{role.description}</p>
        </div>
        <svg
          className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};
