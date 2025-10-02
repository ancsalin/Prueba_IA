import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, skills, profile, experiences, contact } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Linkedin, Phone, Mail, Download, MoveRight, Database, GitMerge, Server, Code } from 'lucide-react';
import AiRecommender from '@/components/ai-recommender';
import { PythonIcon, JavaIcon, SqlIcon } from '@/components/icons';

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
      <a href="#" className="font-headline text-xl font-bold text-primary">Andrés Salinas</a>
      <nav className="flex items-center gap-4">
        <Button variant="ghost" asChild>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </Button>
        <Button variant="ghost" asChild>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
        </Button>
        <Button asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </nav>
    </div>
  </header>
);

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-andres');
  return (
    <section id="hero" className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col gap-6">
        <Badge variant="outline" className="w-fit">Software Engineering Student</Badge>
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
          Crafting Digital Solutions with Code and Creativity
        </h1>
        <p className="text-lg text-muted-foreground">{profile}</p>
        <div className="flex gap-4 flex-wrap">
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
      </div>
      <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none lg:mx-0">
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
  <section id="skills" className="bg-muted/50 py-20 md:py-28">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Technical Skills</h2>
        <p className="mt-4 text-lg text-muted-foreground">A snapshot of the technologies I work with.</p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <Card key={skill} className="flex flex-col items-center justify-center p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-primary mb-3">{skillIcons[skill] || <Code />}</div>
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
            <Card key={project.title} className="flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300">
              {projectImage && (
                <div className="relative aspect-video">
                  <Image src={projectImage.imageUrl} alt={project.title} fill className="object-cover" data-ai-hint={projectImage.imageHint}/>
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
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
  <section id="ai-recommender" className="bg-muted/50 py-20 md:py-28">
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
    <div className="flex flex-col min-h-screen">
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
