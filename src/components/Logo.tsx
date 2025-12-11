import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative", sizes[size])}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("aspect-square", sizes[size])}
        >
          {/* Outer orbit ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="url(#orbitGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-[orbit-spin_20s_linear_infinite]"
          />
          
          {/* Middle orbit ring */}
          <ellipse
            cx="24"
            cy="24"
            rx="16"
            ry="8"
            stroke="url(#orbitGradient)"
            strokeWidth="1.5"
            transform="rotate(-20 24 24)"
            className="opacity-60"
          />
          
          {/* Core sphere gradient */}
          <circle cx="24" cy="24" r="10" fill="url(#coreGradient)" />
          
          {/* Highlight on sphere */}
          <circle cx="21" cy="21" r="3" fill="white" fillOpacity="0.3" />
          
          {/* Orbiting dot */}
          <circle cx="42" cy="24" r="3" fill="url(#dotGradient)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 24 24"
              to="360 24 24"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(270, 100%, 65%)" />
              <stop offset="100%" stopColor="hsl(35, 100%, 55%)" />
            </linearGradient>
            <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(270, 100%, 65%)" />
              <stop offset="50%" stopColor="hsl(200, 100%, 60%)" />
              <stop offset="100%" stopColor="hsl(35, 100%, 55%)" />
            </linearGradient>
            <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(35, 100%, 55%)" />
              <stop offset="100%" stopColor="hsl(35, 100%, 45%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className={cn(
        "font-display font-bold gradient-text",
        size === "sm" && "text-lg",
        size === "md" && "text-xl",
        size === "lg" && "text-3xl"
      )}>
        SkillOrbit
      </span>
    </div>
  );
};
