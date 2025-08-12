import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça um pouco mais sobre minha jornada, paixões e o que me motiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Personal Description */}
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Quem Sou Eu
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sou um jovem que vive intensamente tanto no universo online quanto no mundo artístico. 
                  Sempre estou em busca de algo novo para aprender, seja por curiosidade ou por vontade 
                  de me expressar melhor no que faço. Me considero uma pessoa calma, observadora e muito 
                  conectada com quem está ao meu redor.
                </p>
              </CardContent>
            </Card>

            {/* Motivation */}
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  O Que Me Move
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sou movido por hobbies, paixões e desafios. Estou sempre explorando novos interesses, 
                  mas sem nunca deixar de lado aquilo que me motiva desde o início e motivando aqueles 
                  que passo por perto na minha jornada.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Professional Experience */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Desenvolvedor Front-end
                </h3>
                <p className="text-muted-foreground mb-4">
                  Especializado em criar interfaces modernas e responsivas utilizando as mais 
                  recentes tecnologias do mercado. Foco em experiência do usuário e performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">NextJS</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">TailwindCSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  Estudante de Engenharia
                </h3>
                <p className="text-muted-foreground mb-4">
                  Cursando Engenharia de Software, sempre buscando unir teoria e prática 
                  para criar soluções inovadoras e eficientes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Arquitetura de Software</Badge>
                  <Badge variant="outline">Clean Code</Badge>
                  <Badge variant="outline">Design Patterns</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;