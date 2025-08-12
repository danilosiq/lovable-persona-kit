import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/72088614?v=4"
                alt="Danilo Dante Siqueira"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-elegant border-4 border-white"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Curitiba - PR</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Olá, eu sou{' '}
              <span className="text-gradient">Danilo</span>
            </h1>

            <div className="mb-6">
              <Badge variant="secondary" className="mb-2 text-sm">
                Desenvolvedor Front-end
              </Badge>
              <Badge variant="outline" className="ml-2 mb-2 text-sm">
                Estudante Engenharia de Software
              </Badge>
              <Badge variant="outline" className="ml-2 mb-2 text-sm">
                NextJS Specialist
              </Badge>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Poggers 🚀
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Desenvolvedor apaixonado por criar experiências digitais incríveis. 
              Especializado em React, NextJS e TailwindCSS.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
                size="lg"
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Entre em Contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/danilosiq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-200 shadow-md hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://br.linkedin.com/in/danilo-dante-siqueira-1a31a7234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-200 shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://danilodantesiqueira.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors duration-200 shadow-md hover:shadow-lg"
                aria-label="Website"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;