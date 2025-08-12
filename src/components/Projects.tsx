import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Nau! Saas",
      description: "Desenvolvi e integrei interfaces de usuário para o projeto \"Nau!\", com foco no desenvolvimento front-end para plataformas web e mobile. Projeto de delivery com interface moderna e responsiva.",
      technologies: ["NextJS", "ReactJS", "TailwindCSS"],
      liveLink: "https://www.naudelivery.com.br/",
      githubLink: "https://github.com/danilosiq",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Book Wise - Dev Full Stack",
      description: "Aplicação de reviews de livros com autenticação via Google e GitHub (NextAuth). Utilizei Prisma com banco de dados Neon e React Query para gerenciamento eficiente de dados.",
      technologies: ["TailwindCSS", "NextJS", "ReactJS", "Prisma", "NextAuth"],
      liveLink: "https://book-wise-coral-kappa.vercel.app/",
      githubLink: "https://github.com/danilosiq",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "PI-LAV - Lavanderia Delivery",
      description: "Projeto acadêmico desenvolvido desde o primeiro período, consiste numa aplicação web que une o conceito de serviço de lavagem de roupa com delivery. Interface intuitiva e funcional.",
      technologies: ["TailwindCSS", "NextJS", "ReactJS"],
      liveLink: "https://pi-lav.vercel.app/login",
      githubLink: "https://github.com/danilosiq",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, utilizando as melhores práticas e tecnologias modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot do projeto ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Projeto
                    </a>
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;