
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            About Me
          </span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/3">
            <Card className="overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 bg-white dark:bg-slate-800">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/7e1e47c2-bb14-4557-b0a1-a1c102f40d05.png" 
                  alt="Ilham Izzul Hadyan" 
                  className="w-full aspect-square object-cover" 
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              QA & Fullstack Developer with a Passion for Quality
            </h3>
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              With over 3 years of experience in Quality Assurance and Fullstack Development, 
              I specialize in creating robust automation frameworks and ensuring seamless software 
              experiences. My expertise spans both manual and automated testing, with a focus on 
              creating efficient, scalable solutions.
            </p>
            <p className="text-lg mb-6 text-slate-700 dark:text-slate-300">
              At Pupuk Indonesia, I developed automation dashboards and comprehensive QA systems 
              that significantly improved testing efficiency. I'm passionate about implementing 
              best practices in software testing and continuously expanding my technical knowledge.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              My approach combines attention to detail with a strategic vision, ensuring that 
              the software meets both functional requirements and provides an excellent user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
