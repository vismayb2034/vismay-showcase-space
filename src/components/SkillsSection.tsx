import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 85 },
    { name: "C++", level: 75 }
  ];

  const frameworks = [
    "React", "Next.js", "Express.js", "Django", "FastAPI", "Tailwind CSS"
  ];

  const tools = [
    "Git", "VS Code", "Docker", "AWS", "MongoDB", "PostgreSQL", "Firebase", "Figma"
  ];

  const softSkills = [
    "Communication", "Critical Thinking", "Leadership", "Time Management", 
    "Problem Solving", "Team Collaboration", "Project Management", "Mentoring"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="bg-card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Programming Languages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Frameworks & Tools */}
          <div className="space-y-6">
            <Card className="bg-card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((framework, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-primary/10 text-foreground border border-primary/20"
                    >
                      {framework}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-accent/50 text-foreground border border-accent/30"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Soft Skills */}
        <Card className="mt-12 bg-card-gradient border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 text-foreground hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;