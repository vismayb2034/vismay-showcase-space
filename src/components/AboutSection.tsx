import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Lightbulb, Users, Zap } from "lucide-react";

const AboutSection = () => {
  const strengths = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Problem-Solving",
      description: "Adept at identifying issues and implementing effective solutions with creative approaches."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Adaptability", 
      description: "Comfortable working in fast-paced environments and adapting to new challenges quickly."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Teamwork",
      description: "Collaborate effectively within diverse teams and foster positive working relationships."
    }
  ];

  const hobbies = [
    "Coding Challenges", "Photography", "Guitar Playing", "Hiking", "Tech Podcasts", "Open Source"
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hi! I'm Vismay, a passionate software developer with a knack for creating efficient and scalable web applications. 
            I love solving complex problems and continuously learning new technologies to stay at the forefront of innovation.
          </p>
        </div>

        {/* Strengths */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">My Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {strength.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{strength.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">
            <Heart className="inline h-8 w-8 text-primary mr-3" />
            My Hobbies
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            When I'm not coding, you'll find me exploring these passions that keep me creative and inspired.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {hobbies.map((hobby, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {hobby}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;