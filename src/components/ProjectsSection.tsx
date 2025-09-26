import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and beautiful gradients.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveDemo: "#",
      github: "#",
      image: "🌐"
    },
    {
      title: "E-Commerce Platform", 
      description: "Full-stack e-commerce application with user authentication, payment processing, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveDemo: "#",
      github: "#",
      image: "🛒"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      liveDemo: "#", 
      github: "#",
      image: "✅"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, data visualization, and responsive design.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      liveDemo: "#",
      github: "#",
      image: "🌤️"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating various skills and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-foreground border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
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

export default ProjectsSection;