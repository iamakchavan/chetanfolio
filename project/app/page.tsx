import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { WorkItem } from "@/components/work-item";
import { CollapsibleSection } from "@/components/collapsible-section";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Code, Palette, Lightbulb, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="main-container">
      <div className="content-card relative">
        <div className="theme-toggle animate-on-load">
          <ThemeToggle />
        </div>
        <div className="flex flex-row items-center md:items-center gap-10 md:gap-10 animate-on-load delay-100">
          <div className="avatar-container shrink-0">
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-border/30 bg-secondary">
              <AvatarImage src="/face.jpg" alt="Chetan Kittali" />
              <AvatarFallback className="text-lg">CK</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="min-w-0 flex flex-col justify-center">
            <h1 className="text-base md:text-2xl font-bold mb-2 md:mb-3 gradient-text">Hi, I am Chetan Kittali.</h1>
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-sm text-muted-foreground/90">
              <div className="flex items-center gap-1.5 md:gap-2 px-2 py-0.5 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <Briefcase size={12} className="md:w-4 md:h-4 text-primary" />
                <span>Data Scientist & Analyst</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-2 py-0.5 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <MapPin size={12} className="md:w-4 md:h-4 text-primary" />
                <span>Hubballi, Karnataka, India</span>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 mt-3 md:mt-4">
              <a 
                href="mailto:chetankittali7@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a 
                href="https://github.com/Neo28A" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a 
                href="https://www.linkedin.com/in/chetan-kittali-44b94928a/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>
        </div>
        
        <section className="section-container mt-8 animate-on-load delay-200">
          <h2 className="section-title">ABOUT</h2>
          <p className="about-text">
            I'm a <strong>data scientist</strong> specializing in <strong>advanced data analysis</strong> and 
            <strong>machine learning</strong>. I transform complex datasets into 
            <span className="about-highlight">strategic decisions</span>.
          </p>
          
          <div className="grid grid-cols-4 gap-2 mt-2">
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/20 border border-border/30 aspect-square">
              <Code size={20} className="mb-2 text-primary" />
              <span className="text-xs font-medium text-center">Data Analysis</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/20 border border-border/30 aspect-square">
              <Palette size={20} className="mb-2 text-primary" />
              <span className="text-xs font-medium text-center">Visualization</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/20 border border-border/30 aspect-square">
              <Lightbulb size={20} className="mb-2 text-primary" />
              <span className="text-xs font-medium text-center">ML Models</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/20 border border-border/30 aspect-square">
              <Briefcase size={20} className="mb-2 text-primary" />
              <span className="text-xs font-medium text-center">Problem Solver</span>
            </div>
          </div>
        </section>
        
        <div className="custom-separator" />
        
        <section className="section-container animate-on-load delay-250">
          <h2 className="section-title">SKILLS & EXPERTISE</h2>
          <div className="grid grid-cols-3 gap-3 py-2">
            <div className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/40 transition-colors">
              <h4 className="text-sm font-medium mb-2">Languages</h4>
              <p className="text-xs text-muted-foreground">Python, SQL</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/40 transition-colors">
              <h4 className="text-sm font-medium mb-2">Tools</h4>
              <p className="text-xs text-muted-foreground">Tableau, Excel, NumPy, Pandas</p>
            </div>
            <div className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/40 transition-colors">
              <h4 className="text-sm font-medium mb-2">Techniques</h4>
              <p className="text-xs text-muted-foreground">Statistical Modeling, Data Cleaning, ETL</p>
            </div>
          </div>
        </section>
        
        <div className="custom-separator" />
        
        <section className="section-container animate-on-load delay-300">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="p-3 rounded-lg bg-secondary/20 border border-border/30">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">Data Science Intern</h3>
              <span className="role-date">Aug 2024 - Jan 2025</span>
            </div>
            <div className="company-badge mt-2">
              <div className="w-6 h-6 bg-secondary flex items-center justify-center rounded-full">
                <span className="text-xs font-bold">H</span>
              </div>
              <span className="text-sm font-medium">Haegl Technologies</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Conducted advanced data analysis and built ML models, achieving significant improvements in data accuracy and processing efficiency.
            </p>
          </div>
        </section>
        
        <div className="custom-separator" />
        
        <section className="section-container animate-on-load delay-400">
          <h2 className="section-title">RECENT WORK</h2>
          <div className="space-y-0.5">
            <WorkItem 
              title="E-Commerce Product Categorization" 
              href="#ecommerce-categorization" 
              description="ML model with 98% accuracy for product classification"
              year="2025"
            />
            <WorkItem 
              title="Superstore Sales Performance" 
              href="#superstore-analysis" 
              description="Regional sales analysis with Tableau dashboards"
              year="2024"
            />
            <WorkItem 
              title="Healthcare Analytics" 
              href="#healthcare-analytics" 
              description="Patient health metrics analysis and visualization"
              year="2024"
            />
          </div>
        </section>
      </div>
    </main>
  );
}