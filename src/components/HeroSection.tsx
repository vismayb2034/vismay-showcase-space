import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="bg-text-gradient bg-clip-text text-transparent">
                Vismay
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/80 mb-8 leading-relaxed">
              A passionate software developer creating efficient and scalable web applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={scrollToAbout}
              >
                Learn More About Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 text-foreground hover:bg-primary/10"
              >
                View My Work
              </Button>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={heroImage} 
                alt="Vismay - Software Developer" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default HeroSection;