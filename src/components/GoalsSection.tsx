import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Users, Rocket } from "lucide-react";

const GoalsSection = () => {
  const goals = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      category: "Short-term Goals",
      items: [
        "Master advanced React patterns and state management",
        "Complete AWS Cloud Practitioner certification",
        "Contribute to 5 open-source projects this year",
        "Build and deploy 3 full-scale applications"
      ]
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      category: "Long-term Vision",
      items: [
        "Become a senior full-stack developer",
        "Lead a development team on innovative projects",
        "Create impactful software solutions for social good",
        "Mentor aspiring developers in the tech community"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      category: "Professional Development",
      items: [
        "Expand expertise in machine learning and AI",
        "Develop strong product management skills",
        "Build a network of industry professionals",
        "Speaker at tech conferences and meetups"
      ]
    }
  ];

  return (
    <section id="goals" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Goals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ambitious objectives that drive my continuous growth and learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {goals.map((goalCategory, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {goalCategory.icon}
                </div>
                <CardTitle className="text-xl">{goalCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {goalCategory.items.map((goal, goalIndex) => (
                    <li key={goalIndex} className="flex items-start">
                      <Target className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card-gradient border-border/50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  My Mission
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To leverage technology as a force for positive change, creating innovative solutions that solve real-world problems 
                while continuously learning and sharing knowledge with the developer community. I believe in writing code that not 
                only works beautifully but also makes a meaningful impact on people's lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;