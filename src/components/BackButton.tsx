import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
}

export const BackButton = ({ onClick, label = "Back", className }: BackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
    >
      <ArrowLeft className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
};
