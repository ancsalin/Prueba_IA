import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, skills, profile, experiences, contact } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Linkedin, Phone, Mail, Download, MoveRight, Database, GitMerge, Server, Code, Star } from 'lucide-react';
import AiRecommender from '@/components/ai-recommender';
import { PythonIcon, JavaIcon, SqlIcon } from '@/components/icons';

const Header = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-andres');
  return (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
      <a href="#" className="flex items-center gap-3">
         {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Andrés Salinas"
            width={40}
            height={40}
            className="rounded-full object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <span className="font-headline text-lg font-bold">Andrés Salinas</span>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#ai-recommender" className="hover:text-primary transition-colors">AI Recommender</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </nav>
      <div className="flex items-center gap-2">
         <Button variant="ghost" size="icon" asChild>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
        </Button>
         <Button variant="ghost" size="icon" asChild>
          <a href="#" aria-label="Star">
            <Star />
          </a>
        </Button>
      </div>
    </div>
  </header>
  )
};

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-andres');
  return (
    <section id="hero" className="container flex flex-col items-center justify-center text-center py-20 md:py-32 gap-6">
       <div className="relative w-32 h-32 md:w-40 md:h-40">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Andrés Salinas"
            fill
            className="rounded-full object-cover shadow-2xl"
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>
      <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter">
        ANDRÉS <span className="text-primary">SALINAS</span>
      </h1>
      <p className="max-w-4xl text-lg text-muted-foreground">{profile}</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Button size="lg" asChild>
          <a href="/andres_salinas_resume.pdf" download>
            <Download className="mr-2" /> Download Resume
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#projects">
            View My Work <MoveRight className="ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

const skillIcons: { [key: string]: React.ReactNode } = {
  'Python': <PythonIcon className="w-6 h-6" />,
  'Java': <JavaIcon className="w-6 h-6" />,
  'SQL': <SqlIcon className="w-6 h-6" />,
  'SQL Server': <Database />,
  'MySQL': <Database />,
  'Git': <GitMerge />,
  'Office 365': <Server />,
  'Active Directory': <Server />,
  'Android Studio': <Code />,
};

const SkillsSection = () => (
  <section id="skills" className="bg-background py-20 md:py-28">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Technical Skills</h2>
        <p className="mt-4 text-lg text-muted-foreground">A snapshot of the technologies I work with.</p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <Card key={skill} className="bg-card flex flex-col items-center justify-center p-6 text-center hover:bg-secondary transition-colors duration-300">
            <div className="text-accent mb-3">{skillIcons[skill] || <Code />}</div>
            <p className="font-semibold">{skill}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-28">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">My Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">A selection of projects I've built.</p>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const projectImage = PlaceHolderImages.find(p => p.id === project.id);
          return (
            <Card key={project.title} className="bg-card flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300 hover:shadow-primary/20 shadow-lg">
              {projectImage && (
                <div className="relative aspect-video">
                  <Image src={projectImage.imageUrl} alt={project.title} fill className="object-cover" data-ai-hint={projectImage.imageHint}/>
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                 <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);

const AiRecommendationSection = () => (
  <section id="ai-recommender" className="py-20 md:py-28">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Personalized Recommendations</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Use my AI assistant to see which of my projects and experiences are most relevant for a specific opportunity.
        </p>
      </div>
      <AiRecommender />
    </div>
  </section>
);


const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container max-w-2xl text-center">
       <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
       <p className="mt-4 text-lg text-muted-foreground">I'm open to new opportunities and collaborations. Feel free to reach out!</p>
       <div className="mt-8 flex justify-center gap-6 text-muted-foreground">
         <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin />
            <span>LinkedIn</span>
         </a>
         <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
           <Phone />
           <span>{contact.phone}</span>
         </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
           <Mail />
           <span>Email</span>
         </a>
       </div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="border-t">
    <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4">
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Andrés Salinas. All rights reserved.</p>
       <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
        </Button>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AiRecommendationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
