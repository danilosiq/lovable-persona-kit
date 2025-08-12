import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, ExternalLink, MessageCircle, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "danilodantesiqueira@gmail.com",
      link: "mailto:danilodantesiqueira@gmail.com",
      description: "Envie-me um email para discutirmos oportunidades"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Danilo Dante Siqueira",
      link: "https://br.linkedin.com/in/danilo-dante-siqueira-1a31a7234",
      description: "Conecte-se comigo profissionalmente"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "@danilosiq",
      link: "https://github.com/danilosiq",
      description: "Confira meus projetos e contribuições"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interessado em trabalhar juntos? Vamos conversar sobre seu próximo projeto!
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Vamos Conversar!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Estou sempre aberto a novas oportunidades e colaborações interessantes. 
                  Se você tem um projeto em mente ou apenas quer bater um papo sobre tecnologia, 
                  não hesite em entrar em contato!
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  Curitiba - PR, Brasil
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  Disponível para reuniões virtuais
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>O que posso fazer por você?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Desenvolvimento de aplicações web modernas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Criação de interfaces responsivas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Consultoria em tecnologias frontend
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Otimização de performance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {method.title === "Email" ? "Enviar Email" : `Acessar ${method.title}`}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Card className="card-hover bg-gradient-primary">
              <CardContent className="py-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Pronto para começar seu projeto?
                </h3>
                <p className="text-white/90 mb-6 max-w-md mx-auto">
                  Vamos transformar suas ideias em realidade digital!
                </p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  asChild
                >
                  <a
                    href="mailto:danilodantesiqueira@gmail.com?subject=Proposta de Projeto&body=Olá Danilo, gostaria de conversar sobre um projeto..."
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Iniciar Conversa
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;