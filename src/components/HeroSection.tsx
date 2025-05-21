
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center py-24 bg-cover bg-center" 
      style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 100, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80"></div>
      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Ilham Izzul Hadyan
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">QA & Fullstack Developer</h2>
          <p className="text-lg md:text-xl mb-8 text-slate-200 max-w-2xl mx-auto lg:mx-0">
            Dedicated to ensuring software quality through expert manual and automated testing. 
            Crafting efficient solutions for seamless user experiences.
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" className="bg-transparent border-blue-400 text-blue-200 hover:bg-blue-900/40 px-8 py-6 rounded-md">
              <a href="/resume.pdf" download="Ilham_Izzul_Hadyan_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-400 overflow-hidden shadow-xl shadow-blue-900/40 bg-blue-100 dark:bg-blue-900">
            <img 
              src="/lovable-uploads/7e1e47c2-bb14-4557-b0a1-a1c102f40d05.png" 
              alt="Ilham Izzul Hadyan" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
