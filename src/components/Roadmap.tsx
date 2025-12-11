import { getRoadmapData, Role, Domain } from "@/data/careerData";
import { RoadmapSection } from "./RoadmapSection";
import { 
  BookOpen, 
  Code, 
  Briefcase, 
  FileText, 
  Lightbulb, 
  Rocket, 
  StickyNote,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Building2,
  Check,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RoadmapProps {
  domain: Domain;
  role: Role;
  year: number;
}

export const Roadmap = ({ domain, role, year }: RoadmapProps) => {
  const data = getRoadmapData(role.id, year);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center pb-8 border-b border-border">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4">
          <span>{domain.icon}</span>
          <span>{domain.name}</span>
          <span className="mx-1">→</span>
          <span>{role.icon}</span>
          <span>{role.title}</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
          Your Career Roadmap
        </h1>
        <p className="text-muted-foreground">
          Starting from Year {year} • Personalized learning path
        </p>
      </div>

      {/* 1. Role Explanation */}
      <RoadmapSection title="Understanding the Role" icon={<GraduationCap className="w-5 h-5" />}>
        <div className="bg-card rounded-xl p-6 border border-border">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">
            {data.roleExplanation.title}
          </h3>
          <p className="text-muted-foreground mb-4">{data.roleExplanation.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Key Responsibilities</h4>
              <ul className="space-y-2">
                {data.roleExplanation.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">A Day in the Life</h4>
              <p className="text-sm text-muted-foreground">{data.roleExplanation.dayInLife}</p>
              
              <h4 className="font-semibold text-foreground mt-4 mb-2">Salary Range</h4>
              <p className="text-sm text-primary font-medium">{data.roleExplanation.salaryRange}</p>
            </div>
          </div>
        </div>
      </RoadmapSection>

      {/* 2. Skills & Courses */}
      <RoadmapSection title="Skills & Courses" icon={<BookOpen className="w-5 h-5" />}>
        <div className="space-y-4">
          {data.skills.map((skill, i) => (
            <div key={i} className="bg-card rounded-xl p-5 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <h4 className="font-display font-semibold text-foreground">{skill.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{skill.importance}</p>
              
              <div className="flex flex-wrap gap-2">
                {skill.freeCourses.map((course, j) => (
                  <a
                    key={j}
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {course.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RoadmapSection>

      {/* 3. Projects */}
      <RoadmapSection title="Top Projects to Build" icon={<Code className="w-5 h-5" />}>
        <div className="grid md:grid-cols-2 gap-4">
          {data.projects.map((project, i) => (
            <div key={i} className="bg-card rounded-xl p-5 border border-border card-hover">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-display font-semibold text-foreground">{project.title}</h4>
                <span className={cn(
                  "px-2 py-1 rounded text-xs font-medium",
                  project.difficulty === "Beginner" && "bg-green-500/10 text-green-400",
                  project.difficulty === "Intermediate" && "bg-yellow-500/10 text-yellow-400",
                  project.difficulty === "Advanced" && "bg-red-500/10 text-red-400"
                )}>
                  {project.difficulty}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.skills.map((skill, j) => (
                  <span key={j} className="px-2 py-0.5 rounded bg-secondary text-xs text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RoadmapSection>

      {/* 4. Internships */}
      <RoadmapSection title="Internship Platforms" icon={<Briefcase className="w-5 h-5" />}>
        <div className="grid md:grid-cols-2 gap-4">
          {data.internships.map((intern, i) => (
            <a
              key={i}
              href={intern.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-5 border border-border card-hover block"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {intern.platform}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-3">{intern.description}</p>
              <p className="text-xs text-primary">💡 {intern.tips}</p>
            </a>
          ))}
        </div>
      </RoadmapSection>

      {/* 5. LinkedIn Guide */}
      <RoadmapSection title="LinkedIn Mastery" icon={<Linkedin className="w-5 h-5" />}>
        <div className="bg-card rounded-xl p-6 border border-border space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-lg">👤</span> Profile Optimization
            </h4>
            <ul className="space-y-2">
              {data.linkedInGuide.profileTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">🤝</span> Networking Strategies
              </h4>
              <ul className="space-y-2">
                {data.linkedInGuide.networkingStrategies.map((strategy, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {strategy}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-lg">📝</span> Content Ideas
              </h4>
              <ul className="space-y-2">
                {data.linkedInGuide.contentIdeas.map((idea, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border">
            <div>
              <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                <Check className="w-5 h-5" /> Do's
              </h4>
              <ul className="space-y-2">
                {data.linkedInGuide.dosAndDonts.dos.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-green-400">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                <X className="w-5 h-5" /> Don'ts
              </h4>
              <ul className="space-y-2">
                {data.linkedInGuide.dosAndDonts.donts.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-red-400">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </RoadmapSection>

      {/* 6. Job Platforms */}
      <RoadmapSection title="Job Platforms" icon={<Building2 className="w-5 h-5" />}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.jobPlatforms.map((job, i) => (
            <a
              key={i}
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-5 border border-border card-hover block"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {job.platform}
                </h4>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{job.description}</p>
              <p className="text-xs text-accent mb-2">🎯 Best for: {job.bestFor}</p>
              <p className="text-xs text-primary">💡 {job.tips}</p>
            </a>
          ))}
        </div>
      </RoadmapSection>

      {/* 7. Resume Guide */}
      <RoadmapSection title="Resume Building Guide" icon={<FileText className="w-5 h-5" />}>
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Resume Sections</h4>
              <ol className="space-y-2">
                {data.resumeGuide.sections.map((section, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    {section}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Pro Tips</h4>
              <ul className="space-y-2">
                {data.resumeGuide.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-semibold text-foreground mb-3">Keywords to Include</h4>
            <div className="flex flex-wrap gap-2">
              {data.resumeGuide.keywords.map((keyword, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-semibold text-foreground mb-2">📸 Photo Guidelines</h4>
            <p className="text-sm text-muted-foreground">{data.resumeGuide.photoTips}</p>
          </div>
        </div>
      </RoadmapSection>

      {/* 8. Real-Time Implementation */}
      <RoadmapSection title="Real-World Applications" icon={<Rocket className="w-5 h-5" />}>
        <div className="space-y-4">
          {data.realTimeImplementation.map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-5 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-2">{item.scenario}</h4>
              <p className="text-sm text-muted-foreground mb-3">{item.implementation}</p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span>📈</span>
                <span>{item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </RoadmapSection>

      {/* 9. Business Ideas */}
      <RoadmapSection title="Startup & Business Ideas" icon={<Lightbulb className="w-5 h-5" />}>
        <div className="grid md:grid-cols-3 gap-4">
          {data.businessIdeas.map((idea, i) => (
            <div key={i} className="bg-card rounded-xl p-5 border border-border card-hover">
              <h4 className="font-display font-semibold text-foreground mb-2">{idea.idea}</h4>
              <p className="text-sm text-muted-foreground mb-3">{idea.description}</p>
              <p className="text-xs text-primary mb-3">💰 {idea.marketPotential}</p>
              <div className="flex flex-wrap gap-1">
                {idea.skills.map((skill, j) => (
                  <span key={j} className="px-2 py-0.5 rounded bg-secondary text-xs text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RoadmapSection>

      {/* 10. Notes */}
      <RoadmapSection title="Learning Notes" icon={<StickyNote className="w-5 h-5" />}>
        <div className="space-y-4">
          {data.notes.map((note, i) => (
            <div key={i} className="bg-card rounded-xl p-5 border border-border">
              <h4 className="font-display font-semibold text-foreground mb-2">{note.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{note.content}</p>
              <div className="flex flex-wrap gap-2">
                {note.resources.map((resource, j) => (
                  <a
                    key={j}
                    href={resource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Resource {j + 1}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RoadmapSection>
    </div>
  );
};