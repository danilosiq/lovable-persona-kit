import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Danilo Dante Siqueira</h3>
            <p className="text-muted-foreground">
              Desenvolvedor Front-end apaixonado por criar experiências digitais incríveis.
              Sempre em busca de novos desafios e oportunidades de aprendizado.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Rápidos</h4>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Sobre Mim
              </a>
              <a 
                href="#projects" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projetos
              </a>
              <a 
                href="#skills" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Habilidades
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Conecte-se</h4>
            <div className="space-y-3">
              <a
                href="mailto:danilodantesiqueira@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                danilodantesiqueira@gmail.com
              </a>
              <p className="text-muted-foreground">Curitiba - PR, Brasil</p>
              
              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/danilosiq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://br.linkedin.com/in/danilo-dante-siqueira-1a31a7234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://danilodantesiqueira.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200"
                  aria-label="Website"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Danilo Dante Siqueira. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Desenvolvido com <Heart className="w-4 h-4 text-red-500 fill-current" /> e muita dedicação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;