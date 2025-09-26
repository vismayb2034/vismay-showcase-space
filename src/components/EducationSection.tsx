import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "XYZ University",
      year: "2024",
      description: "Graduated with honors, focusing on software engineering and data structures",
      achievements: ["Dean's List 2022-2024", "Academic Excellence Award", "Computer Science Society President"],
      coursework: ["Data Structures & Algorithms", "Web Development", "Machine Learning", "Database Systems", "Software Engineering"]
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      status: "In Progress"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      status: "Completed"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2023", 
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formal Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="h-7 w-7 text-primary mr-3" />
              Formal Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="bg-card-gradient border-border/50 mb-6">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg text-primary font-medium">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{edu.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <BookOpen className="h-5 w-5 text-primary mr-2" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge 
                          key={courseIndex}
                          variant="secondary"
                          className="bg-primary/10 text-foreground border border-primary/20"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="h-7 w-7 text-primary mr-3" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card-gradient border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg">{cert.title}</h4>
                      <Badge 
                        variant={cert.status === "Completed" ? "default" : "secondary"}
                        className={cert.status === "Completed" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-accent text-accent-foreground"
                        }
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {cert.year}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;