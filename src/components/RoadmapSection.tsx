import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface RoadmapSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export const RoadmapSection = ({ title, icon, children, className }: RoadmapSectionProps) => {
  return (
    <section className={cn("animate-fade-in", className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="pl-0 md:pl-13">{children}</div>
    </section>
  );
};
