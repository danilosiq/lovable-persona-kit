import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Brain, BookOpen, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6 text-primary" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "NextJS", "TailwindCSS", "Styled Components", "Responsive Design"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["Node.js", "Prisma", "SQL", "PostgreSQL", "MongoDB", "RESTful APIs", "NextAuth", "Neon Database"]
    },
    {
      title: "Ferramentas & DevOps",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: ["Git", "GitHub", "Vercel", "VS Code", "Figma", "React Query", "Webpack", "Vite"]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6 text-primary" />,
      skills: ["Trabalho em Equipe", "Comunicação", "Resolução de Problemas", "Criatividade", "Adaptabilidade", "Liderança"]
    }
  ];

  const learningAreas = [
    "React Native", "GraphQL", "Docker", "AWS", "Microservices", "Testing (Jest)", "Design Patterns", "System Architecture"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e competências que domino para criar soluções inovadoras
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-2">
                  {category.icon}
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-xl flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Sempre Aprendendo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center mb-6">
                Atualmente estudando e explorando novas tecnologias:
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {learningAreas.map((area, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm hover:bg-primary/10 transition-colors duration-200"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Tecnologias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Dedicação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;