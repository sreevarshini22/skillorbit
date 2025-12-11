import { useState } from "react";
import { Logo } from "@/components/Logo";
import { DomainCard } from "@/components/DomainCard";
import { RoleCard } from "@/components/RoleCard";
import { YearSelector } from "@/components/YearSelector";
import { Roadmap } from "@/components/Roadmap";
import { BackButton } from "@/components/BackButton";
import { Chatbot } from "@/components/Chatbot";
import { domains, Domain, Role } from "@/data/careerData";
import { cn } from "@/lib/utils";

type Step = "domains" | "roles" | "year" | "roadmap";

const Index = () => {
  const [step, setStep] = useState<Step>("domains");
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleDomainSelect = (domain: Domain) => {
    setSelectedDomain(domain);
    setStep("roles");
  };

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setStep("year");
  };

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    setStep("roadmap");
  };

  const handleBack = () => {
    if (step === "roles") {
      setStep("domains");
      setSelectedDomain(null);
    } else if (step === "year") {
      setStep("roles");
      setSelectedRole(null);
    } else if (step === "roadmap") {
      setStep("year");
      setSelectedYear(null);
    }
  };

  const handleReset = () => {
    setStep("domains");
    setSelectedDomain(null);
    setSelectedRole(null);
    setSelectedYear(null);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Star field background */}
      <div className="stars-bg" />
      
      {/* Background decorations */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="orbit-ring top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]" />
        <div className="orbit-ring-reverse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={handleReset}>
            <Logo />
          </button>
          
          {step !== "domains" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-muted-foreground">Domains</span>
              <span>→</span>
              <span className={cn(step === "roles" && "text-primary")}>Roles</span>
              <span>→</span>
              <span className={cn(step === "year" && "text-primary")}>Year</span>
              <span>→</span>
              <span className={cn(step === "roadmap" && "text-primary")}>Roadmap</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Step: Domains */}
        {step === "domains" && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Choose Your <span className="gradient-text">Domain</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select your B.Tech specialization to explore career opportunities and get a personalized roadmap
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {domains.map((domain) => (
                <DomainCard
                  key={domain.id}
                  domain={domain}
                  onClick={() => handleDomainSelect(domain)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step: Roles */}
        {step === "roles" && selectedDomain && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <BackButton onClick={handleBack} label="Back to Domains" className="mb-6" />
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
                <span>{selectedDomain.icon}</span>
                <span>{selectedDomain.fullName}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Select a <span className="gradient-text">Role</span>
              </h2>
              <p className="text-muted-foreground">
                Choose the career path that interests you
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {selectedDomain.roles.map((role) => (
                <RoleCard
                  key={role.id}
                  role={role}
                  onClick={() => handleRoleSelect(role)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step: Year Selection */}
        {step === "year" && selectedDomain && selectedRole && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <BackButton onClick={handleBack} label="Back to Roles" className="mb-6" />
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
                <span>{selectedRole.icon}</span>
                <span>{selectedRole.title}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Which <span className="gradient-text">Year</span> are you in?
              </h2>
              <p className="text-muted-foreground">
                We'll customize your roadmap based on your current year
              </p>
            </div>

            <YearSelector onSelect={handleYearSelect} />
          </div>
        )}

        {/* Step: Roadmap */}
        {step === "roadmap" && selectedDomain && selectedRole && selectedYear && (
          <div className="animate-fade-in max-w-5xl mx-auto">
            <BackButton onClick={handleBack} label="Change Year" className="mb-6" />
            
            <Roadmap
              domain={selectedDomain}
              role={selectedRole}
              year={selectedYear}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <Logo size="sm" className="justify-center mb-4" />
          <p className="text-sm text-muted-foreground">
            Helping B.Tech students navigate their career journey
          </p>
        </div>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
